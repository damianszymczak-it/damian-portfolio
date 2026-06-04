const skills = [
  "Windows 10/11",
  "Windows Server",
  "Active Directory",
  "Microsoft 365",
  "JIRA",
  "Zabbix",
  "PowerShell",
  "Monitoring 24/7",
  "Incident Management",
  "Troubleshooting",
  "GitHub",
  "Home Lab",
];

const stats = [
  { value: "2+", label: "lata w IT Operations" },
  { value: "500+", label: "wspieranych lokalizacji" },
  { value: "24/7", label: "środowisko produkcyjne" },
  { value: "P1-P4", label: "obsługa incydentów" },
];

const experience = [
  {
    company: "Anwim S.A.",
    role: "IT Systems Support Specialist",
    period: "2024 — obecnie",
    items: [
      "Obsługa środowiska produkcyjnego działającego 24/7.",
      "Wsparcie systemów dla ponad 500 lokalizacji biznesowych.",
      "Obsługa i priorytetyzacja incydentów P1–P4.",
      "Monitoring infrastruktury oraz analiza awarii.",
      "Eskalacja problemów i współpraca z zespołami technicznymi.",
    ],
  },
  {
    company: "ACS Audika",
    role: "IT Support Specialist",
    period: "2021 — 2024",
    items: [
      "Wsparcie użytkowników końcowych i placówek biznesowych.",
      "Administracja stacjami roboczymi Windows.",
      "Rozwiązywanie problemów sprzętowych, systemowych i aplikacyjnych.",
      "Wsparcie aplikacji biznesowych oraz środowiska Microsoft 365.",
    ],
  },
];

const projects = [
  {
    title: "Home Lab — Infrastructure Portfolio",
    status: "W trakcie",
    description:
      "Laboratorium IT budowane pod rozwój w kierunku administratora systemów. Projekt obejmuje Proxmox, Windows Server, Active Directory, DNS, DHCP, GPO, monitoring oraz automatyzację PowerShell.",
    tech: ["Proxmox", "Windows Server", "AD", "DNS", "DHCP", "Zabbix"],
  },
  {
    title: "Portfolio Website",
    status: "Online soon",
    description:
      "Nowoczesna strona portfolio oparta o Next.js, Tailwind CSS, GitHub i Vercel. Projekt pokazuje umiejętność pracy z kodem, wdrożeniem i publiczną prezentacją kompetencji.",
    tech: ["Next.js", "Tailwind CSS", "GitHub", "Vercel"],
  },
  {
    title: "Raspberry Candle — E-commerce",
    status: "Projekt własny",
    description:
      "Projekt e-commerce obejmujący sklep internetowy, analitykę, piksele reklamowe, integracje oraz automatyzacje procesów biznesowych.",
    tech: ["Shoper", "GA4", "Meta Pixel", "TikTok Pixel", "Make"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="text-xl font-bold tracking-tight">
            Damian<span className="text-blue-400">.IT</span>
          </div>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-blue-400">
              O mnie
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Umiejętności
            </a>
            <a href="#experience" className="hover:text-blue-400">
              Doświadczenie
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projekty
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Kontakt
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              IT Operations / Windows Administration
            </p>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
              Damian Szymczak
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-slate-200 md:text-3xl">
              IT Systems Support Specialist
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Specjalista IT z doświadczeniem w środowiskach 24/7, monitoringu
              infrastruktury, obsłudze incydentów P1–P4 oraz wsparciu systemów
              dla ponad 500 lokalizacji biznesowych.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                Kontakt
              </a>

              <a
                href="https://github.com/damianszymczak-it"
                target="_blank"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-400"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-white/5 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur">
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-blue-950">
              <img
                src="/profile-test.png"
                alt="Damian Szymczak"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 pb-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="text-3xl font-black text-blue-400">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-white">O mnie</h2>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          Rozwijam się w obszarze IT Operations, administracji systemami Windows
          oraz monitoringu infrastruktury. Pracuję przy środowiskach, gdzie
          liczy się szybka analiza problemu, właściwa priorytetyzacja i
          odpowiedzialność za utrzymanie ciągłości działania usług.
        </p>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
          Moim celem zawodowym jest rozwój w kierunku IT Administratora,
          Windows Administratora oraz Infrastructure / Operations Engineer.
        </p>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-white">Umiejętności</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-white">Doświadczenie</h2>

        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <div
              key={job.company}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-blue-400">{job.role}</p>
                </div>
                <p className="text-slate-400">{job.period}</p>
              </div>

              <ul className="mt-5 space-y-2 text-slate-300">
                {job.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-white">Projekty</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                {project.status}
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-white">Kontakt</h2>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-lg text-slate-300">
            Szukam rozwoju w kierunku IT Operations, Windows Administration oraz
            Infrastructure Support.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-slate-300">
            <a
              href="mailto:damian.szymczak.it@gmail.com"
              className="hover:text-blue-400"
            >
              damian.szymczak.it@gmail.com
            </a>

            <a
              href="https://github.com/damianszymczak-it"
              target="_blank"
              className="hover:text-blue-400"
            >
              github.com/damianszymczak-it
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Damian Szymczak. Portfolio IT.
      </footer>
    </main>
  );
}