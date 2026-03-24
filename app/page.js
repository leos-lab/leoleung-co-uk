import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faLayerGroup, faUsers, faList } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const projectSpotlight = [
    {
      title: "Portfolio Website",
      description:
        "This site (Next.js) for presenting my consulting offer, project case studies, and technical profile.",
      skills: "Next.js 14, React, Tailwind CSS, SEO metadata",
      liveUrl: "https://leoleung.co.uk",
      gitUrl: "https://github.com/leoleung-dev/leoleung-co-uk"
    },
    {
      title: "Manchester Gents Platform",
      description:
        "Production member platform with onboarding, event operations, admin tools, consent lifecycle, and automation integrations.",
      skills: "Next.js App Router, Prisma, PostgreSQL, NextAuth",
      liveUrl: "https://manchestergents.com",
      gitUrl: "https://github.com/leoleung-dev/Manchester-Gents"
    },
    {
      title: "LCWK Reports",
      description:
        "Internal annual reporting platform with secure access, multi-domain workflows, admin controls, and Excel exports.",
      skills: "Next.js, PostgreSQL, next-auth, role-based admin tools",
      liveUrl: "https://www.lcwk.com.hk",
      gitUrl: "https://github.com/leoleung-dev/lcwk-reports"
    },
    {
      title: "Manchester Gents Gallery",
      description:
        "Event photo platform with upload workflows, moderation, comments, and dynamic Open Graph rendering for sharing.",
      skills: "React, Vite, Sanity, Vercel Serverless APIs",
      liveUrl: "https://photos.manchestergents.com",
      gitUrl: "https://github.com/leoleung-dev/manchester-gents-gallery"
    }
  ];

  return (
    <main>
      <Header />
      <div className="pt-28">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold">Hi, I’m <span className="underline-brass">Leo</span> — I build useful things.</h1>
              <p className="mt-5 text-slate-300 text-lg">I’m a UK-based <strong>consultant & web developer</strong> focused on Power Platform delivery and full-stack web products that solve real operational problems.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="px-4 py-2 rounded-full bg-brass text-background font-medium shadow-soft">See project spotlight</a>
                <a href="#contact" className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10">Get in touch</a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
                <li className="px-3 py-1 rounded-full border border-white/15">Power Apps / Power Automate</li>
                <li className="px-3 py-1 rounded-full border border-white/15">Dataverse / Dynamics 365</li>
                <li className="px-3 py-1 rounded-full border border-white/15">React / Next.js</li>
                <li className="px-3 py-1 rounded-full border border-white/15">PostgreSQL / Prisma / Sanity</li>
                <li className="px-3 py-1 rounded-full border border-white/15">Figma / Notion / Vercel</li>
              </ul>
            </div>
            <div className="relative">
              <div className="glass card card-bg rounded-2xl p-6 border border-white/10">
                <h3 className="font-semibold text-xl mb-3">Current focus</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>• Delivering low-code systems with <span className="font-medium">Power Apps, Power Automate, Dataverse, and Dynamics 365</span>.</li>
                  <li>• Maintaining <a className="underline hover:opacity-80" href="https://manchestergents.com" target="_blank" rel="noopener">Manchester Gents Platform</a> and <a className="underline hover:opacity-80" href="https://photos.manchestergents.com" target="_blank" rel="noopener">Gallery</a>.</li>
                  <li>• Building internal reporting tools for business operations and leadership visibility.</li>
                  <li>• Shipping production web apps with practical UX, secure auth, and operational admin tooling.</li>
                </ul>
                <div className="mt-5 flex gap-3">
                  <a className="px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10" href="mailto:hello@leoleung.co.uk">hello@leoleung.co.uk</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-4 md:px-6 mt-20">
          <SectionTitle icon={<FontAwesomeIcon icon={faScrewdriverWrench} fixedWidth />}>Skill set</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <article className="card glass card-bg rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-lg">Power Platform Delivery</h3>
              <p className="mt-2 text-slate-300">Power Apps, Power Automate, Dataverse, and Dynamics 365 for workflow automation, approvals, data capture, and team operations.</p>
            </article>
            <article className="card glass card-bg rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-lg">Web Engineering</h3>
              <p className="mt-2 text-slate-300">React and Next.js apps with App Router patterns, serverless APIs, secure auth, and production deployment across client and internal tools.</p>
            </article>
            <article className="card glass card-bg rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-lg">Data, Design & Collaboration</h3>
              <p className="mt-2 text-slate-300">PostgreSQL, Prisma, Sanity, Figma, and Notion to connect product design with maintainable systems and team-ready delivery.</p>
            </article>
          </div>
        </section>

        {/* Project Spotlight */}
        <section id="projects" className="mx-auto max-w-6xl px-4 md:px-6 mt-20">
          <SectionTitle icon={<FontAwesomeIcon icon={faLayerGroup} fixedWidth />}>4-project spotlight</SectionTitle>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {projectSpotlight.map((project) => (
              <article key={project.title} className="card rounded-2xl overflow-hidden border border-white/10 glass card-bg p-6">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="mt-2 text-slate-300">{project.description}</p>
                <p className="mt-3 text-sm text-slate-400">{project.skills}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener"
                    className="px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10"
                  >
                    Live
                  </a>
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener"
                    className="px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-400">These four repos are the main project spotlight for this portfolio.</p>
        </section>

        {/* Community */}
        <section id="community" className="mx-auto max-w-6xl px-4 md:px-6 mt-20">
          <SectionTitle icon={<FontAwesomeIcon icon={faUsers} fixedWidth />}>Community</SectionTitle>
          <div className="grid md:grid-cols-1 gap-6 mt-6">
            <article className="card glass card-bg rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold">Manchester Gents</h3>
              <p className="mt-2 text-slate-300">I consult for Manchester Gents on the community’s tech, design, and photo platform.</p>
              <a className="inline-block mt-3 px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10" href="https://manchestergents.com" target="_blank" rel="noopener">Visit site</a>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 md:px-6 mt-20 mb-24">
          <div className="card glass card-bg rounded-2xl p-8 md:p-10 border border-white/10 text-center">
            <SectionTitle icon={<FontAwesomeIcon icon={faList} fixedWidth />}>Let’s build something useful</SectionTitle>
            <p className="mt-3 text-slate-300">Available for consulting, collaborations, or a quick chat about an idea.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a className="px-4 py-2 rounded-full bg-brass text-background font-medium shadow-soft" href="mailto:hello@leoleung.co.uk">Email me</a>
              <a className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10" href="https://cal.com/leo-leung" target="_blank" rel="noopener">Book a call</a>
              <a className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10" href="/cv" rel="noopener">View CV</a>
            </div>
          </div>
        </section>
      </div>

      <footer className="mx-auto max-w-6xl px-4 md:px-6 pb-10 text-slate-400 text-sm">
        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} Leo Leung</p>
        </div>
      </footer>
    </main>
  );
}
