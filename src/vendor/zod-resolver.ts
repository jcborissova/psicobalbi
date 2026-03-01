import type { Resolver, FieldErrors } from "react-hook-form";
import { z } from "zod";

export function zodResolver<
  TFieldValues extends Record<string, unknown>,
  TSchema extends z.ZodTypeAny = z.ZodTypeAny,
>(
  schema: TSchema,
): Resolver<TFieldValues> {
  return async (values) => {
    const parsed = schema.safeParse(values);

    if (parsed.success) {
      return {
        values: parsed.data as TFieldValues,
        errors: {},
      };
    }

    const flattened = parsed.error.flatten().fieldErrors as Record<string, string[] | undefined>;
    const errors: FieldErrors<TFieldValues> = {};

    for (const [key, messages] of Object.entries(flattened)) {
      const first = messages?.find(Boolean);
      if (!first) {
        continue;
      }

      errors[key as keyof TFieldValues] = {
        type: "validate",
        message: first,
      };
    }

    return {
      values: {} as TFieldValues,
      errors,
    };
  };
}
