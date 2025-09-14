import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faGraduationCap, faCircleInfo, faBars } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "CV — Leo Leung",
  description: "CV of Leo Leung — consultant & web developer based in the UK. Experience across web, low-code, property lettings, sales, admin, design, and community projects."
};

export default function CVPage() {
  return (
    <main>
      <Header />
      <div className="mx-auto max-w-5xl px-4 md:px-6 pt-28 pb-10 space-y-8">
        {/* Profile */}
        <section className="card glass card-bg rounded-2xl p-6 border border-white/10">
          <SectionTitle icon={<FontAwesomeIcon icon={faUser} fixedWidth />}>Profile</SectionTitle>
          <div className="relative pl-5 border-l-4 border-brass">
            <p className="text-slate-300 leading-relaxed">
              <span className="font-semibold text-brass">Motivated & adaptable</span> professional with a foundation in <span className="font-medium">Computer Science</span> and hands‑on experience across <span className="font-medium">web development</span>, <span className="font-medium">low‑code platforms</span>, and <span className="font-medium">property lettings, sales & admin</span>.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Strong communicator, creative problem‑solver, and quick to design solutions that make teams more efficient. I thrive on <span className="italic">turning complexity into clarity</span> and shipping practical features that bring real‑world impact.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="card glass card-bg rounded-2xl p-6 border border-white/10">
          <SectionTitle icon={<FontAwesomeIcon icon={faBriefcase} fixedWidth />}>Experience</SectionTitle>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Customer Service Advisor — G4S <span className="text-sm text-slate-400">Oct 2024 – Jan 2025</span></h3>
              <ul className="mt-2 list-disc list-inside text-slate-300 text-sm">
                <li>Provided accurate, efficient support in a fast‑paced call centre; maintained a 100% quality score.</li>
                <li>Built strong rapport and contributed to a positive team culture; became a trainer for colleagues.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Sales Consultant — YPP Lettings <span className="text-sm text-slate-400">Feb 2023 – Aug 2023</span></h3>
              <ul className="mt-2 list-disc list-inside text-slate-300 text-sm">
                <li>Achieved personal and group sales targets through proactive engagement and closing skills.</li>
                <li>Created a booking organisation system that streamlined processes within two months of joining.</li>
                <li>Reduced rent arrears by £200,000 (50%) in one day via coordinated team effort.</li>
                <li>Produced sales team wiki and IT guides, improving efficiency and reducing technical errors.</li>
                <li>Handled admin responsibilities including arrears chasing, landlord communication, and contracts.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Graduate Management Trainee — Enterprise Rent‑A‑Car <span className="text-sm text-slate-400">Aug 2022 – Nov 2022</span></h3>
              <ul className="mt-2 list-disc list-inside text-slate-300 text-sm">
                <li>Boosted customer service matrix scores by 50% through process improvements.</li>
                <li>Implemented 48‑hour callback system; marketed corporate accounts and secured two major accounts.</li>
                <li>Carried out day‑to‑day branch operations: sales, administration, and customer relations.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Service Assistant — Fresh Property Group (Steelworks, Sheffield) <span className="text-sm text-slate-400">Mar 2022 – Aug 2022</span></h3>
              <ul className="mt-2 list-disc list-inside text-slate-300 text-sm">
                <li>Front‑of‑house support across student & BTR accommodation; resolved resident enquiries daily.</li>
                <li>Coordinated property viewings and promoted sites to prospective tenants using varied sales techniques.</li>
                <li>Maintained site data and reports for business needs, supporting management with admin and statistics.</li>
                <li>Managed social media channels (WeChat, Weibo) to engage international tenants and agents.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Head of Technology & Development — F1ABEEZ (Online Community / NFP) <span className="text-sm text-slate-400">Jun 2021 – Aug 2022</span></h3>
              <ul className="mt-2 list-disc list-inside text-slate-300 text-sm">
                <li>Built and maintained Notion‑powered website; delivered new features to members.</li>
                <li>Grew the community from ~100 to 350 members in three months through UX/content improvements.</li>
                <li>Created graphics for social platforms; led beta‑testing with KPI tracking.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="card glass card-bg rounded-2xl p-6 border border-white/10">
          <SectionTitle icon={<FontAwesomeIcon icon={faGraduationCap} fixedWidth />}>Education</SectionTitle>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Graduate Diploma in Computer Science — Goldsmiths, University of London <span className="text-sm text-slate-400">2023 – 2024</span></h3>
              <p className="mt-2 text-slate-300 text-sm">Specialising in Web Development (64% — 2:1 equivalent). Modules: Interaction Design (74%), Agile Software Projects (69%), Databases (59%), Mobile Development (54%).</p>
            </div>
            <div>
              <h3 className="font-semibold">BA Business Management — University of Sheffield <span className="text-sm text-slate-400">2019 – 2022</span></h3>
              <p className="mt-2 text-slate-300 text-sm">Focused on marketing, teamwork, and operations. Developed strong presentation, communication, and analytical skills. Final year classification: 2:2.</p>
            </div>
            <div>
              <h3 className="font-semibold">Foundation Course — Univ. of Sheffield International College <span className="text-sm text-slate-400">2017 – 2018</span></h3>
              <p className="mt-2 text-slate-300 text-sm">Biological & Life Sciences pathway. Achieved an average of 79% (First‑class equivalent).</p>
            </div>
          </div>
        </section>

        {/* Other + Interests */}
        <section className="grid md:grid-cols-2 gap-6">
          <aside className="card glass card-bg rounded-2xl p-6 border border-white/10">
            <SectionTitle icon={<FontAwesomeIcon icon={faCircleInfo} fixedWidth />}>Other</SectionTitle>
            <ul className="mt-3 text-slate-300 text-sm space-y-2">
              <li>Clean full UK driving licence (own vehicle)</li>
              <li>Dual citizenship — Hong Kong & UK</li>
            </ul>
            <h3 className="text-lg font-semibold mt-5">Languages</h3>
            <ul className="mt-2 text-slate-300 text-sm space-y-1">
              <li>Cantonese — Native/Fluent</li>
              <li>English — Native/Fluent</li>
              <li>Mandarin — Full professional</li>
            </ul>
          </aside>
          <aside className="card glass card-bg rounded-2xl p-6 border border-white/10">
            <SectionTitle icon={<FontAwesomeIcon icon={faBars} fixedWidth />}>Interests</SectionTitle>
            <p className="mt-2 text-slate-300 text-sm">Gaming, home workouts, travel, and Peak District walks.</p>
          </aside>
        </section>

        {/* CTA */}
        <section className="text-center mt-10">
          <a href="mailto:work@leoleung.co.uk" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brass text-background font-medium shadow-soft">Contact me</a>
        </section>
      </div>

      <footer className="mx-auto max-w-5xl px-4 md:px-6 pb-10 text-slate-400 text-sm">
        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} Leo Leung</p>
          <a href="/" className="underline">Back to Home</a>
        </div>
      </footer>
    </main>
  );
}
