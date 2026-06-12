const teacherBenefits = [
  "Minder administratie",
  "Meer inzicht",
  "Automatische ontwikkelverslagen",
  "Vroegtijdige signalering",
  "Meer tijd voor begeleiding",
];

const parentInsights = [
  "ontwikkeling in kleine, begrijpelijke stappen",
  "talenten en interesses die op school zichtbaar worden",
  "welzijn, motivatie en sociale aansluiting",
  "leerstijl en wat thuis kan helpen",
];

const childBenefits = [
  {
    title: "Leren op eigen niveau",
    text: "Kinderen krijgen ruimte voor passende oefening, herhaling en verdieping.",
  },
  {
    title: "Talenten ontdekken",
    text: "Niet alleen resultaten tellen mee, ook nieuwsgierigheid, creativiteit en doorzettingsvermogen.",
  },
  {
    title: "Leren leren",
    text: "Groeivonk maakt zichtbaar hoe een kind aanpakt, reflecteert en groeit.",
  },
  {
    title: "Uitdaging in de groep",
    text: "Meer persoonlijke uitdaging, zonder het kind los te maken van de sociale groep.",
  },
];

const roles = ["Leerkracht", "Intern begeleider", "Schoolleider", "Ouder", "Anders"];

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-9 w-9">
      <path
        fill="currentColor"
        d="M24 4c1.3 8.2 4.1 14 12.4 16.2C28.1 22.4 25.3 28 24 44c-1.3-16-4.1-21.6-12.4-23.8C19.9 18 22.7 12.2 24 4Z"
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
        strokeWidth="2.4"
      />
    </svg>
  );
}

