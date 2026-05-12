export function Team() {
  const members = [
    { name: "Rafael Dias", role: "CEO & Fundador", img: "https://i.pravatar.cc/300?img=12" },
    { name: "Marina Costa", role: "Engenheira de Redes", img: "https://i.pravatar.cc/300?img=47" },
    { name: "Lucas Pereira", role: "Técnico em CFTV", img: "https://i.pravatar.cc/300?img=33" },
    { name: "Ana Oliveira", role: "Suporte & Atendimento", img: "https://i.pravatar.cc/300?img=45" },
  ];

  return (
    <section id="equipe" className="py-28 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">// Nossa equipe</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Profissionais por trás da <span className="text-gradient">R.D Segurity</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((m) => (
            <div key={m.name} className="group flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors">
                <img
                  src={m.img}
                  alt={`Foto de ${m.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
