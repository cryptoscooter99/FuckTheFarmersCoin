interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-12 text-ftf-gold">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}