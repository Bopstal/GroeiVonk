"use client";

import { useState } from "react";

type Step = "login" | "children" | "overview";
type Trend = "groei" | "stabiel" | "aandacht";
type DetailTab = "overview" | "development" | "portfolio" | "results" | "support";

type DevelopmentArea = {
  name: string;
  summary: string;
  trend: Trend;
  latestObservation: string;
  chart: { label: string; value: number }[];
  teacherObservations: string[];
  results: { label: string; value: string; note: string }[];
  portfolio: { title: string; description: string }[];
  goals: string[];
  homeAdvice: string[];
};

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

const developmentAreas: DevelopmentArea[] = [
  {
    name: "Begrijpend lezen",
    summary: "Emma legt steeds beter verbanden in teksten en durft haar redenering te delen.",
    trend: "groei",
    latestObservation:
      "Tijdens het thema vulkanen benoemde Emma zelfstandig de hoofdgedachte van een tekst.",
    chart: [
      { label: "September", value: 42 },
      { label: "Januari", value: 55 },
      { label: "April", value: 68 },
      { label: "Nu", value: 76 },
    ],
    teacherObservations: [
      "Emma markeert vaker sleutelwoorden voordat ze antwoord geeft.",
      "Ze kan haar antwoord steeds vaker onderbouwen met een zin uit de tekst.",
      "Hoofdgedachten herkennen vraagt nog bewuste oefening.",
    ],
    results: [
      { label: "Tekstbegrip januari", value: "55", note: "Meer grip op korte informatieve teksten." },
      { label: "Tekstbegrip april", value: "68", note: "Sterkere groei bij verbanden leggen." },
      { label: "Klasobservatie nu", value: "76", note: "Past leesstrategieen zelfstandiger toe." },
    ],
    portfolio: [
      {
        title: "Mindmap vulkanen",
        description: "Emma ordende informatie uit twee bronnen en vertelde wat belangrijk was.",
      },
      {
        title: "Leesgesprek",
        description: "Korte reflectie waarin Emma uitlegt hoe ze onbekende woorden aanpakt.",
      },
    ],
    goals: [
      "Hoofdgedachte herkennen in langere teksten.",
      "Signaalwoorden gebruiken om verbanden te vinden.",
    ],
    homeAdvice: [
      "Lees samen korte informatieve teksten en vraag wat het belangrijkste idee is.",
      "Laat Emma vertellen waarom ze een antwoord kiest.",
    ],
  },
  {
    name: "Technisch lezen",
    summary: "Het leestempo is rustiger en nauwkeuriger, vooral bij bekende woordrijen.",
    trend: "stabiel",
    latestObservation: "Emma leest hardop met meer rust en corrigeert zichzelf zonder spanning.",
    chart: [
      { label: "September", value: 61 },
      { label: "Januari", value: 64 },
      { label: "April", value: 66 },
      { label: "Nu", value: 67 },
    ],
    teacherObservations: [
      "Emma leest nauwkeurig wanneer ze vooraf weet wat het doel is.",
      "Bij lange woorden helpt het opdelen in stukjes.",
    ],
    results: [
      { label: "Woordrijen", value: "Stabiel", note: "Nauwkeurigheid blijft passend." },
      { label: "Hardop lezen", value: "Rustiger", note: "Minder haast bij onbekende woorden." },
    ],
    portfolio: [
      {
        title: "Voorleesfragment",
        description: "Kort fragment uit het projectboek met aandacht voor tempo en intonatie.",
      },
    ],
    goals: ["Lange woorden blijven opdelen.", "Vloeiend lezen zonder tempo te forceren."],
    homeAdvice: ["Lees om de beurt een alinea.", "Kies boeken waar Emma nieuwsgierig naar is."],
  },
  {
    name: "Spelling",
    summary: "Emma past bekende spellingregels toe, maar heeft steun aan korte herhaling.",
    trend: "aandacht",
    latestObservation: "Bij werkwoordspelling vraagt Emma soms bevestiging voordat ze verdergaat.",
    chart: [
      { label: "September", value: 54 },
      { label: "Januari", value: 57 },
      { label: "April", value: 56 },
      { label: "Nu", value: 59 },
    ],
    teacherObservations: [
      "Emma kent de regel vaak wel, maar gebruikt hem nog niet altijd automatisch.",
      "Een korte checkvraag helpt haar om zelfstandig te verbeteren.",
    ],
    results: [
      { label: "Dictee januari", value: "57", note: "Regels bekend, toepassing wisselend." },
      { label: "Schrijfopdracht nu", value: "Groei", note: "Meer zelfcorrectie zichtbaar." },
    ],
    portfolio: [
      {
        title: "Verhaal duurzame school",
        description: "Schrijfopdracht met verbeterde spelling na eigen revisie.",
      },
    ],
    goals: ["Werkwoordspelling controleren met een vaste stap.", "Eigen tekst nalezen op patronen."],
    homeAdvice: ["Laat Emma een kort bericht hardop nalezen.", "Oefen liever kort en vaak."],
  },
  {
    name: "Rekenen",
    summary: "Emma werkt zelfstandiger aan bekende somtypen en laat groei zien in automatiseren.",
    trend: "groei",
    latestObservation: "Tijdens zelfstandig werken maakte Emma minder fouten bij keersommen.",
    chart: [
      { label: "September", value: 58 },
      { label: "Januari", value: 64 },
      { label: "April", value: 71 },
      { label: "Nu", value: 79 },
    ],
    teacherObservations: [
      "Emma kiest vaker zelf een passende strategie.",
      "Ze controleert haar uitkomst voordat ze hulp vraagt.",
    ],
    results: [
      { label: "Automatiseren januari", value: "64", note: "Bekende somtypen gaan vlotter." },
      { label: "Automatiseren nu", value: "79", note: "Meer zekerheid en minder slordigheden." },
    ],
    portfolio: [
      {
        title: "Rekenstrategiekaart",
        description: "Emma maakte een eigen stappenkaart voor deelsommen.",
      },
    ],
    goals: ["Automatiseren onderhouden.", "Strategie uitleggen aan een klasgenoot."],
    homeAdvice: ["Gebruik korte rekenspelletjes.", "Vraag Emma hoe ze tot een antwoord komt."],
  },
  {
    name: "Zelfvertrouwen",
    summary: "Emma lijkt zekerder in de groep en deelt vaker wat ze denkt.",
    trend: "groei",
    latestObservation: "Ze stelde uit zichzelf een vraag tijdens de projectbespreking.",
    chart: [
      { label: "September", value: 60 },
      { label: "Januari", value: 63 },
      { label: "April", value: 78 },
      { label: "Nu", value: 84 },
    ],
    teacherObservations: [
      "Emma laat vaker merken wanneer ze iets lastig vindt.",
      "Ze deelt ideeen in kleine groepjes en soms ook klassikaal.",
    ],
    results: [
      { label: "Kindgesprek", value: "Positief", note: "Emma benoemt waar ze trots op is." },
      { label: "Observatie april", value: "Meer initiatief", note: "Zichtbaar tijdens projectwerk." },
    ],
    portfolio: [
      {
        title: "Reflectiekaart",
        description: "Emma schreef waar ze trots op was na haar presentatie.",
      },
    ],
    goals: ["Vragen blijven stellen.", "Een idee delen tijdens groepsstart."],
    homeAdvice: ["Vraag dagelijks naar een moment dat goed ging.", "Vier kleine stappen concreet."],
  },
  {
    name: "Samenwerken",
    summary: "Emma neemt vaker initiatief en helpt anderen zonder het werk over te nemen.",
    trend: "groei",
    latestObservation: "Bij het duurzaamheidsproject verdeelde Emma taken binnen haar groepje.",
    chart: [
      { label: "September", value: 52 },
      { label: "Januari", value: 61 },
      { label: "April", value: 73 },
      { label: "Nu", value: 81 },
    ],
    teacherObservations: [
      "Emma luistert goed naar ideeen van anderen.",
      "Ze durft haar eigen voorstel duidelijker te maken.",
    ],
    results: [
      { label: "Groepsopdracht", value: "Sterk", note: "Actieve rol als ontwerper." },
      { label: "Klasobservatie", value: "Groei", note: "Meer initiatief in overleg." },
    ],
    portfolio: [
      {
        title: "Duurzaamheidsproject",
        description: "Groepsposter waarin Emma de ontwerpkeuzes toelichtte.",
      },
    ],
    goals: ["Een taakverdeling blijven afspreken.", "Feedback geven met een concrete tip."],
    homeAdvice: ["Laat Emma thuis kleine taken plannen.", "Bespreek hoe samenwerken voelde."],
  },
  {
    name: "Concentratie",
    summary: "Emma werkt rustiger wanneer de taak in duidelijke stappen is verdeeld.",
    trend: "stabiel",
    latestObservation: "Met een korte planning bleef Emma langer bij haar rekenopdracht.",
    chart: [
      { label: "September", value: 57 },
      { label: "Januari", value: 62 },
      { label: "April", value: 63 },
      { label: "Nu", value: 65 },
    ],
    teacherObservations: [
      "Een zichtbare taakvolgorde helpt Emma om te starten.",
      "Korte pauzes voorkomen dat ze vastloopt.",
    ],
    results: [
      { label: "Werkhouding", value: "Stabiel", note: "Duidelijke structuur werkt goed." },
    ],
    portfolio: [
      {
        title: "Weektaak",
        description: "Voorbeeld van een planning die Emma zelf afvinkte.",
      },
    ],
    goals: ["Vooraf drie stappen opschrijven.", "Na tien minuten kort controleren."],
    homeAdvice: ["Maak huiswerk zichtbaar in kleine blokken.", "Gebruik een rustige startvraag."],
  },
  {
    name: "Creativiteit",
    summary: "Emma komt met originele ideeen en verbindt beelden, tekst en uitleg sterk.",
    trend: "groei",
    latestObservation: "Haar ontwerp voor het duurzaamheidsproject gaf het groepje richting.",
    chart: [
      { label: "September", value: 70 },
      { label: "Januari", value: 76 },
      { label: "April", value: 82 },
      { label: "Nu", value: 88 },
    ],
    teacherObservations: [
      "Emma denkt snel in mogelijkheden.",
      "Ze kan haar ontwerpkeuzes steeds beter uitleggen.",
    ],
    results: [
      { label: "Projectwerk", value: "Sterk", note: "Originele ideeen met duidelijke uitleg." },
    ],
    portfolio: [
      {
        title: "Ontwerp duurzame school",
        description: "Schets met legenda en korte presentatie aan de groep.",
      },
    ],
    goals: ["Ideeen koppelen aan een haalbare eerste stap.", "Ontwerpkeuzes kort onderbouwen."],
    homeAdvice: ["Laat Emma een idee tekenen en daarna uitleggen.", "Stel open maakvragen."],
  },
  {
    name: "Presenteren",
    summary: "Emma spreekt duidelijker en gebruikt haar voorbereiding als steun.",
    trend: "groei",
    latestObservation: "Tijdens haar vulkaanpresentatie keek ze vaker de klas in.",
    chart: [
      { label: "September", value: 48 },
      { label: "Januari", value: 59 },
      { label: "April", value: 70 },
      { label: "Nu", value: 78 },
    ],
    teacherObservations: [
      "Emma bereidt zich zorgvuldig voor.",
      "Ze durft meer contact te maken met haar publiek.",
    ],
    results: [
      { label: "Presentatie vulkanen", value: "Mooi gegroeid", note: "Duidelijke opbouw en stem." },
    ],
    portfolio: [
      {
        title: "Onderzoek vulkanen",
        description: "Presentatie met drie kernvragen en eigen tekeningen.",
      },
    ],
    goals: ["Beginnen met een duidelijke openingszin.", "Een vraag uit de klas beantwoorden."],
    homeAdvice: ["Laat Emma kort oefenen aan tafel.", "Geef een compliment op inhoud en houding."],
  },
  {
    name: "Zelfstandig werken",
    summary: "Emma vraagt gerichter hulp en rondt taken vaker af binnen de afgesproken tijd.",
    trend: "stabiel",
    latestObservation: "Ze gebruikte haar planning om zelfstandig aan taal en rekenen te werken.",
    chart: [
      { label: "September", value: 55 },
      { label: "Januari", value: 62 },
      { label: "April", value: 66 },
      { label: "Nu", value: 68 },
    ],
    teacherObservations: [
      "Emma start sneller wanneer ze weet wat klaar betekent.",
      "Ze vraagt hulp met een concretere vraag.",
    ],
    results: [
      { label: "Weektaak", value: "Stabiel", note: "Taken worden vaker afgemaakt." },
    ],
    portfolio: [
      {
        title: "Eigen planning",
        description: "Afgevinkte taaklijst met korte reflectie op wat lukte.",
      },
    ],
    goals: ["Startvraag zelf beantwoorden.", "Na afloop een korte reflectie invullen."],
    homeAdvice: ["Laat Emma eerst zelf een plan noemen.", "Vraag achteraf wat de eerste stap was."],
  },
];

