export const metadata = {
  title: "Damian Szymczak | IT Support L2 / IT Operations",
  description:
    "Portfolio techniczne Damiana Szymczaka: IT Support L2, IT Operations, Windows Server, Active Directory, Jira, Zabbix, SQL, PowerShell, AI Service Desk i Home Lab.",
};

const stats = [
  {
    value: "4+",
    label: "lata doświadczenia IT",
  },
  {
    value: "520+",
    label: "stacji wspieranych w środowisku 24/7",
  },
  {
    value: "650+",
    label: "placówek wspieranych w poprzedniej organizacji",
  },
  {
    value: "P1-P4",
    label: "incydenty P1-P4, SLA, triage i eskalacje",
  },
];

const coreSkills = [
  "Incident Management",
  "IT Operations",
  "Service Desk L1/L2",
  "Windows 10/11",
  "Windows Server",
  "Active Directory",
  "Jira",
  "Zabbix",
  "SQL",
  "PowerShell",
  "RDP",
  "VNC",
  "TeamViewer",
  "DNS",
  "DHCP",
  "GPO",
  "VMware",
  "Hyper-V",
  "Microsoft 365",
  "Azure / Entra ID — rozwój",
  "AI Service Desk",
  "Knowledge Base / Baza wiedzy IT",
];

const skillGroups = [
  {
    title: "IT Operations / Incident Management",
    items: [
      "Obsługa incydentów P1-P4 w środowisku produkcyjnym 24/7.",
      "Triage, priorytetyzacja, analiza wpływu biznesowego i eskalacje.",
      "Koordynacja awarii krytycznych dla działania stacji i usług biznesowych.",
      "Praca z Jira, SLA, alertami monitoringowymi i komunikacją statusów.",
    ],
  },
  {
    title: "Windows Server / Active Directory",
    items: [
      "Reset, odblokowywanie, tworzenie i modyfikacja kont użytkowników.",
      "Grupy bezpieczeństwa, uprawnienia, dostępy do folderów i zasobów.",
      "OU, GPO, blokowanie kont i diagnostyka problemów logowania.",
      "Sprawdzanie usług, restart usług, miejsce na dysku, procesy i połączenia.",
    ],
  },
  {
    title: "Monitoring / Diagnostyka / SQL",
    items: [
      "Reakcja na alerty z Zabbix oraz narzędzi operacyjnych.",
      "Analiza logów, danych operacyjnych i identyfikatorów produktów.",
      "Zapytania i skrypty SQL do analizy rozbieżności kasowych i systemowych.",
      "Diagnostyka systemów sprzedaży, płatności, aplikacji i urządzeń stacyjnych.",
    ],
  },
  {
    title: "AI / Automatyzacja / Baza wiedzy",
    items: [
      "Udział w projekcie automatyzacji Service Desk z użyciem AI / voice-bota.",
      "Tworzenie instrukcji, procedur i opisów znanych problemów.",
      "Testowanie scenariuszy rozmów, intencji i jakości odpowiedzi.",
      "Analiza przypadków do automatyzacji oraz przekierowania do konsultanta.",
    ],
  },
];

