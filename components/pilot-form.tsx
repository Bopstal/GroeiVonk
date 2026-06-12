"use client";

import { FormEvent, useState } from "react";

const roles = ["Leerkracht", "Intern begeleider", "Schoolleider", "Ouder", "Anders"];

type SubmitState = "idle" | "sending" | "success" | "error";

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-2 block text-sm font-semibold text-inkt">{label}</span>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          required={required}
          className="w-full rounded-2xl border border-inkt/10 bg-white px-4 py-3 text-base text-inkt shadow-sm transition focus:outline-none focus:ring-4 focus:ring-blad/20"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className="h-12 w-full rounded-2xl border border-inkt/10 bg-white px-4 text-base text-inkt shadow-sm transition focus:outline-none focus:ring-4 focus:ring-blad/20"
        />
      )}
    </label>
  );
}

export function PilotForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Het versturen is niet gelukt.");
      }

      form.reset();
      setSubmitState("success");
      setMessage(result.message ?? "Bedankt, we nemen binnenkort contact met je op.");
    } catch (error) {
      setSubmitState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Het versturen is niet gelukt. Probeer het later opnieuw.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-klei/70 p-6 shadow-zacht ring-1 ring-inkt/8 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Naam" name="name" required />
        <Field label="E-mailadres" name="email" type="email" required />
        <label htmlFor="role" className="block">
          <span className="mb-2 block text-sm font-semibold text-inkt">Rol</span>
          <select
            id="role"
            name="role"
            required
            className="h-12 w-full rounded-2xl border border-inkt/10 bg-white px-4 text-base text-inkt shadow-sm transition focus:outline-none focus:ring-4 focus:ring-blad/20"
          >
            {roles.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </label>
        <Field label="School" name="school" />
        <div className="hidden">
          <label htmlFor="website">
            Website
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="sm:col-span-2">
          <Field label="Bericht" name="message" textarea required />
        </div>
      </div>
      <button
        type="submit"
        disabled={submitState === "sending"}
        className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-blad px-7 text-base font-bold text-white shadow-zacht transition hover:bg-[#356955] focus-visible:focus-ring disabled:cursor-not-allowed disabled:bg-blad/60 sm:w-auto"
      >
        {submitState === "sending" ? "Bericht wordt verstuurd..." : "Verstuur mijn bericht"}
      </button>
      {message ? (
        <p
          role="status"
          className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
            submitState === "success"
              ? "bg-lucht text-blad"
              : "bg-white text-aarde ring-1 ring-aarde/20"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
