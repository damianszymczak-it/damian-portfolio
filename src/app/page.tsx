import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between border-b border-blue-950 px-6 py-8">
        <h1 className="text-3xl font-bold text-blue-400">Damian.IT</h1>

        <div className="hidden gap-8 text-sm md:flex">
          <a href="#about" className="hover:text-blue-400">O mnie</a>
          <a href="#skills" className="hover:text-blue-400">Umiejętności</a>
          <a href="#experience" className="hover:text-blue-400">Doświadczenie</a>
          <a href="#projects" className="hover:text-blue-400">Projekty</a>
          <a href="#certificates" className="hover:text-blue-400">Certyfikaty</a>
          <a href="#contact" className="hover:text-blue-400">Kontakt</a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="mb-6 font-semibold uppercase tracking-[4px] text-blue-400">
            IT Operations / Windows Administration
          </p>

          <h1 className="mb-4 text-6xl font-extrabold">Damian Szymczak</h1>

          <h2 className="mb-8 text-3xl font-semibold text-blue-400">
            IT Systems Support Specialist
          </h2>

          <p className="text-xl leading-9 text-gray-300">
            Specjalista IT z doświadczeniem w środowiskach 24/7, monitoringu
            infrastruktury, obsłudze incydentów P1–P4 oraz wsparciu systemów
            dla ponad 500 lokalizacji biznesowych.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Kontakt
            </a>

            <a
              href="https://github.com/damianszymczak-it"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-950"
            >
              GitHub
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

        <div className="flex justify-center">
          <div className="rounded-3xl border border-blue-900 bg-blue-950/20 p-6">
            <Image
              src="/profile-test.png"
              alt="Damian Szymczak"
              width={400}
              height={400}
              priority
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-blue-950 p-8">
            <h3 className="text-5xl font-bold text-blue-400">4+</h3>
            <p className="mt-2 text-gray-400">lata doświadczenia IT</p>
          </div>

          <div className="rounded-2xl border border-blue-950 p-8">
            <h3 className="text-5xl font-bold text-blue-400">500+</h3>
            <p className="mt-2 text-gray-400">obsługiwanych lokalizacji</p>
          </div>

          <div className="rounded-2xl border border-blue-950 p-8">
            <h3 className="text-5xl font-bold text-blue-400">24/7</h3>
            <p className="mt-2 text-gray-400">środowisko produkcyjne</p>
          </div>

          <div className="rounded-2xl border border-blue-950 p-8">
            <h3 className="text-5xl font-bold text-blue-400">P1-P4</h3>
            <p className="mt-2 text-gray-400">obsługa incydentów</p>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-4xl font-bold text-blue-400">O mnie</h2>

        <p className="text-lg leading-9 text-gray-300">
          Na co dzień pracuję jako IT Systems Support Specialist, wspierając
          infrastrukturę działającą w trybie 24/7. Zajmuję się monitoringiem
          systemów, analizą incydentów, priorytetyzacją zgłoszeń oraz wsparciem
          użytkowników końcowych. Interesuję się administracją systemami Windows,
          automatyzacją, PowerShellem, AI oraz technologiami chmurowymi.
        </p>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold text-blue-400">Umiejętności</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Windows 10/11",
            "Windows Server",
            "Active Directory",
            "Microsoft 365",
            "PowerShell",
            "Jira",
            "Zabbix",
            "Monitoring 24/7",
            "Incident Management",
            "Git",
            "GitHub",
            "Hyper-V",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-blue-950 p-6 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold text-blue-400">
          Doświadczenie
        </h2>

        <div className="space-y-10">
          <div className="rounded-2xl border border-blue-950 p-8">
            <h3 className="text-2xl font-bold">
              IT Systems Support Specialist
            </h3>

            <p className="mb-4 text-blue-400">
              Anwim S.A. | 05.2024 – obecnie
            </p>

            <ul className="space-y-2 text-gray-300">
              <li>• Obsługa ponad 500 lokalizacji biznesowych</li>
              <li>• Monitoring infrastruktury IT</li>
              <li>• Obsługa i priorytetyzacja incydentów P1–P4</li>
              <li>• Praca w środowisku produkcyjnym 24/7</li>
              <li>• Jira, Zabbix, Xeelo, PCS Telemetria, TapNet</li>
              <li>• Eskalacja awarii i współpraca z zespołami technicznymi</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-950 p-8">
            <h3 className="text-2xl font-bold">IT Support Specialist</h3>

            <p className="mb-4 text-blue-400">
              ACS Audika | 09.2021 – 04.2024
            </p>

            <ul className="space-y-2 text-gray-300">
              <li>• Wsparcie użytkowników i placówek biznesowych</li>
              <li>• Administracja stacjami roboczymi Windows</li>
              <li>• Rozwiązywanie problemów sprzętowych i systemowych</li>
              <li>• Wsparcie aplikacji biznesowych, m.in. Subiekt GT</li>
              <li>• Wsparcie zdalne i terenowe</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold text-blue-400">Projekty</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-blue-950 p-8">
            <h3 className="mb-4 text-2xl font-bold">Portfolio Website</h3>

            <p className="leading-8 text-gray-300">
              Portfolio stworzone w Next.js, hostowane na Vercel, z wykorzystaniem
              GitHub do kontroli wersji. Projekt pokazuje podstawy pracy z
              repozytorium, wdrożeniem i publiczną prezentacją kompetencji.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-950 p-8">
            <h3 className="mb-4 text-2xl font-bold">Home Lab (w budowie)</h3>

            <p className="leading-8 text-gray-300">
              Środowisko testowe rozwijane pod administrację systemami: Windows
              Server, Active Directory, DNS, DHCP, GPO, PowerShell oraz
              wirtualizacja.
            </p>
          </div>
        </div>
      </section>

      <section id="certificates" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold text-blue-400">
          Certyfikaty
        </h2>

        <div className="rounded-2xl border border-blue-950 p-8">
          <h3 className="mb-4 text-2xl font-bold">W trakcie rozwoju</h3>

          <p className="leading-8 text-gray-300">
            Obecnie rozwijam kompetencje w obszarach Windows Administration,
            Infrastructure, Cloud Computing, PowerShell oraz automatyzacji.
            Sekcja będzie aktualizowana wraz z ukończeniem kolejnych szkoleń i
            zdobyciem certyfikatów branżowych.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold text-blue-400">Kontakt</h2>

        <div className="rounded-2xl border border-blue-950 p-8">
          <p className="mb-4 text-xl">Damian Szymczak</p>

          <p className="text-gray-300">IT Systems Support Specialist</p>

          <div className="mt-6 space-y-2 text-gray-300">
            <p>
              Email:{" "}
              <a
                href="mailto:damian.szymczak.it@gmail.com"
                className="text-blue-400 hover:text-blue-300"
              >
                damian.szymczak.it@gmail.com
              </a>
            </p>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/damianszymczak-it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                github.com/damianszymczak-it
              </a>
            </p>

            <p>LinkedIn: w przygotowaniu</p>
          </div>
        </div>
      </section>
    </main>
  );
}