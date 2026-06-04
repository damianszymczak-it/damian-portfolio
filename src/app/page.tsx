import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center border-b border-blue-950">
        <h1 className="text-3xl font-bold text-blue-400">Damian.IT</h1>

        <div className="hidden md:flex gap-8 text-sm">
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
          <a href="#certificates" className="hover:text-blue-400">
            Certyfikaty
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Kontakt
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[4px] text-blue-400 font-semibold mb-6">
            IT Operations / Windows Administration
          </p>

          <h1 className="text-6xl font-extrabold mb-4">Damian Szymczak</h1>

          <h2 className="text-3xl text-blue-400 font-semibold mb-8">
            IT Systems Support Specialist
          </h2>

          <p className="text-xl text-gray-300 leading-9">
            Specjalista IT z doświadczeniem w środowiskach 24/7, monitoringu
            infrastruktury, obsłudze incydentów P1–P4 oraz wsparciu systemów
            dla ponad 500 lokalizacji biznesowych.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
            >
              Kontakt
            </a>

            <a
              href="https://github.com/damianszymczak-it"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-950 transition"
            >
              GitHub
            </a>

            <a
              href="/Damian_Szymczak_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-600 text-green-400 px-8 py-4 rounded-xl font-semibold hover:bg-green-950/30 transition"
            >
              Pobierz CV
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="border border-blue-900 rounded-3xl p-6 bg-blue-950/20">
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

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="border border-blue-950 rounded-2xl p-8">
            <h3 className="text-5xl font-bold text-blue-400">4+</h3>
            <p className="mt-2 text-gray-400">lata doświadczenia IT</p>
          </div>

          <div className="border border-blue-950 rounded-2xl p-8">
            <h3 className="text-5xl font-bold text-blue-400">500+</h3>
            <p className="mt-2 text-gray-400">obsługiwanych lokalizacji</p>
          </div>

          <div className="border border-blue-950 rounded-2xl p-8">
            <h3 className="text-5xl font-bold text-blue-400">24/7</h3>
            <p className="mt-2 text-gray-400">środowisko produkcyjne</p>
          </div>

          <div className="border border-blue-950 rounded-2xl p-8">
            <h3 className="text-5xl font-bold text-blue-400">P1-P4</h3>
            <p className="mt-2 text-gray-400">obsługa incydentów</p>
          </div>
        </div>
      </section>

      {/* O MNIE */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">O mnie</h2>

        <p className="text-lg text-gray-300 leading-9">
          Na co dzień pracuję jako IT Systems Support Specialist, wspierając
          infrastrukturę działającą w trybie 24/7. Zajmuję się monitoringiem
          systemów, analizą incydentów, priorytetyzacją zgłoszeń oraz wsparciem
          użytkowników końcowych. Interesuję się administracją systemami
          Windows, automatyzacją, PowerShellem, AI oraz technologiami
          chmurowymi.
        </p>
      </section>

      {/* UMIEJĘTNOŚCI */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          Umiejętności
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
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
              className="border border-blue-950 rounded-xl p-6 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* DOŚWIADCZENIE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          Doświadczenie
        </h2>

        <div className="space-y-10">
          <div className="border border-blue-950 rounded-2xl p-8">
            <h3 className="text-2xl font-bold">
              IT Systems Support Specialist
            </h3>

            <p className="text-blue-400 mb-4">
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

          <div className="border border-blue-950 rounded-2xl p-8">
            <h3 className="text-2xl font-bold">IT Support Specialist</h3>

            <p className="text-blue-400 mb-4">
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

      {/* PROJEKTY */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Projekty</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-blue-950 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Portfolio Website</h3>

            <p className="text-gray-300 leading-8">
              Portfolio stworzone w Next.js, hostowane na Vercel, z
              wykorzystaniem GitHub do kontroli wersji. Projekt pokazuje
              podstawy pracy z repozytorium, wdrożeniem i publiczną prezentacją
              kompetencji.
            </p>
          </div>

          <div className="border border-blue-950 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Home Lab (w budowie)</h3>

            <p className="text-gray-300 leading-8">
              Środowisko testowe rozwijane pod administrację systemami:
              Windows Server, Active Directory, DNS, DHCP, GPO, PowerShell oraz
              wirtualizacja.
            </p>
          </div>
        </div>
      </section>

      {/* CERTYFIKATY */}
      <section id="certificates" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          Certyfikaty
        </h2>

        <div className="border border-blue-950 rounded-2xl p-10">
          <h3 className="text-2xl font-semibold mb-4">W trakcie rozwoju</h3>

          <p className="text-gray-400 leading-8">
            Obecnie rozwijam kompetencje w obszarach Windows Administration,
            Infrastructure, Cloud Computing, PowerShell oraz automatyzacji.
            Sekcja będzie aktualizowana wraz z ukończeniem kolejnych szkoleń i
            zdobyciem certyfikatów branżowych.
          </p>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10 text-blue-400">Kontakt</h2>

        <div className="border border-blue-950 rounded-2xl p-8">
          <p className="text-xl mb-4">Damian Szymczak</p>

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