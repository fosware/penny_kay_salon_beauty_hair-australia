type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-3xl font-serif text-6xl leading-[0.95] text-espresso md:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-coffee md:text-xl">{description}</p>
      </div>
    </section>
  );
}
