"use client";

import { useState } from "react";

type Step = "login" | "children" | "overview";

const children = [
  {
    name: "Emma van Dijk",
    group: "Groep 5",
    text: "Groeit zichtbaar in samenwerken en begrijpend lezen.",
  },
  {
    name: "Lucas van Dijk",
    group: "Groep 8",
    text: "Toont veel zelfstandigheid en interesse in techniek.",
  },
];

const statusBadges = [
  { label: "Welbevinden", value: "Positief" },
  { label: "Leren", value: "Mooie groei" },
  { label: "Aandachtspunt", value: "Begrijpend lezen" },
];

const developmentCards = [
  {
    title: "Sociaal-emotioneel",
    text: "Emma neemt steeds vaker initiatief tijdens groepsopdrachten en helpt andere kinderen wanneer zij vastlopen.",
  },
  {
    title: "Taal",
    text: "Emma leest vloeiender dan enkele maanden geleden. Begrijpend lezen blijft een aandachtspunt waar gericht mee geoefend wordt.",
  },
  {
    title: "Rekenen",
    text: "Emma werkt zelfstandiger aan nieuwe opdrachten en laat groei zien in automatiseren.",
  },
  {
    title: "Creativiteit",
    text: "Emma valt op door originele ideeën tijdens projectwerk en presentaties.",
  },
];

const timeline = [
  {
    month: "September",
    text: "Emma stelde nog weinig vragen wanneer ze iets lastig vond.",
  },
  {
    month: "Januari",
    text: "Emma begon vaker hulp te vragen en werkte rustiger aan opdrachten.",
  },
  {
    month: "April",
    text: "Emma nam meer initiatief tijdens samenwerken.",
  },
  {
    month: "Nu",
    text: "Emma deelt haar ideeën actief en reflecteert beter op haar eigen werk.",
  },
];

const talents = ["Creatief denken", "Samenwerken", "Doorzetten", "Presenteren", "Zorgzaam"];

const schoolActions = [
  "Begrijpend lezen versterken",
  "Zelfstandig plannen oefenen",
  "Reflecteren op eigen werk",
];

const homeActions = [
  "Samen hardop lezen",
  "Emma laten vertellen wat ze geleerd heeft",
  "Samen kleine planningen maken",
];

const moments = [
  "Emma presenteerde haar onderzoek over vulkanen.",
  "Emma nam tijdens het duurzaamheidsproject de rol van ontwerper op zich.",
  "Emma hielp een klasgenoot bij een lastige rekenopdracht.",
];

function SparkIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={className}>
      <path
        fill="currentColor"
        d="M24 4c1.3 8.2 4.1 14 12.4 16.2C28.1 22.4 25.3 28 24 44c-1.3-16-4.1-21.6-12.4-23.8C19.9 18 22.7 12.2 24 4Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="m5 12 4 4 10-10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blad text-white shadow-zacht">
        <SparkIcon />
      </span>
      <span className="text-xl font-black tracking-tight text-inkt">Groeivonk</span>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-7">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-aarde">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-inkt sm:text-4xl">{title}</h2>
    </div>
  );
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <main className="min-h-screen bg-[#FFF8ED] px-5 py-6 sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Brand />
        <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-blad shadow-sm ring-1 ring-inkt/10">
          Ouderportaal demo
        </span>
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex rounded-full bg-lucht px-4 py-2 text-sm font-bold text-blad">
            Ontwikkeling volgen in gewone taal
          </p>
          <h1 className="text-4xl font-black tracking-tight text-inkt sm:text-6xl">
            Welkom terug
          </h1>
          <p className="mt-5 text-lg leading-8 text-inkt/72">
            Log in om de ontwikkeling van je kind te volgen.
          </p>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            onLogin();
          }}
          className="rounded-[2rem] bg-white p-6 shadow-zacht ring-1 ring-inkt/8 sm:p-8"
        >
          <label htmlFor="username" className="block">
            <span className="mb-2 block text-sm font-bold text-inkt">Gebruikersnaam</span>
            <input
              id="username"
              name="username"
              defaultValue="demo_ouder"
              className="h-12 w-full rounded-2xl border border-inkt/10 bg-klei/45 px-4 text-base font-semibold text-inkt outline-none transition focus:ring-4 focus:ring-blad/20"
            />
          </label>
          <label htmlFor="password" className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-inkt">Wachtwoord</span>
            <input
              id="password"
              name="password"
              type="password"
              defaultValue="demoportaal"
              className="h-12 w-full rounded-2xl border border-inkt/10 bg-klei/45 px-4 text-base font-semibold text-inkt outline-none transition focus:ring-4 focus:ring-blad/20"
            />
          </label>
          <button
            type="submit"
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-blad px-7 text-base font-black text-white shadow-zacht transition hover:bg-[#356955] focus-visible:focus-ring"
          >
            Inloggen
            <ArrowIcon />
          </button>
          <div className="mt-6 rounded-2xl bg-lucht/70 p-4 text-sm leading-6 text-inkt/78">
            <p className="font-black text-inkt">Demo omgeving</p>
            <p>Gebruik demo_ouder om het ouderportaal te bekijken.</p>
          </div>
        </form>
      </section>
    </main>
  );
}

