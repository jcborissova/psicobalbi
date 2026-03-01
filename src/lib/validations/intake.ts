import { z } from "zod";

const consultationTypes = [
  "entrevista_inicial",
  "sesion_individual",
  "seguimiento",
] as const;

const modalities = ["virtual", "presencial"] as const;

const therapyExperienceOptions = ["si", "no", "prefiero_no_indicar"] as const;

const textField = (label: string, min: number, max: number) =>
  z
    .string()
    .trim()
    .min(min, `${label} debe tener al menos ${min} caracteres.`)
    .max(max, `${label} debe tener como máximo ${max} caracteres.`);

const phoneField = z
  .string()
  .trim()
  .min(7, "Ingresá un teléfono válido.")
  .max(30, "El teléfono es demasiado largo.")
  .refine((value) => /\d{7,}/.test(value.replace(/\D/g, "")), {
    message: "Ingresá un teléfono válido.",
  });

const ageField = z.coerce
  .number()
  .int("La edad debe ser un número entero.")
  .min(13, "La edad mínima para este formulario es 13 años.")
  .max(99, "Ingresá una edad válida.");

export const intakeSchema = z.object({
  fullName: textField("El nombre completo", 3, 120),
  age: ageField,
  phone: phoneField,
  email: z
    .string()
    .trim()
    .email("Ingresá un email válido.")
    .max(160, "El email es demasiado largo."),
  consultationType: z.enum(consultationTypes, { error: "Seleccioná el tipo de consulta." }),
  preferredModality: z.enum(modalities, { error: "Seleccioná la modalidad preferida." }),
  reasonForConsultation: textField("El motivo de consulta", 20, 1200),
  previousTherapyExperience: z.enum(therapyExperienceOptions, {
    error: "Indicá si tuviste experiencia previa en terapia.",
  }),
  preferredSchedule: textField("El horario preferido", 5, 300),
  consent: z.boolean().refine((value) => value === true, {
    message: "Necesitamos tu consentimiento para enviar la solicitud.",
  }),
});

export type IntakePayload = z.infer<typeof intakeSchema>;

export interface SanitizedIntakePayload extends IntakePayload {
  fullName: string;
  phone: string;
  email: string;
  reasonForConsultation: string;
  preferredSchedule: string;
}

export interface IntakeApiSuccess {
  success: true;
  message: string;
  data: {
    receivedAt: string;
    referenceId: string;
  };
}

export interface IntakeApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

function normalizeWhitespace(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function sanitizePhone(value: string) {
  const trimmed = normalizeWhitespace(value);
  const digits = trimmed.replace(/[^\d+]/g, "");
  return digits || trimmed;
}

export function sanitizeIntakePayload(input: IntakePayload): SanitizedIntakePayload {
  return {
    ...input,
    fullName: normalizeWhitespace(input.fullName),
    phone: sanitizePhone(input.phone),
    email: input.email.trim().toLowerCase(),
    reasonForConsultation: normalizeWhitespace(input.reasonForConsultation),
    preferredSchedule: normalizeWhitespace(input.preferredSchedule),
  };
}

export function zodFieldErrors(error: z.ZodError): Record<string, string[]> {
  const flattened = error.flatten().fieldErrors as Record<string, string[] | undefined>;
  const result: Record<string, string[]> = {};

  for (const [key, messages] of Object.entries(flattened)) {
    if (messages && messages.length > 0) {
      result[key] = messages.filter(Boolean) as string[];
    }
  }

  return result;
}
