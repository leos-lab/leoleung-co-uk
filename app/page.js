import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faLayerGroup, faUsers, faList } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <main>
      <Header />
      <div className="pt-28">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold">Hi, I’m <span className="underline-brass">Leo</span> — I build useful things.</h1>
              <p className="mt-5 text-slate-300 text-lg">I’m a UK-based <strong>consultant & web developer</strong> who loves turning messy workflows into neat tools. Professional, friendly, and focused on outcomes.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#work" className="px-4 py-2 rounded-full bg-brass text-background font-medium shadow-soft">See my work</a>
                <a href="#contact" className="px-4 py-2 rounded-full border border-white/20 hover:bg-white/10">Get in touch</a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
                <li className="px-3 py-1 rounded-full border border-white/15">Power Platform / Dynamics 365</li>
                <li className="px-3 py-1 rounded-full border border-white/15">React / Next.js</li>
                <li className="px-3 py-1 rounded-full border border-white/15">Sanity / Firebase</li>
                <li className="px-3 py-1 rounded-full border border-white/15">Notion / Figma</li>
              </ul>
            </div>
            <div className="relative">
              <div className="glass card card-bg rounded-2xl p-6 border border-white/10">
                <h3 className="font-semibold text-xl mb-3">Currently</h3>
                <ul className="space-y-3 text-slate-300">
                  <li>• Building <a className="underline hover:opacity-80" href="https://suitt.co" target="_blank" rel="noopener">suitt.co</a> — an ongoing digitised closet solution for community requests and sharing.</li>
                  <li>• Consulting for <a className="underline hover:opacity-80" href="https://manchestergents.com" target="_blank" rel="noopener">Manchester Gents</a> on community, design & photo platform.</li>
                  <li>• Graphic design for <span className="font-medium">Manchester Gents</span> (ongoing) and <span className="font-medium">F1ABEEZ</span> (past).</li>
                  <li>• Advising on <span className="font-medium">low-code apps</span>, workflow automation, and digital tools.</li>
                </ul>
                <div className="mt-5 flex gap-3">
                  <a className="px-3 py-2 rounded-lg border border-white/15 hover:bg-white/10" href="mailto:hello@leoleung.co.uk">hello@leoleung.co.uk</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I do */}
        <section id="work" className="mx-auto max-w-6xl px-4 md:px-6 mt-20">
          <SectionTitle icon={<FontAwesomeIcon icon={faScrewdriverWrench} fixedWidth />}>What I do</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <article className="card glass card-bg rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-lg">Low-Code Solutions</h3>
              <p className="mt-2 text-slate-300">Power Apps, Power Automate, and Dynamics 365 customisations that make teams faster and happier.</p>
            </article>
            <article className="card glass card-bg rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-lg">Web Apps</h3>
              <p className="mt-2 text-slate-300">React/Next.js front-ends with clean UX. Sanity or Firebase on the back. Built for real-world use.</p>
            </article>
            <article className="card glass card-bg rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-lg">Design & Collaboration</h3>
              <p className="mt-2 text-slate-300">Design systems, mockups, and collaboration in Figma & Notion. Blending visuals with workflows.</p>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 md:px-6 mt-20">
          <SectionTitle icon={<FontAwesomeIcon icon={faLayerGroup} fixedWidth />}>Selected projects</SectionTitle>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <a href="https://photos.manchestergents.com" target="_blank" rel="noopener" className="card block rounded-2xl overflow-hidden border border-white/10 glass card-bg">
              <div className="p-6">
                <h3 className="font-semibold">Event Photo Platform</h3>
                <p className="mt-2 text-slate-300">Next.js + Sanity gallery with comments, uploads, and dynamic OG images.</p>
              </div>
            </a>
            <a href="https://x.le0.uk" target="_blank" rel="noopener" className="card block rounded-2xl overflow-hidden border border-white/10 glass card-bg">
              <div className="p-6">
                <h3 className="font-semibold">Leo’s Utilities</h3>
                <p className="mt-2 text-slate-300">A growing set of small, useful web tools and automations.</p>
              </div>
            </a>
            <a href="https://suitt.co" target="_blank" rel="noopener" className="card block rounded-2xl overflow-hidden border border-white/10 glass card-bg">
              <div className="p-6">
                <h3 className="font-semibold">suitt.co</h3>
                <p className="mt-2 text-slate-300">An ongoing digitised closet solution for community requests and sharing.</p>
              </div>
            </a>
          </div>
          <p className="mt-4 text-sm text-slate-400">More on request — some client work is private.</p>
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