function ChildSelection({ onSelect }: { onSelect: () => void }) {
  return (
    <main className="min-h-screen bg-[#FFF8ED] px-5 py-6 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Brand />
        <section className="py-12 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-aarde">Ouderportaal</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-inkt sm:text-6xl">
            Mijn kinderen
          </h1>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {children.map((child) => (
              <article
                key={child.name}
                className="flex min-h-[280px] flex-col justify-between rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-inkt/8 sm:p-8"
              >
                <div>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-lucht text-blad">
                    <SparkIcon />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-aarde">
                    {child.group}
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-inkt">{child.name}</h2>
                  <p className="mt-4 text-lg leading-8 text-inkt/72">{child.text}</p>
                </div>
                <button
                  type="button"
                  onClick={onSelect}
                  className="mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-blad px-6 text-base font-black text-white transition hover:bg-[#356955] focus-visible:focus-ring"
                >
                  Bekijk ontwikkeling
                  <ArrowIcon />
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function InsightCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-inkt/8">
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-lucht text-blad">
        <SparkIcon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-black text-inkt">{title}</h3>
      <p className="mt-4 leading-7 text-inkt/72">{text}</p>
    </article>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 leading-7 text-inkt/76">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lucht text-blad">
            <CheckIcon />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DevelopmentOverview({ onBack }: { onBack: () => void }) {
  return (
    <main className="min-h-screen bg-[#FFF8ED] px-5 py-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Brand />
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-black text-inkt shadow-sm ring-1 ring-inkt/10 transition hover:bg-klei focus-visible:focus-ring"
          >
            Terug naar mijn kinderen
          </button>
        </header>

        <section className="py-10 sm:py-14">
          <div className="rounded-[2rem] bg-white p-6 shadow-zacht ring-1 ring-inkt/8 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-aarde">Groep 5</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-inkt sm:text-6xl">
                  Emma van Dijk
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-inkt/72">
                  Emma groeit zichtbaar in zelfvertrouwen, samenwerken en begrijpend lezen.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[520px]">
                {statusBadges.map((badge) => (
                  <div key={badge.label} className="rounded-2xl bg-klei/70 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-aarde">
                      {badge.label}
                    </p>
                    <p className="mt-2 text-lg font-black text-inkt">{badge.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <SectionHeader eyebrow="Ontwikkeling" title="Wat zichtbaar groeit" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {developmentCards.map((card) => (
              <InsightCard key={card.title} title={card.title} text={card.text} />
            ))}
          </div>
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Groei door de tijd" title="Kleine stappen met betekenis" />
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-inkt/8 sm:p-8">
            <div className="space-y-8 border-l-2 border-lucht pl-6 sm:pl-8">
              {timeline.map((item) => (
                <div key={item.month} className="relative">
                  <span className="absolute -left-[34px] top-1 flex h-5 w-5 rounded-full border-4 border-white bg-blad sm:-left-[42px]" />
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-aarde">
                    {item.month}
                  </p>
                  <p className="mt-2 text-lg leading-8 text-inkt/76">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Talenten" title="Wat Emma meebrengt" />
          <div className="flex flex-wrap gap-3">
            {talents.map((talent) => (
              <span
                key={talent}
                className="rounded-full bg-lucht px-5 py-3 text-base font-black text-blad"
              >
                {talent}
              </span>
            ))}
          </div>
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Hier werken we aan" title="Samen rond het kind" />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-inkt/8 sm:p-8">
              <h3 className="mb-5 text-2xl font-black text-inkt">Op school</h3>
              <CheckList items={schoolActions} />
            </article>
            <article className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-inkt/8 sm:p-8">
              <h3 className="mb-5 text-2xl font-black text-inkt">Thuis</h3>
              <CheckList items={homeActions} />
            </article>
          </div>
        </section>

        <section className="py-10">
          <SectionHeader eyebrow="Momenten uit de klas" title="Wat de leerkracht ziet" />
          <div className="grid gap-5 md:grid-cols-3">
            {moments.map((moment) => (
              <article key={moment} className="rounded-[1.5rem] bg-lucht/60 p-6">
                <p className="text-lg leading-8 text-inkt/78">{moment}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16 pt-10">
          <SectionHeader eyebrow="Bericht van de leerkracht" title="Een korte terugkoppeling" />
          <blockquote className="rounded-[2rem] bg-inkt p-6 text-xl font-semibold leading-9 text-white shadow-zacht sm:p-8">
            “Emma heeft de afgelopen weken een mooie stap gezet in haar zelfvertrouwen. Vooral
            tijdens samenwerkingsopdrachten zien we haar steeds meer initiatief nemen.”
          </blockquote>
        </section>
      </div>
    </main>
  );
}

export default function ParentPortalDemo() {
  const [step, setStep] = useState<Step>("login");

  if (step === "login") {
    return <LoginScreen onLogin={() => setStep("children")} />;
  }

  if (step === "children") {
    return <ChildSelection onSelect={() => setStep("overview")} />;
  }

  return <DevelopmentOverview onBack={() => setStep("children")} />;
}
