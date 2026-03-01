"use client";

import { useRef, useState } from "react";

export type FieldValues = Record<string, unknown>;

export interface FieldError {
  type?: string;
  message?: string;
}

export type FieldErrors<TFieldValues extends FieldValues> = Partial<
  Record<keyof TFieldValues, FieldError>
>;

export interface ResolverResult<TFieldValues extends FieldValues> {
  values: TFieldValues;
  errors: FieldErrors<TFieldValues>;
}

export type Resolver<TFieldValues extends FieldValues> = (
  values: Partial<TFieldValues>,
) => Promise<ResolverResult<TFieldValues>> | ResolverResult<TFieldValues>;

export interface RegisterOptions {
  setValueAs?: (value: unknown) => unknown;
}

type RegisterBaseProps = {
  name: string;
  onChange: (event: unknown) => void;
  onBlur: () => Promise<void>;
  ref: () => undefined;
};

type RegisterReturn<TValue> = RegisterBaseProps &
  (TValue extends boolean
    ? {
        checked: boolean;
      }
    : {
        value: string | number | readonly string[] | undefined;
      });

export interface UseFormOptions<TFieldValues extends FieldValues> {
  resolver?: Resolver<TFieldValues>;
  defaultValues?: Partial<TFieldValues>;
  mode?: "onBlur" | "onChange" | "onSubmit" | string;
}

export interface SetErrorOptions {
  type?: string;
  message?: string;
}

export type SubmitHandler<TFieldValues extends FieldValues> = (
  values: TFieldValues,
) => void | Promise<void>;

function hasErrors<TFieldValues extends FieldValues>(errors: FieldErrors<TFieldValues>) {
  return Object.keys(errors).length > 0;
}

export function useForm<TFieldValues extends FieldValues>(
  options: UseFormOptions<TFieldValues> = {},
) {
  const { defaultValues = {}, resolver, mode = "onSubmit" } = options;
  const defaultsRef = useRef<Partial<TFieldValues>>(defaultValues);

  const [values, setValues] = useState<Partial<TFieldValues>>(defaultValues);
  const [errors, setErrors] = useState<FieldErrors<TFieldValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const runResolver = async (nextValues: Partial<TFieldValues>) => {
    if (!resolver) {
      setErrors({});
      return { values: nextValues as TFieldValues, errors: {} as FieldErrors<TFieldValues> };
    }

    const result = await resolver(nextValues);
    setErrors(result.errors);
    return result;
  };

  const register = <TName extends keyof TFieldValues>(
    name: TName,
    registerOptions?: RegisterOptions,
  ): RegisterReturn<TFieldValues[TName]> => {
    const currentValue = values[name];

    const applyValue = (raw: unknown) => {
      const transformed = registerOptions?.setValueAs
        ? registerOptions.setValueAs(raw)
        : raw;

      setValues((prev) => ({
        ...prev,
        [name]: transformed as TFieldValues[TName],
      }));

      setErrors((prev) => {
        if (!(name in prev)) {
          return prev;
        }

        const next = { ...prev };
        delete next[name];
        return next;
      });
    };

    const onChange = (event: unknown) => {
      const target =
        typeof event === "object" && event !== null && "target" in event
          ? (event as { target?: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement }).target
          : undefined;

      if (target) {
        if ((target as HTMLInputElement).type === "checkbox") {
          applyValue((target as HTMLInputElement).checked);
          return;
        }

        applyValue(target.value);
        return;
      }

      applyValue(event);
    };

    const onBlur = async () => {
      if (mode === "onBlur") {
        await runResolver(values);
      }
    };

    const baseProps = {
      name: String(name),
      onChange,
      onBlur,
      ref: () => undefined,
    };

    if (typeof currentValue === "boolean") {
      return {
        ...baseProps,
        checked: currentValue,
      } as unknown as RegisterReturn<TFieldValues[TName]>;
    }

    return {
      ...baseProps,
      value: (currentValue as string | number | readonly string[] | undefined) ?? "",
    } as unknown as RegisterReturn<TFieldValues[TName]>;
  };

  const handleSubmit = (onValid: SubmitHandler<TFieldValues>) => {
    return async (event?: { preventDefault?: () => void }) => {
      event?.preventDefault?.();
      setIsSubmitting(true);

      try {
        const result = await runResolver(values);

        if (hasErrors(result.errors)) {
          return;
        }

        await onValid(result.values as TFieldValues);
      } finally {
        setIsSubmitting(false);
      }
    };
  };

  const reset = (nextValues?: Partial<TFieldValues>) => {
    const resolved = nextValues ?? defaultsRef.current;
    setValues(resolved);
    setErrors({});
  };

  const setError = <TName extends keyof TFieldValues>(
    name: TName,
    error: SetErrorOptions,
  ) => {
    setErrors((prev) => ({
      ...prev,
      [name]: {
        type: error.type ?? "server",
        message: error.message,
      },
    }));
  };

  return {
    register,
    handleSubmit,
    reset,
    setError,
    formState: {
      errors,
      isSubmitting,
    },
  };
}