const experience = [
  {
    company: "Anwim S.A.",
    role: "IT Systems Support Specialist / IT Operations Support",
    period: "05.2024 - obecnie",
    location: "Lublin / środowisko 24/7",
    description:
      "Wsparcie operacyjne środowiska IT dla ogólnopolskiej sieci 520+ stacji oraz systemów krytycznych dla ciągłości działania biznesu.",
    groups: [
      {
        title: "Incident Management / IT Operations",
        items: [
          "Obsługa zgłoszeń, alertów monitoringowych i incydentów P1-P4.",
          "Triage i koordynacja awarii w Jira: priorytety, wpływ biznesowy, eskalacje i komunikacja statusów.",
          "Obsługa incydentów związanych z płatnościami, systemami sprzedaży, sprzętem, aplikacjami biznesowymi i systemami wewnętrznymi.",
        ],
      },
      {
        title: "Monitoring / ciągłość działania",
        items: [
          "Monitoring systemów i infrastruktury z użyciem Zabbix oraz narzędzi operacyjnych.",
          "Reakcja na alerty, weryfikacja wpływu problemu na działanie stacji i koordynacja działań naprawczych.",
          "Eskalacja problemów do zespołów technicznych i zewnętrznych dostawców oraz monitorowanie postępu napraw.",
        ],
      },
      {
        title: "Windows Server / Active Directory",
        items: [
          "Operacyjne wsparcie Windows Server: usługi, procesy, miejsce na dysku, konfiguracja aplikacji/usług i diagnostyka połączeń.",
          "Operacyjne wsparcie Active Directory: konta, hasła, grupy, uprawnienia, OU, GPO i problemy logowania.",
          "Wsparcie techniczne środowiska użytkowników i systemów produkcyjnych w trybie 24/7.",
        ],
      },
      {
        title: "SQL / diagnostyka danych",
        items: [
          "Diagnostyka SQL: analiza logów, danych operacyjnych, identyfikatorów produktów oraz rozbieżności kasowych/systemowych.",
          "Wykorzystanie zapytań i skryptów SQL do sprawdzania problemów oraz wsparcia analizy incydentów.",
          "Łączenie informacji z systemów, zgłoszeń i danych operacyjnych w celu szybszego ustalenia źródła problemu.",
        ],
      },
      {
        title: "AI / Knowledge Base / szkolenia",
        items: [
          "Udział w projekcie AI / voice-bot: baza wiedzy, instrukcje, znane problemy, scenariusze rozmów i walidacja odpowiedzi.",
          "Tworzenie instrukcji i procedur wspierających automatyzację obsługi powtarzalnych zgłoszeń.",
          "Szkolenie i wdrożenie 4 nowych pracowników 1. linii wsparcia IT.",
        ],
      },
    ],
  },
  {
    company: "ACS Audika Sp. z o.o.",
    role: "Specjalista ds. Wsparcia IT",
    period: "09.2021 - 04.2024",
    location: "Wsparcie ogólnopolskiej sieci placówek",
    description:
      "Zdalne i operacyjne wsparcie IT dla dużej, rozproszonej organizacji obejmującej 650+ placówek.",
    groups: [
      {
        title: "Wsparcie użytkowników i placówek",
        items: [
          "Wsparcie użytkowników i placówek przez telefon, e-mail oraz system zgłoszeń.",
          "Diagnostyka problemów z Windows 10, aplikacjami wewnętrznymi i środowiskiem użytkownika.",
          "Przygotowywanie, konfiguracja i wdrażanie komputerów oraz stanowisk pracy.",
        ],
      },
      {
        title: "Sprzęt / logistyka / wdrożenia",
        items: [
          "Udział w masowym przygotowaniu sprzętu IT na potrzeby rynku zagranicznego, w tym Belgii.",
          "Logistyka sprzętu IT: ewidencja, wydawanie, wysyłki i wsparcie użytkowników.",
          "Praca w rozproszonej organizacji wymagającej dokładnej komunikacji i sprawnej obsługi wielu lokalizacji.",
        ],
      },
    ],
  },
];