const detailTabs: { id: DetailTab; label: string }[] = [
  { id: "overview", label: "Overzicht" },
  { id: "development", label: "Ontwikkeling" },
  { id: "portfolio", label: "Portfolio" },
  { id: "results", label: "Resultaten" },
  { id: "support", label: "School & Thuis" },
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
  {
    title: "Onderzoek vulkanen",
    text: "Emma presenteerde haar onderzoek over vulkanen aan de klas.",
  },
  {
    title: "Duurzaamheidsproject",
    text: "Emma nam tijdens het groepsproject de rol van ontwerper op zich.",
  },
  {
    title: "Samen leren",
    text: "Emma hielp een klasgenoot bij een lastige rekenopdracht.",
  },
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

function DevelopmentLineChart({
  title,
  data,
}: {
  title: string;
  data: { label: string; value: number }[];
}) {
  const min = Math.min(...data.map((item) => item.value));
  const max = Math.max(...data.map((item) => item.value));
  const range = Math.max(max - min, 1);
  const points = data.map((item, index) => {
    const x = 38 + (index / (data.length - 1)) * 224;
    const y = 104 - ((item.value - min) / range) * 72;

    return { ...item, x, y };
  });
  const linePoints = points.map((point) => `${point.x},${point.y}`).join(" ");

  return (
    <div className="overflow-hidden rounded-2xl bg-[#FBF6EE] p-3">
      <svg aria-label={`Ontwikkeling ${title}`} role="img" viewBox="0 0 300 150" className="h-52 w-full">
        <path d="M32 32H268" stroke="#DCEBE7" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M32 68H268" stroke="#DCEBE7" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M32 104H268" stroke="#DCEBE7" strokeLinecap="round" strokeWidth="1.5" />
        <polyline
          fill="none"
          points={linePoints}
          stroke="#3F7C65"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        {points.map((point) => (
          <circle
            key={point.label}
            cx={point.x}
            cy={point.y}
            fill="#FFF8ED"
            r="5"
            stroke="#3F7C65"
            strokeWidth="3"
          />
        ))}
        {points.map((point) => (
          <text
            key={`${point.label}-label`}
            fill="#8E5B3F"
            fontSize="10"
            fontWeight="700"
            textAnchor="middle"
            x={point.x}
            y="134"
          >
            {point.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

function TrendBadge({ trend }: { trend: Trend }) {
  const labels: Record<Trend, string> = {
    groei: "Groei",
    stabiel: "Stabiel",
    aandacht: "Aandacht",
  };
  const classes: Record<Trend, string> = {
    groei: "bg-lucht text-blad",
    stabiel: "bg-klei text-inkt",
    aandacht: "bg-[#F7E6CF] text-aarde",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.14em] ${classes[trend]}`}>
      {labels[trend]}
    </span>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="rounded-2xl bg-white p-4 leading-7 text-inkt/76 ring-1 ring-inkt/8">
          {item}
        </li>
      ))}
    </ul>
  );
}

function DevelopmentAreaDetail({
  area,
  activeTab,
  onTabChange,
}: {
  area: DevelopmentArea;
  activeTab: DetailTab;
  onTabChange: (tab: DetailTab) => void;
}) {
  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-zacht ring-1 ring-inkt/8 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <TrendBadge trend={area.trend} />
            <span className="text-sm font-bold text-aarde">Ontwikkelgebied</span>
          </div>
          <h3 className="text-3xl font-black tracking-tight text-inkt sm:text-4xl">{area.name}</h3>
          <p className="mt-4 text-lg leading-8 text-inkt/72">{area.summary}</p>
        </div>
        <div className="rounded-2xl bg-lucht/65 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-aarde">
            Laatste observatie
          </p>
          <p className="mt-2 leading-7 text-inkt/78">{area.latestObservation}</p>
        </div>
      </div>

      <div className="mt-7 flex gap-2 overflow-x-auto pb-2">
        {detailTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-black transition focus-visible:focus-ring ${
              activeTab === tab.id ? "bg-blad text-white" : "bg-klei/70 text-inkt hover:bg-lucht"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "overview" && (
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <h4 className="text-xl font-black text-inkt">Observaties van de leerkracht</h4>
              <div className="mt-4">
                <DetailList items={area.teacherObservations} />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-black text-inkt">Huidige doelen</h4>
              <div className="mt-4">
                <DetailList items={area.goals} />
              </div>
            </div>
          </div>
        )}

        {activeTab === "development" && (
          <div>
            <h4 className="mb-4 text-xl font-black text-inkt">Ontwikkelgrafiek over tijd</h4>
            <DevelopmentLineChart title={area.name} data={area.chart} />
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="grid gap-4 md:grid-cols-2">
            {area.portfolio.map((item) => (
              <article key={item.title} className="rounded-2xl bg-lucht/60 p-5">
                <h4 className="text-xl font-black text-inkt">{item.title}</h4>
                <p className="mt-3 leading-7 text-inkt/76">{item.description}</p>
              </article>
            ))}
          </div>
        )}

        {activeTab === "results" && (
          <div className="grid gap-4 md:grid-cols-3">
            {area.results.map((result) => (
              <article key={result.label} className="rounded-2xl bg-klei/60 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-aarde">
                  {result.label}
                </p>
                <p className="mt-3 text-2xl font-black text-inkt">{result.value}</p>
                <p className="mt-3 leading-7 text-inkt/72">{result.note}</p>
              </article>
            ))}
          </div>
        )}

        {activeTab === "support" && (
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-black text-inkt">Huidige doelen</h4>
              <div className="mt-4">
                <DetailList items={area.goals} />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-black text-inkt">Adviezen voor thuis</h4>
              <div className="mt-4">
                <DetailList items={area.homeAdvice} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TrendDot({ trend }: { trend: Trend }) {
  const classes: Record<Trend, string> = {
    groei: "bg-[#3F7C65]",
    stabiel: "bg-[#F3B45B]",
    aandacht: "bg-[#C85C4A]",
  };

  return <span className={`h-3 w-3 shrink-0 rounded-full ${classes[trend]}`} />;
}

function DevelopmentAreaTabs({
  areas,
  selectedAreaName,
  onSelect,
}: {
  areas: DevelopmentArea[];
  selectedAreaName: string;
  onSelect: (areaName: string) => void;
}) {
  return (
    <div className="rounded-[1.5rem] bg-white p-3 shadow-sm ring-1 ring-inkt/8">
      <div className="mb-3 px-2 pt-2 text-xs font-bold uppercase tracking-[0.14em] text-aarde">
        Ontwikkelgebieden
      </div>
      <div className="space-y-2">
        {areas.map((area) => {
          const isSelected = area.name === selectedAreaName;

          return (
            <button
              key={area.name}
              type="button"
              onClick={() => onSelect(area.name)}
              className={`flex min-h-14 w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition focus-visible:focus-ring ${
                isSelected ? "bg-klei/75 text-inkt" : "text-inkt/74 hover:bg-lucht/55"
              }`}
            >
              <TrendDot trend={area.trend} />
              <span className="min-w-0">
                <span className="block text-sm font-black">{area.name}</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.12em] text-aarde">
                  {area.trend}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DevelopmentOverview({ onBack }: { onBack: () => void }) {
  const [selectedAreaName, setSelectedAreaName] = useState(developmentAreas[0].name);
  const [activeTab, setActiveTab] = useState<DetailTab>("overview");
  const selectedArea =
    developmentAreas.find((area) => area.name === selectedAreaName) ?? developmentAreas[0];

  function selectArea(areaName: string) {
    setSelectedAreaName(areaName);
    setActiveTab("overview");
  }

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
          <SectionHeader eyebrow="Ontwikkelgebieden" title="Emma's ontwikkelportfolio" />
          <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:items-start">
            <DevelopmentAreaTabs
              areas={developmentAreas}
              selectedAreaName={selectedArea.name}
              onSelect={selectArea}
            />
            <DevelopmentAreaDetail
              area={selectedArea}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
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
              <article key={moment.title} className="rounded-[1.5rem] bg-lucht/60 p-6">
                <h3 className="text-xl font-black text-inkt">{moment.title}</h3>
                <p className="mt-4 text-lg leading-8 text-inkt/78">{moment.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16 pt-10">
          <SectionHeader eyebrow="Bericht van de leerkracht" title="Een korte terugkoppeling" />
          <blockquote className="rounded-[2rem] bg-inkt p-6 text-xl font-semibold leading-9 text-white shadow-zacht sm:p-8">
            &quot;Emma heeft de afgelopen weken een mooie stap gezet in haar zelfvertrouwen. Vooral
            tijdens samenwerkingsopdrachten zien we haar steeds meer initiatief nemen.&quot;
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
