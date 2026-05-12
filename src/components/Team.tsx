import { Github, Linkedin } from "lucide-react";

export function Team() {
  const members = [
    {
      name: "Rodrigo Nogueira",
      role: "Gestor em TI",
      github: "Nogueira-web",
      linkedin: "https://linkedin.com/in/rodrigo-nogueira-code",
    },
    {
      name: "Marília Goulart",
      role: "Gestora em TI",
      github: "marilhosa",
      linkedin: "https://www.linkedin.com/in/marilia-goulart-tech/",
    },
    {
      name: "Daniel",
      role: "Gestor em TI",
      github: "dannimts",
      linkedin: "",
    },
    {
      name: "Wagner",
      role: "Analista de Sistema",
      github: "0000000000000000000000000000000000009",
      linkedin: "https://www.linkedin.com/in/wagner-junior-96a834376",
    },
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
                  src={`https://github.com/${m.github}.png`}
                  alt={`Foto de ${m.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={`https://github.com/${m.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub de ${m.name}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${m.name}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
