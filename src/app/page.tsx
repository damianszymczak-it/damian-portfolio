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
    label: "incydenty, SLA, triage i eskalacje",
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
  "Azure / Entra ID - rozwój",
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
    bullets: [
      "Obsługa zgłoszeń, alertów monitoringowych i incydentów P1-P4.",
      "Triage i koordynacja awarii w Jira: priorytety, wpływ biznesowy, eskalacje i komunikacja statusów.",
      "Monitoring systemów i infrastruktury z użyciem Zabbix oraz narzędzi operacyjnych.",
      "Operacyjne wsparcie Windows Server: usługi, procesy, miejsce na dysku, konfiguracja aplikacji/usług i diagnostyka połączeń.",
      "Operacyjne wsparcie Active Directory: konta, hasła, grupy, uprawnienia, OU, GPO i problemy logowania.",
      "Diagnostyka SQL: analiza logów, danych operacyjnych, identyfikatorów produktów oraz rozbieżności kasowych/systemowych.",
      "Obsługa incydentów związanych z płatnościami, systemami sprzedaży, sprzętem, aplikacjami biznesowymi i systemami wewnętrznymi.",
      "Eskalacja problemów do zespołów technicznych i zewnętrznych dostawców oraz monitorowanie działań naprawczych.",
      "Szkolenie i wdrożenie 4 nowych pracowników 1. linii wsparcia IT.",
      "Udział w projekcie AI / voice-bot: baza wiedzy, instrukcje, znane problemy, scenariusze rozmów i walidacja odpowiedzi.",
    ],
  },
  {
    company: "ACS Audika Sp. z o.o.",
    role: "Specjalista ds. Wsparcia IT",
    period: "09.2021 - 04.2024",
    location: "Wsparcie ogólnopolskiej sieci placówek",
    description:
      "Zdalne i operacyjne wsparcie IT dla dużej, rozproszonej organizacji obejmującej 650+ placówek.",
    bullets: [
      "Wsparcie użytkowników i placówek przez telefon, e-mail oraz system zgłoszeń.",
      "Diagnostyka problemów z Windows 10, aplikacjami wewnętrznymi i środowiskiem użytkownika.",
      "Przygotowywanie, konfiguracja i wdrażanie komputerów oraz stanowisk pracy.",
      "Udział w masowym przygotowaniu sprzętu IT na potrzeby rynku zagranicznego, w tym Belgii.",
      "Logistyka sprzętu IT: ewidencja, wydawanie, wysyłki i wsparcie użytkowników.",
    ],
  },
];

