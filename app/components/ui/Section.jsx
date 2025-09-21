import Container from "./Container";

export default function Section({ title, intro, children, className = "" }) {
  return (
    <section className={`py-10 ${className}`}>
      <Container>
        {title && <h2 className="text-xl font-semibold">{title}</h2>}
        {intro && <p className="mt-2 text-sm text-gray-600">{intro}</p>}
        <div className="mt-6">{children}</div>
      </Container>
    </section>
  );
}