const projects = [
  {
    title: "AI / Voice-bot dla Service Desk",
    context:
      "Automatyzacja obsługi powtarzalnych zgłoszeń telefonicznych w środowisku Service Desk.",
    role:
      "Tworzenie instrukcji, opisów znanych problemów, scenariuszy rozmów, walidacja odpowiedzi oraz zgłaszanie poprawek.",
    effect:
      "Lepsze przygotowanie bazy wiedzy dla voice-bota i sprawniejsze kierowanie trudniejszych zgłoszeń do konsultanta.",
    points: [
      "Tworzenie i porządkowanie instrukcji dla powtarzalnych problemów.",
      "Testowanie rozpoznawania intencji oraz jakości odpowiedzi voice-bota.",
      "Analiza przypadków do automatyzacji oraz eskalacji do człowieka.",
      "Współpraca przy rozwoju Knowledge Base dla Service Desk.",
    ],
    tags: ["AI", "Voice-bot", "Service Desk", "Knowledge Base", "Testing"],
  },
  {
    title: "SQL / analiza rozbieżności kasowych i systemowych",
    context:
      "Diagnostyka problemów oparta o dane operacyjne, logi, identyfikatory produktów oraz rozbieżności kasowe/systemowe.",
    role:
      "Wykorzystywanie zapytań i skryptów SQL do weryfikacji problemów, analizy danych oraz wsparcia obsługi incydentów.",
    effect:
      "Szybsze ustalanie źródła problemu i lepsze wsparcie procesów IT Operations tam, gdzie zgłoszenie wymaga pracy z danymi.",
    points: [
      "Analiza danych operacyjnych, logów i identyfikatorów produktów.",
      "Zapytania i skrypty SQL do sprawdzania rozbieżności kasowych/systemowych.",
      "Wsparcie diagnostyki incydentów związanych z systemami sprzedaży i płatnościami.",
      "Łączenie informacji z systemów, zgłoszeń i danych technicznych.",
    ],
    tags: ["SQL", "Diagnostyka", "IT Operations", "Dane operacyjne", "Incident Analysis"],
  },
  {
    title: "Home Lab — monitoring, VM, NAS i diagnostyka",
    context:
      "Domowe środowisko testowe rozwijane pod administrację systemami, monitoring, wirtualizację i diagnostykę.",
    role:
      "Budowanie scenariuszy technicznych podobnych do pracy IT Operations i Junior Windows Administrator.",
    effect:
      "Praktyczne ćwiczenie monitoringu, dostępności usług, pracy na maszynach wirtualnych, backupów i diagnostyki sieci.",
    points: [
      "Monitoring urządzeń domowych i łącza internetowego.",
      "Maszyny wirtualne do testów administracyjnych i scenariuszy serwerowych.",
      "Domowy NAS oraz scenariusze przechowywania i zabezpieczania danych.",
      "Testy usług, backupów, sieci, dostępności i podstawowej diagnostyki.",
    ],
    tags: ["Docker", "VM", "Monitoring", "NAS", "Windows Server"],
  },
  {
    title: "Portfolio techniczne — Next.js, Vercel i domena",
    context:
      "Publiczne portfolio techniczne stworzone jako rozszerzenie klasycznego CV i miejsce prezentacji doświadczenia IT.",
    role:
      "Przygotowanie struktury strony, wdrożenie projektu, publikacja na Vercel i podpięcie domeny produkcyjnej.",
    effect:
      "Czytelny profil rekrutacyjny pokazujący doświadczenie, kompetencje, projekty i kierunek rozwoju technicznego.",
    points: [
      "Strona zbudowana w Next.js i Tailwind CSS.",
      "Hosting na Vercel oraz podpięcie domeny produkcyjnej.",
      "Struktura strony przygotowana pod rekrutację IT.",
      "Możliwość dalszej rozbudowy o case studies, repozytoria i projekty techniczne.",
    ],
    tags: ["Next.js", "Vercel", "Tailwind", "Portfolio", "Git"],
  },
  {
    title: "Raspberry Candle — konfiguracja techniczna e-commerce",
    context:
      "Techniczna obsługa strony i sklepu internetowego z naciskiem na konfigurację, treści, domenę i narzędzia analityczne.",
    role:
      "Konfiguracja sklepu, praca z panelem administracyjnym, domeną, strukturą strony oraz materiałami tworzonymi z pomocą AI.",
    effect:
      "Praktyczne doświadczenie w obsłudze projektu web/e-commerce od strony technicznej i administracyjnej.",
    points: [
      "Konfiguracja struktury strony i podstawowych ustawień sklepu.",
      "Praca z panelem administracyjnym, domeną i treściami.",
      "Wykorzystanie AI do tworzenia opisów, treści i materiałów pomocniczych.",
      "Obsługa techniczna oraz rozwój materiałów marketingowo-technicznych.",
    ],
    tags: ["E-commerce", "Shoper", "GA4", "Meta Pixel", "AI"],
  },
  {
    title: "Wsparcie IT dla biura rachunkowego",
    context:
      "Dodatkowe wsparcie techniczne dla małego środowiska biurowego pracującego z dokumentami, drukiem, pocztą i oprogramowaniem biurowym.",
    role:
      "Konfiguracja komputerów, drukarek, poczty, podstawowych dostępów oraz bieżąca diagnostyka problemów użytkowników.",
    effect:
      "Stabilniejsze środowisko pracy biurowej i szybsze rozwiązywanie codziennych problemów technicznych.",
    points: [
      "Konfiguracja komputerów, drukarek i poczty.",
      "Diagnostyka problemów z Windows, siecią i dostępami.",
      "Wsparcie użytkowników w codziennej pracy biurowej.",
      "Podstawowa higiena bezpieczeństwa i kopii danych.",
    ],
    tags: ["Windows", "Office", "Printers", "Backup", "Support"],
  },
];