const projects = [
  {
    title: "AI / Voice-bot dla Service Desk",
    text:
      "Udział w projekcie automatyzacji obsługi zgłoszeń telefonicznych. Voice-bot korzysta z instrukcji, opisów znanych problemów i scenariuszy, aby obsługiwać powtarzalne przypadki, a trudniejsze zgłoszenia przekazywać do konsultanta.",
    tags: ["AI", "Voice-bot", "Service Desk", "Knowledge Base", "Testing"],
    points: [
      "Tworzenie instrukcji i opisów znanych problemów.",
      "Testowanie scenariuszy rozmów i rozpoznawania intencji.",
      "Walidacja jakości odpowiedzi oraz zgłaszanie poprawek.",
      "Analiza przypadków do automatyzacji i eskalacji do konsultanta.",
    ],
  },
  {
    title: "Home Lab - infrastruktura domowa",
    text:
      "Środowisko testowe rozwijane pod administrację systemami, monitoring, wirtualizację i diagnostykę. Projekt służy do ćwiczenia scenariuszy podobnych do pracy IT Operations i Junior Windows Administrator.",
    tags: ["Docker", "VM", "Monitoring", "NAS", "Windows Server"],
    points: [
      "Monitoring urządzeń domowych i łącza internetowego.",
      "Maszyny wirtualne do testów administracyjnych.",
      "Domowy NAS i scenariusze przechowywania danych.",
      "Testy usług, backupów, sieci i diagnostyki.",
    ],
  },
  {
    title: "Raspberry Candle - strona i sklep online",
    text:
      "Techniczna konfiguracja strony i sklepu internetowego. Projekt łączy obsługę domeny, treści, panelu administracyjnego, analityki i automatyzacji pracy z użyciem narzędzi AI.",
    tags: ["E-commerce", "Shoper", "GA4", "Meta Pixel", "AI"],
    points: [
      "Konfiguracja struktury strony i podstawowych ustawień sklepu.",
      "Praca z panelem administracyjnym i domeną.",
      "Wykorzystanie AI do tworzenia treści i opisów.",
      "Obsługa techniczna oraz rozwój materiałów marketingowo-technicznych.",
    ],
  },
  {
    title: "Wsparcie IT dla biura rachunkowego",
    text:
      "Dodatkowe wsparcie techniczne dla małego środowiska biurowego: komputery, drukarki, poczta, oprogramowanie biurowe, dostęp do zasobów i podstawowe bezpieczeństwo pracy z dokumentami.",
    tags: ["Windows", "Office", "Printers", "Backup", "Support"],
    points: [
      "Konfiguracja komputerów, drukarek i poczty.",
      "Diagnostyka problemów z Windows, siecią i dostępami.",
      "Wsparcie użytkowników w codziennej pracy biurowej.",
      "Podstawowa higiena bezpieczeństwa i kopii danych.",
    ],
  },
  {
    title: "Portfolio techniczne",
    text:
      "Publiczne portfolio stworzone w Next.js i hostowane na Vercel. Strona prezentuje doświadczenie, kompetencje, projekty, kierunek rozwoju oraz rozszerzony profil techniczny poza klasycznym CV.",
    tags: ["Next.js", "Vercel", "Tailwind", "Portfolio", "Git"],
    points: [
      "Struktura strony pod rekrutację IT.",
      "Sekcje: doświadczenie, kompetencje, projekty i kontakt.",
      "Rozszerzenie klasycznego CV o kontekst techniczny.",
      "Możliwość dalszej rozbudowy o repozytoria i case studies.",
    ],
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
  "Język angielski techniczny",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-blue-950 px-6 py-7">
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
            IT Systems Support Specialist
          </h2>

          <p className="max-w-4xl text-xl leading-9 text-gray-300">
            Specjalista IT z ponad 4-letnim doświadczeniem w dużych,
            rozproszonych organizacjach. Pracuję w środowisku 24/7, obsługując
            incydenty P1-P4, monitoring, eskalacje, Windows Server, Active
            Directory, SQL oraz automatyzację Service Desk z użyciem AI /
            voice-bota.
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
          description="Moje doświadczenie łączy Service Desk, IT Operations, monitoring, obsługę incydentów, wsparcie użytkowników, elementy administracji Windows Server / Active Directory oraz pracę z danymi i automatyzacją."
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
              Największą wartość daję tam, gdzie liczy się szybka ocena
              sytuacji, wpływ biznesowy, poprawne przekazanie problemu dalej i
              utrzymanie ciągłości działania systemów.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8">
            <h3 className="mb-4 text-2xl font-bold text-blue-400">
              Kierunek zawodowy
            </h3>

            <p className="leading-8 text-gray-300">
              Rozwijam się w stronę ról IT Support L2, IT Operations
              Specialist, Junior Windows Administrator i Junior System
              Administrator. Mocno stawiam na Windows Server, Active Directory,
              monitoring, SQL, PowerShell, Microsoft 365, Azure / Entra ID oraz
              automatyzację pracy IT.
            </p>

            <p className="mt-5 leading-8 text-gray-300">
              Chcę pracować bliżej administracji systemami, infrastruktury,
              automatyzacji i utrzymania środowisk produkcyjnych niż klasycznej
              obsługi pierwszej linii.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Kompetencje"
          title="Technologie i obszary pracy"
          description="Poniżej nie ma przypadkowej listy narzędzi. To obszary, z którymi realnie pracuję albo które rozwijam pod role L2, IT Operations i Junior Windows Administrator."
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
          description="To sekcja, która rozwija klasyczne CV. Pokazuje, co konkretnie robię operacyjnie i gdzie mam praktyczne doświadczenie."
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

              <ul className="list-none space-y-3 text-gray-300">
                {group.items.map((item) => (
                  <li key={item} className="leading-7">
                    <span className="text-blue-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Doświadczenie"
          title="Doświadczenie zawodowe IT"
          description="Najważniejsza część profilu. Skupia się na skali środowisk, typie problemów, odpowiedzialności operacyjnej i technologiach."
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

              <p className="mb-6 max-w-4xl leading-8 text-gray-300">
                {job.description}
              </p>

              <ul className="grid list-none gap-3 text-gray-300 lg:grid-cols-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="leading-7">
                    <span className="text-blue-400">•</span> {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Projekty"
          title="Projekty techniczne i dodatkowe doświadczenie"
          description="Ta część ma uzupełniać CV. Pokazuje praktyczne działania poza samym opisem stanowiska: automatyzację, Home Lab, e-commerce, wsparcie małego środowiska biurowego i rozwój portfolio."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8"
            >
              <h3 className="mb-4 text-2xl font-bold text-blue-400">
                {project.title}
              </h3>

              <p className="mb-6 leading-8 text-gray-300">{project.text}</p>

              <ul className="mb-6 list-none space-y-2 text-gray-300">
                {project.points.map((point) => (
                  <li key={point} className="leading-7">
                    <span className="text-blue-400">•</span> {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-900 px-3 py-1 text-sm text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="development" className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Rozwój"
          title="Kierunek techniczny"
          description="Aktualnie rozwijam obszary potrzebne do przejścia z klasycznego wsparcia IT w stronę L2, IT Operations i administracji systemami Windows: Windows Server, Active Directory, Microsoft 365, Azure / Entra ID, PowerShell, SQL, monitoring oraz automatyzację pracy Service Desk."
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
          description="Interesują mnie role IT Support L2, IT Operations Specialist, Junior Windows Administrator oraz Junior System Administrator - zdalnie, hybrydowo w Lublinie albo w modelu ustalanym indywidualnie."
        />

        <div className="rounded-2xl border border-blue-950 bg-blue-950/10 p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-2xl font-bold">Damian Szymczak</p>
              <p className="mt-2 text-blue-400">
                IT Systems Support Specialist
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
                  Lokalizacja: Lublin / zdalnie - cała Polska / hybrydowo -
                  Lublin
                </p>
                <p>LinkedIn: w przygotowaniu</p>
                <p>GitHub: w przygotowaniu</p>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-950 bg-[#020817] p-6">
              <h3 className="mb-4 text-xl font-bold text-blue-400">
                Dostępne materiały
              </h3>

              <ul className="list-none space-y-3 text-gray-300">
                <li>
                  <span className="text-blue-400">•</span> Klasyczne CV do
                  pobrania w PDF
                </li>
                <li>
                  <span className="text-blue-400">•</span> Rozszerzony profil
                  techniczny na tej stronie
                </li>
                <li>
                  <span className="text-blue-400">•</span> Projekty techniczne
                  i Home Lab
                </li>
                <li>
                  <span className="text-blue-400">•</span> Sekcja AI / Service
                  Desk / Knowledge Base
                </li>
              </ul>

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
        © {new Date().getFullYear()} Damian Szymczak - IT Portfolio
      </footer>
    </main>
  );
}