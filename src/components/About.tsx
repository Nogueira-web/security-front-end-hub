export function About() {
  const stats = [
    { value: "12+", label: "Anos de mercado" },
    { value: "500+", label: "Clientes ativos" },
    { value: "2.4k", label: "Projetos entregues" },
    { value: "99.9%", label: "Uptime médio" },
  ];

  return (
    <section id="sobre" className="py-28 border-y border-border bg-secondary/20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">// Sobre nós</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Mais de uma década protegendo <span className="text-gradient">pessoas, lares e negócios.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            A Sentinel Sec nasceu da paixão por tecnologia e segurança. Combinamos engenharia de redes, automação e vigilância eletrônica para entregar soluções que realmente funcionam — projetadas sob medida para cada cliente.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trabalhamos com as principais marcas do mercado: Intelbras, Hikvision, JFL, Ubiquiti, Mikrotik e mais.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-gradient-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
              <div className="text-5xl font-display font-bold text-gradient">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
