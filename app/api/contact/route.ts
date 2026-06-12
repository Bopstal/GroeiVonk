import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequest = {
  name?: string;
  email?: string;
  role?: string;
  school?: string;
  message?: string;
  privacyConsent?: string;
  website?: string;
};

type ResendError = {
  message?: string;
  name?: string;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getResendErrorMessage(error: ResendError | null) {
  const message = error?.message ?? "";
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("api key") || lowerMessage.includes("permission")) {
    return "De Resend API key klopt niet of heeft geen verzendrechten. Controleer RESEND_API_KEY in Vercel.";
  }

  if (lowerMessage.includes("domain")) {
    return `Het afzenderadres of ontvangstadres is nog niet goed ingesteld. Resend meldt: ${message}`;
  }

  if (message) {
    return `Resend kon de mail niet versturen: ${message}`;
  }

  return "Het versturen is niet gelukt. Controleer de Resend logs voor de exacte oorzaak.";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactRequest | null;

  if (!body) {
    return NextResponse.json({ message: "Het formulier kon niet worden gelezen." }, { status: 400 });
  }

  if (asText(body.website)) {
    return NextResponse.json({ message: "Bedankt, we nemen binnenkort contact met je op." });
  }

  const name = asText(body.name);
  const email = asText(body.email);
  const role = asText(body.role);
  const school = asText(body.school);
  const message = asText(body.message);
  const privacyConsent = asText(body.privacyConsent);

  if (!name || !email || !role || !message) {
    return NextResponse.json(
      { message: "Vul je naam, e-mailadres, rol en bericht in." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Vul een geldig e-mailadres in." },
      { status: 400 },
    );
  }

  if (privacyConsent !== "yes") {
    return NextResponse.json(
      { message: "Geef toestemming om je gegevens te gebruiken voor contact over je bericht." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM ?? "Groeivonk <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json(
      {
        message:
          "Het formulier is nog niet gekoppeld aan een mailadres. Stel RESEND_API_KEY en CONTACT_TO in.",
      },
      { status: 503 },
    );
  }

  const emailText = [
    "Nieuwe aanmelding via Groeivonk.",
    "",
    `Naam: ${name}`,
    `E-mailadres: ${email}`,
    `Rol: ${role}`,
    `School: ${school || "Niet ingevuld"}`,
    "Toestemming: gegeven voor contact over dit bericht",
    "",
    "Bericht:",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Nieuwe pilot-aanmelding van ${name}`,
      text: emailText,
    }),
  });

  if (!response.ok) {
    const resendError = (await response.json().catch(() => null)) as ResendError | null;

    console.error("Resend kon de contactmail niet versturen", {
      status: response.status,
      error: resendError,
    });

    return NextResponse.json(
      { message: getResendErrorMessage(resendError) },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Bedankt, we nemen binnenkort contact met je op." });
}