const developmentAreas = [
  "Windows Server Administration",
  "Active Directory",
  "Microsoft 365",
  "Azure / Entra ID",
  "PowerShell",
  "SQL",
  "Monitoring",
  "Automatyzacja Service Desk",
  "Infrastructure Support",
  "Język angielski techniczny — rozwój",
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-blue-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-white md:text-5xl">{title}</h2>

      {description && (
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
          {description}
        </p>
      )}
    </div>
  );
}

function BulletList({
  items,
  compact = false,
}: {
  items: string[];
  compact?: boolean;
}) {
  return (
    <div
      role="list"
      className={compact ? "space-y-2 text-gray-300" : "space-y-4 text-gray-300"}
    >
      {items.map((item) => (
        <div key={item} role="listitem" className="flex gap-3 leading-7">
          <span aria-hidden="true" className="mt-[1px] text-blue-400">
            •
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-blue-900 px-3 py-1 text-sm text-blue-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <nav className="border-b border-blue-950 px-6 py-7">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="text-3xl font-bold text-blue-400">
            Damian.IT
          </a>

          <div className="hidden gap-7 text-sm text-gray-300 lg:flex">
            <a href="#about" className="transition hover:text-blue-400">
              O mnie
            </a>
            <a href="#skills" className="transition hover:text-blue-400">
              Kompetencje
            </a>
            <a href="#operations" className="transition hover:text-blue-400">
              IT Operations
            </a>
            <a href="#experience" className="transition hover:text-blue-400">
              Doświadczenie
            </a>
            <a href="#projects" className="transition hover:text-blue-400">
              Projekty
            </a>
            <a href="#development" className="transition hover:text-blue-400">
              Rozwój
            </a>
            <a href="#contact" className="transition hover:text-blue-400">
              Kontakt
            </a>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-7xl flex-wrap gap-4 text-sm text-gray-300 lg:hidden">
          <a href="#skills" className="transition hover:text-blue-400">
            Kompetencje
          </a>
          <a href="#experience" className="transition hover:text-blue-400">
            Doświadczenie
          </a>
          <a href="#projects" className="transition hover:text-blue-400">
            Projekty
          </a>
          <a href="#contact" className="transition hover:text-blue-400">
            Kontakt
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div>
          <p className="mb-6 font-semibold uppercase tracking-[4px] text-blue-400">
            IT Support L2 / IT Operations / Junior Windows Administrator
          </p>

          <h1 className="mb-5 text-5xl font-extrabold leading-tight md:text-7xl">
            Damian Szymczak
          </h1>

          <h2 className="mb-8 text-2xl font-semibold text-blue-400 md:text-3xl">
            IT Systems Support Specialist / IT Operations Support
          </h2>

          <p className="max-w-5xl text-xl leading-9 text-gray-300">
            Specjalista IT z ponad 4 latami doświadczenia we wsparciu dużych,
            rozproszonych środowisk IT. Obecnie pracuję przy utrzymaniu
            środowiska 24/7 dla ogólnopolskiej sieci 520+ stacji, obsługując
            incydenty P1-P4, monitoring, eskalacje, Windows Server, Active
            Directory i SQL. Rozwijam się w stronę IT Operations i administracji
            systemami Windows, łącząc wsparcie użytkowników, diagnostykę
            systemów oraz automatyzację Service Desk z użyciem AI / voice-bota.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Kontakt
            </a>

            <a
              href="#projects"
              className="rounded-xl border border-blue-700 px-8 py-4 font-semibold transition hover:bg-blue-950"
            >
              Projekty techniczne
            </a>

            <a
              href="/Damian_Szymczak_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-green-600 px-8 py-4 font-semibold text-green-400 transition hover:bg-green-950/30"
            >
              Pobierz CV
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8"
            >
              <h3 className="text-5xl font-bold text-blue-400">
                {item.value}
              </h3>
              <p className="mt-3 leading-7 text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Profil zawodowy"
          title="Operacyjne IT, nie tylko klasyczny helpdesk"
          description="Doświadczenie łączące Service Desk, IT Operations, monitoring, obsługę incydentów, wsparcie użytkowników, elementy administracji Windows Server / Active Directory oraz pracę z danymi i automatyzacją."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8">
            <h3 className="mb-4 text-2xl font-bold text-blue-400">
              Jak pracuję
            </h3>

            <p className="leading-8 text-gray-300">
              Wspieram środowisko produkcyjne działające w trybie 24/7. Zajmuję
              się analizą zgłoszeń, nadawaniem priorytetów, obsługą incydentów,
              monitorowaniem alertów, eskalacją problemów oraz komunikacją z
              zespołami technicznymi i dostawcami.
            </p>

            <p className="mt-5 leading-8 text-gray-300">
              Największą wartość wnoszę tam, gdzie trzeba szybko ocenić wpływ
              problemu na biznes, nadać właściwy priorytet, skoordynować
              eskalację i dopilnować ciągłości działania systemów.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8">
            <h3 className="mb-4 text-2xl font-bold text-blue-400">
              Kierunek zawodowy
            </h3>

            <p className="leading-8 text-gray-300">
              Rozwijam się w stronę ról IT Support L2, IT Operations
              Specialist, Junior Windows Administrator i Junior System
              Administrator. Szczególnie interesują mnie Windows Server, Active
              Directory, monitoring, SQL, PowerShell, Microsoft 365, Azure /
              Entra ID oraz automatyzacja pracy IT.
            </p>

            <p className="mt-5 leading-8 text-gray-300">
              Chcę rozwijać się bliżej administracji systemami, infrastruktury,
              diagnostyki, automatyzacji i utrzymania środowisk produkcyjnych,
              wykorzystując doświadczenie zdobyte we wsparciu użytkowników i
              obsłudze incydentów.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Kompetencje"
          title="Technologie i obszary pracy"
          description="Kluczowe technologie i obszary, z którymi pracuję lub które rozwijam pod role IT Support L2, IT Operations i Junior Windows Administrator."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreSkills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-blue-950 bg-blue-950/10 p-5 text-center text-gray-200 transition hover:border-blue-700 hover:bg-blue-950/30"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="operations" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Specjalizacja"
          title="Najważniejsze obszary odpowiedzialności"
          description="Kluczowe obszary mojej pracy operacyjnej: incydenty, monitoring, Windows Server, Active Directory, SQL, automatyzacja i komunikacja z zespołami technicznymi."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8"
            >
              <h3 className="mb-6 text-2xl font-bold text-blue-400">
                {group.title}
              </h3>

              <BulletList items={group.items} />
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Doświadczenie"
          title="Doświadczenie zawodowe IT"
          description="Skala środowisk, zakres odpowiedzialności operacyjnej oraz technologie wykorzystywane w codziennej pracy IT."
        />

        <div className="space-y-10">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8"
            >
              <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-3xl font-bold">{job.role}</h3>
                  <p className="mt-2 text-xl font-semibold text-blue-400">
                    {job.company}
                  </p>
                </div>

                <div className="text-left text-gray-400 lg:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>

              <p className="mb-8 max-w-4xl leading-8 text-gray-300">
                {job.description}
              </p>

              <div className="grid gap-6 lg:grid-cols-2">
                {job.groups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-xl border border-blue-950 bg-[#020817] p-6"
                  >
                    <h4 className="mb-4 text-lg font-bold text-blue-400">
                      {group.title}
                    </h4>

                    <BulletList items={group.items} compact />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Projekty"
          title="Projekty techniczne i dodatkowe doświadczenie"
          description="Wybrane projekty i działania techniczne pokazujące praktyczne doświadczenie poza samym opisem stanowiska."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8"
            >
              <h3 className="mb-5 text-2xl font-bold text-blue-400">
                {project.title}
              </h3>

              <div className="space-y-5 text-gray-300">
                <div>
                  <p className="mb-1 font-semibold text-white">
                    Kontekst / problem
                  </p>
                  <p className="leading-8">{project.context}</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">Moja rola</p>
                  <p className="leading-8">{project.role}</p>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-white">
                    Efekt / wartość
                  </p>
                  <p className="leading-8">{project.effect}</p>
                </div>
              </div>

              <div className="mt-6">
                <BulletList items={project.points} compact />
              </div>

              <div className="mt-6">
                <TagList tags={project.tags} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="development" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Rozwój"
          title="Kierunek techniczny"
          description="Aktualnie rozwijam obszary potrzebne do ról L2, IT Operations i administracji systemami Windows: Windows Server, Active Directory, Microsoft 365, Azure / Entra ID, PowerShell, SQL, monitoring oraz automatyzację pracy Service Desk."
        />

        <div className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8">
          <h3 className="mb-6 text-2xl font-bold text-blue-400">
            Obszary rozwijane
          </h3>

          <div className="flex flex-wrap gap-3">
            {developmentAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-blue-900 px-4 py-2 text-sm text-blue-300"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Kontakt"
          title="Porozmawiajmy o współpracy"
          description="Interesują mnie role IT Support L2, IT Operations Specialist, Junior Windows Administrator oraz Junior System Administrator — zdalnie, hybrydowo w Lublinie albo w modelu ustalanym indywidualnie."
        />

        <div className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-2xl font-bold">Damian Szymczak</p>
              <p className="mt-2 text-blue-400">
                IT Systems Support Specialist / IT Operations Support
              </p>

              <div className="mt-8 space-y-3 text-gray-300">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:damian.szymczak.it@gmail.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    damian.szymczak.it@gmail.com
                  </a>
                </p>

                <p>Telefon: 733-878-717</p>
                <p>
                  Lokalizacja: Lublin / zdalnie — cała Polska / hybrydowo —
                  Lublin
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-950 bg-[#020817] p-6">
              <h3 className="mb-4 text-xl font-bold text-blue-400">
                Dostępne materiały
              </h3>

              <BulletList
                items={[
                  "CV w PDF do pobrania.",
                  "Rozszerzony profil techniczny na tej stronie.",
                  "Projekty techniczne, Home Lab i doświadczenie operacyjne.",
                  "Sekcje AI / Service Desk / Knowledge Base / SQL.",
                ]}
                compact
              />

              <a
                href="/Damian_Szymczak_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
              >
                Pobierz CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-blue-950 px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Damian Szymczak — IT Portfolio
      </footer>
    </main>
  );
}