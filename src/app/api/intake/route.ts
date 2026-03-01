import { randomUUID } from "node:crypto";

import { NextResponse } from "next/server";

import {
  intakeSchema,
  sanitizeIntakePayload,
  zodFieldErrors,
  type IntakeApiError,
  type IntakeApiSuccess,
} from "@/lib/validations/intake";

function errorResponse(
  status: number,
  message: string,
  errors?: Record<string, string[]>,
) {
  const payload: IntakeApiError = {
    success: false,
    message,
    ...(errors ? { errors } : {}),
  };

  return NextResponse.json(payload, { status });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return errorResponse(400, "Formato inválido. Enviá la información en JSON.");
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return errorResponse(400, "No se pudo leer el contenido enviado.");
  }

  const parsed = intakeSchema.safeParse(body);

  if (!parsed.success) {
    return errorResponse(
      400,
      "Revisá los campos del formulario e intentá nuevamente.",
      zodFieldErrors(parsed.error),
    );
  }

  try {
    const sanitized = sanitizeIntakePayload(parsed.data);
    const receivedAt = new Date().toISOString();
    const referenceId = `INT-${receivedAt.slice(0, 10).replace(/-/g, "")}-${randomUUID()
      .slice(0, 8)
      .toUpperCase()}`;

    console.info("[api/intake] solicitud recibida", {
      referenceId,
      receivedAt,
      payload: sanitized,
    });

    const response: IntakeApiSuccess = {
      success: true,
      message: "Solicitud recibida correctamente.",
      data: {
        receivedAt,
        referenceId,
      },
    };

    return NextResponse.json(response, { status: 201 });
  } catch {
    return errorResponse(
      500,
      "Ocurrió un error al procesar la solicitud. Intentá nuevamente en unos minutos.",
    );
  }
}
