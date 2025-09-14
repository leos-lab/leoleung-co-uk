export default function SectionTitle({ icon, children }) {
  return (
    <h2 className="section-title mb-3">
      {icon ? <span className="inline-flex" aria-hidden="true">{icon}</span> : null}
      {children}
    </h2>
  );
}