function Field({
  label,
  type = "text",
  textarea = false,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-semibold text-inkt">{label}</span>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          className="w-full rounded-2xl border border-inkt/10 bg-white px-4 py-3 text-base text-inkt shadow-sm transition focus:outline-none focus:ring-4 focus:ring-blad/20"
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          className="h-12 w-full rounded-2xl border border-inkt/10 bg-white px-4 text-base text-inkt shadow-sm transition focus:outline-none focus:ring-4 focus:ring-blad/20"
        />
      )}
    </label>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative px-5 py-6 sm:px-8">
        <div className="absolute inset-0 -z-10 soft-grid opacity-70" />
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#top" className="flex items-center gap-3 rounded-full focus-visible:focus-ring">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blad text-white shadow-zacht">
              <SparkIcon />
            </span>
            <span className="text-xl font-bold tracking-tight text-inkt">Groeivonk</span>
          </a>
          <a
            href="#pilotgroep"
            className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-inkt shadow-sm ring-1 ring-inkt/10 transition hover:bg-klei focus-visible:focus-ring sm:inline-flex"
          >
            Word pilot-school
          </a>
        </div>

        <div
          id="top"
          className="mx-auto grid max-w-7xl items-center gap-10 pb-10 pt-10 sm:pb-14 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-16 lg:pt-16"
        >
          <div>
            <p className="mb-6 inline-flex rounded-full bg-lucht px-4 py-2 text-sm font-semibold text-blad">
              AI ondersteund ontwikkelplatform voor basisscholen
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-inkt sm:text-6xl">
              Elk kind verdient de ruimte om te groeien.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-inkt/72 sm:mt-7 sm:text-xl">
              Groeivonk helpt basisscholen ieder kind beter te begrijpen, zonder de werkdruk van
              leerkrachten te verhogen.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href="#pilotgroep"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-blad px-7 text-base font-bold text-white shadow-zacht transition hover:bg-[#356955] focus-visible:focus-ring"
              >
                Word pilot-school
              </a>
              <a
                href="#pilotgroep"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-base font-bold text-inkt shadow-sm ring-1 ring-inkt/10 transition hover:bg-klei focus-visible:focus-ring"
              >
                Ik wil meedenken
              </a>
            </div>
            <div
              className="mt-6 grid h-24 grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-[1.5rem] border border-white/80 bg-white/75 p-3 shadow-sm md:hidden"
              aria-hidden="true"
            >
              <div className="h-full rounded-2xl bg-klei p-4">
                <div className="h-3 w-20 rounded-full bg-aarde/25" />
                <div className="mt-4 h-3 rounded-full bg-white" />
                <div className="mt-2 h-3 w-2/3 rounded-full bg-white" />
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blad text-white">
                <SparkIcon />
              </div>
              <div className="h-full rounded-2xl bg-lucht p-4">
                <div className="h-8 w-8 rounded-xl bg-white" />
                <div className="mt-5 h-3 w-16 rounded-full bg-blad/25" />
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[380px] md:block lg:min-h-[440px]" aria-hidden="true">
            <div className="absolute left-6 top-4 h-60 w-60 rounded-full bg-zon/35 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-lucht blur-3xl" />
            <div className="relative mx-auto h-[380px] max-w-[500px] rounded-[2rem] border border-white/80 bg-white/72 p-5 shadow-zacht backdrop-blur lg:h-[430px]">
              <div className="grid h-full grid-rows-[1fr_auto_1fr] gap-4">
                <div className="rounded-[1.5rem] bg-klei p-5">
                  <div className="mb-5 h-3 w-28 rounded-full bg-aarde/25" />
                  <div className="space-y-3">
                    <div className="h-4 rounded-full bg-white" />
                    <div className="h-4 w-4/5 rounded-full bg-white" />
                    <div className="h-4 w-3/5 rounded-full bg-white" />
                  </div>
                </div>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-blad text-white shadow-zacht">
                  <SparkIcon />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.5rem] bg-lucht p-5">
                    <div className="h-12 w-12 rounded-2xl bg-white" />
                    <div className="mt-8 h-3 w-24 rounded-full bg-blad/25" />
                    <div className="mt-3 h-3 w-16 rounded-full bg-blad/20" />
                  </div>
                  <div className="rounded-[1.5rem] bg-[#F7E6CF] p-5">
                    <div className="h-12 w-12 rounded-full bg-white" />
                    <div className="mt-8 h-3 w-20 rounded-full bg-aarde/25" />
                    <div className="mt-3 h-3 w-28 rounded-full bg-aarde/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8" id="probleem">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-aarde">Het probleem</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-inkt sm:text-5xl">
              Kinderen ontwikkelen zich niet volgens een gemiddelde.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-inkt/72">
            <p>
              In iedere klas groeien kinderen in hun eigen tempo. Ze verschillen in aanleg,
              zelfvertrouwen, thuissituatie, taal, concentratie, interesses en de manier waarop ze
              leren. Toch is onderwijs vaak georganiseerd rondom vaste groepen, meetmomenten en
              gemiddelden.
            </p>
            <p>
              Leerkrachten zien veel meer dan cijfers kunnen laten zien: wanneer een kind opbloeit,
              waar twijfel ontstaat, welke talenten naar voren komen en welke ondersteuning echt
              helpt. Die rijke kennis raakt in bestaande systemen nog te vaak versnipperd.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8" id="oplossing">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blad">De oplossing</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-inkt sm:text-5xl">
              Van leerlingvolgsysteem naar ontwikkelplatform
            </h2>
            <p className="mt-6 text-lg leading-8 text-inkt/72">
              Groeivonk brengt leerontwikkeling, welzijn, talentontwikkeling en observaties samen in
              een doorlopend ontwikkelverhaal. Zo ontstaat een rustig en volledig beeld van het kind,
              waarin resultaten betekenis krijgen naast gedrag, motivatie, interesses en groei.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {["Leerontwikkeling", "Welzijn", "Talentontwikkeling", "Observaties"].map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-inkt/8">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-lucht text-blad">
                  <SparkIcon />
                </div>
                <h3 className="text-xl font-bold text-inkt">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-inkt px-5 py-24 text-white sm:px-8" id="leerkrachten">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-zon">Voor leerkrachten</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Meer ruimte voor wat er in de klas toe doet.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Groeivonk ondersteunt de professionele blik van de leerkracht. Het platform helpt
              signalen ordenen, verslagen voorbereiden en patronen zichtbaar maken.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {teacherBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4 rounded-3xl bg-white/8 p-5 ring-1 ring-white/10">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zon text-inkt">
                  <CheckIcon />
                </span>
                <span className="text-lg font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8" id="ouders">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-klei p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-aarde">Voor ouders</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-inkt sm:text-5xl">
              Heeft mijn kind het naar zijn zin?
            </h2>
            <p className="mt-6 text-lg leading-8 text-inkt/72">
              Dat is vaak de eerste en belangrijkste vraag. Groeivonk helpt scholen ouders
              doorlopend en begrijpelijk mee te nemen in hoe het met hun kind gaat.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-inkt">Continue inzichten in:</h3>
            {parentInsights.map((insight) => (
              <div key={insight} className="flex items-start gap-4 rounded-3xl bg-lucht/60 p-5">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-blad">
                  <CheckIcon />
                </span>
                <span className="text-lg text-inkt/78">{insight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8" id="kinderen">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blad">Voor kinderen</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-inkt sm:text-5xl">
              Groeien zonder buiten de groep te vallen.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {childBenefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-inkt/8">
                <h3 className="text-xl font-bold text-inkt">{benefit.title}</h3>
                <p className="mt-4 leading-7 text-inkt/70">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8EFE4] px-5 py-24 sm:px-8" id="visie">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-aarde">Onze visie</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-inkt sm:text-5xl">
              Basisvaardigheden blijven de basis.
            </h2>
          </div>
          <div className="rounded-[2rem] bg-white p-8 text-lg leading-8 text-inkt/72 shadow-sm ring-1 ring-inkt/8 sm:p-10">
            <p>
              Lezen, schrijven en rekenen blijven essentieel. Groeivonk ondersteunt scholen binnen
              het huidige onderwijssysteem, inclusief de doorstroomtoets. Tegelijk maakt het platform
              ook zichtbaar wat daarnaast belangrijk is: welzijn, zelfstandigheid, talenten,
              leerhouding en sociale ontwikkeling.
            </p>
            <p className="mt-6">
              Zo ontstaat een vollediger beeld van groei, zonder de stevige basis van goed onderwijs
              los te laten.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8" id="pilotgroep">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blad">Pilotgroep</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-inkt sm:text-5xl">
              Denk mee over Groeivonk.
            </h2>
            <p className="mt-6 text-lg leading-8 text-inkt/72">
              We nodigen leerkrachten, intern begeleiders, schoolleiders en ouders uit om mee te
              denken. Samen onderzoeken we wat scholen echt nodig hebben om de ontwikkeling van
              kinderen beter zichtbaar te maken.
            </p>
          </div>

          <form className="rounded-[2rem] bg-klei/70 p-6 shadow-zacht ring-1 ring-inkt/8 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Naam" />
              <Field label="E-mailadres" type="email" />
              <label htmlFor="rol" className="block">
                <span className="mb-2 block text-sm font-semibold text-inkt">Rol</span>
                <select
                  id="rol"
                  name="rol"
                  className="h-12 w-full rounded-2xl border border-inkt/10 bg-white px-4 text-base text-inkt shadow-sm transition focus:outline-none focus:ring-4 focus:ring-blad/20"
                >
                  {roles.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
              </label>
              <Field label="School" />
              <div className="sm:col-span-2">
                <Field label="Bericht" textarea />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-blad px-7 text-base font-bold text-white shadow-zacht transition hover:bg-[#356955] focus-visible:focus-ring sm:w-auto"
            >
              Verstuur mijn bericht
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
