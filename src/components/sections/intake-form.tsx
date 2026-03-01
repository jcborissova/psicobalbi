"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import {
  intakeSchema,
  type IntakeApiError,
  type IntakeApiSuccess,
  type IntakePayload,
} from "@/lib/validations/intake";
import { cn } from "@/lib/utils";

interface FormAlertState {
  type: "success" | "error";
  title: string;
  message: string;
  referenceId?: string;
}

const fieldWrapperClass = "grid gap-2";

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="text-xs leading-5 text-[#8a3333]">{message}</p>;
}

export function IntakeFormSection() {
  const [alert, setAlert] = useState<FormAlertState | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IntakePayload>({
    resolver: zodResolver<IntakePayload>(intakeSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      reasonForConsultation: "",
      preferredSchedule: "",
      consent: false,
    },
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    setAlert(null);

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as IntakeApiSuccess | IntakeApiError;

      if (!response.ok || !data.success) {
        const errorPayload = data as IntakeApiError;

        if (errorPayload.errors) {
          for (const [field, messages] of Object.entries(errorPayload.errors)) {
            const first = messages?.[0];
            if (!first) {
              continue;
            }

            setError(field as keyof IntakePayload, { message: first });
          }
        }

        setAlert({
          type: "error",
          title: "No pudimos enviar la solicitud",
          message:
            errorPayload.message ||
            "Revisá los datos del formulario e intentá nuevamente en unos minutos.",
        });
        return;
      }

      setAlert({
        type: "success",
        title: siteConfig.intakeForm.successTitle,
        message: siteConfig.intakeForm.successMessage,
        referenceId: data.data.referenceId,
      });

      reset({
        fullName: "",
        age: undefined,
        phone: "",
        email: "",
        consultationType: undefined,
        preferredModality: undefined,
        reasonForConsultation: "",
        previousTherapyExperience: undefined,
        preferredSchedule: "",
        consent: false,
      });
    } catch {
      setAlert({
        type: "error",
        title: "Error de conexión",
        message:
          "No se pudo enviar el formulario en este momento. Podés intentar nuevamente o contactarte por WhatsApp.",
      });
    }
  });

  return (
    <section id="entrevista-inicial" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
          <div className="space-y-6">
            <SectionHeading
              eyebrow={siteConfig.intakeForm.eyebrow}
              title={siteConfig.intakeForm.title}
              description={siteConfig.intakeForm.description}
            />

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-soft)]/45 px-5 py-4 text-sm leading-7 text-[var(--color-text-muted)] sm:px-6">
              <p>
                La entrevista inicial permite ordenar la consulta, revisar disponibilidad y proponer la modalidad más adecuada según tu situación actual.
              </p>
              <div className="mt-4">
                <BookingButton size="lg" className="w-full justify-center sm:w-auto" />
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-5 sm:p-6 lg:p-8">
              <form noValidate onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                    Datos personales y de contacto
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className={fieldWrapperClass}>
                      <Label htmlFor="fullName">Nombre completo</Label>
                      <Input
                        id="fullName"
                        placeholder="Ej. María González"
                        aria-invalid={Boolean(errors.fullName)}
                        {...register("fullName")}
                      />
                      <FieldError message={errors.fullName?.message} />
                    </div>

                    <div className={fieldWrapperClass}>
                      <Label htmlFor="age">Edad</Label>
                      <Input
                        id="age"
                        type="number"
                        min={13}
                        max={99}
                        inputMode="numeric"
                        placeholder="Ej. 34"
                        aria-invalid={Boolean(errors.age)}
                        {...register("age", {
                          setValueAs: (value) => (value === "" ? undefined : value),
                        })}
                      />
                      <FieldError message={errors.age?.message} />
                    </div>

                    <div className={fieldWrapperClass}>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Ej. +54 11 3456 7890"
                        aria-invalid={Boolean(errors.phone)}
                        {...register("phone")}
                      />
                      <FieldError message={errors.phone?.message} />
                    </div>

                    <div className={fieldWrapperClass}>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Ej. nombre@email.com"
                        aria-invalid={Boolean(errors.email)}
                        {...register("email")}
                      />
                      <FieldError message={errors.email?.message} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[var(--color-border)] pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                    Preferencias de consulta
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className={fieldWrapperClass}>
                      <Label htmlFor="consultationType">Tipo de consulta</Label>
                      <Select
                        id="consultationType"
                        aria-invalid={Boolean(errors.consultationType)}
                        defaultValue=""
                        {...register("consultationType")}
                      >
                        <option value="">Seleccionar...</option>
                        <option value="entrevista_inicial">Entrevista inicial</option>
                        <option value="sesion_individual">Sesión individual</option>
                        <option value="seguimiento">Seguimiento</option>
                      </Select>
                      <FieldError message={errors.consultationType?.message} />
                    </div>

                    <div className={fieldWrapperClass}>
                      <Label htmlFor="preferredModality">Modalidad preferida</Label>
                      <Select
                        id="preferredModality"
                        aria-invalid={Boolean(errors.preferredModality)}
                        defaultValue=""
                        {...register("preferredModality")}
                      >
                        <option value="">Seleccionar...</option>
                        <option value="virtual">Virtual</option>
                        <option value="presencial">Presencial</option>
                      </Select>
                      <FieldError message={errors.preferredModality?.message} />
                    </div>

                    <div className={fieldWrapperClass}>
                      <Label htmlFor="previousTherapyExperience">Experiencia previa en terapia</Label>
                      <Select
                        id="previousTherapyExperience"
                        aria-invalid={Boolean(errors.previousTherapyExperience)}
                        defaultValue=""
                        {...register("previousTherapyExperience")}
                      >
                        <option value="">Seleccionar...</option>
                        <option value="si">Sí</option>
                        <option value="no">No</option>
                        <option value="prefiero_no_indicar">Prefiero no indicar</option>
                      </Select>
                      <FieldError message={errors.previousTherapyExperience?.message} />
                    </div>

                    <div className={fieldWrapperClass}>
                      <Label htmlFor="preferredSchedule">Horario preferido</Label>
                      <Input
                        id="preferredSchedule"
                        placeholder="Ej. Martes y jueves después de las 18 hs"
                        aria-invalid={Boolean(errors.preferredSchedule)}
                        {...register("preferredSchedule")}
                      />
                      <FieldError message={errors.preferredSchedule?.message} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t border-[var(--color-border)] pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-brand)]">
                    Motivo de consulta
                  </p>

                  <div className={fieldWrapperClass}>
                    <Label htmlFor="reasonForConsultation">Contanos brevemente</Label>
                    <Textarea
                      id="reasonForConsultation"
                      placeholder="Podés compartir qué situación te gustaría trabajar y cómo te está afectando actualmente."
                      aria-invalid={Boolean(errors.reasonForConsultation)}
                      {...register("reasonForConsultation")}
                    />
                    <FieldError message={errors.reasonForConsultation?.message} />
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-soft)]/55 p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox id="consent" aria-invalid={Boolean(errors.consent)} {...register("consent")} />
                    <div className="space-y-1">
                      <Label htmlFor="consent" className="leading-6">
                        {siteConfig.intakeForm.consentText}
                      </Label>
                      <FieldError message={errors.consent?.message} />
                    </div>
                  </div>
                </div>

                {alert ? (
                  <div
                    role={alert.type === "error" ? "alert" : "status"}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-sm leading-6",
                      alert.type === "success"
                        ? "border-[var(--color-brand)]/25 bg-[var(--color-brand)]/8 text-[var(--color-text)]"
                        : "border-[#e6c8c8] bg-[#fcf3f3] text-[#7b2d2d]",
                    )}
                  >
                    <p className="font-medium">{alert.title}</p>
                    <p className="mt-1">{alert.message}</p>
                    {alert.referenceId ? (
                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        Referencia: {alert.referenceId}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-[var(--color-text-muted)]">
                    Recibirás respuesta para coordinación según disponibilidad de agenda.
                  </p>
                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : siteConfig.intakeForm.submitLabel}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
