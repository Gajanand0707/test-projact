export default function HeroSection({ title, subtitle }: any) {
  return (
    <section>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
