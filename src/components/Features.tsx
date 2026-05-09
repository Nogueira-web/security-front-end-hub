import { Clock, Award, Headphones, Wrench } from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Operacional", desc: "Equipe de plantão e sistemas que nunca dormem." },
  { icon: Award, title: "Certificados", desc: "Técnicos qualificados e equipamentos homologados." },
  { icon: Headphones, title: "Suporte Imediato", desc: "Atendimento ágil via WhatsApp, telefone ou e-mail." },
  { icon: Wrench, title: "Manutenção Preventiva", desc: "Planos mensais para garantir 100% de funcionamento." },
];

export function Features() {
  return (
    <section id="diferenciais" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] -z-10" />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">// Por que nós</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Tecnologia, <span className="text-gradient">confiança</span> e velocidade.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-xl border border-border bg-card/40 backdrop-blur hover:border-accent/60 transition-colors">
              <div className="inline-flex w-14 h-14 rounded-full bg-accent/10 border border-accent/40 items-center justify-center mb-4 glow-accent">
                <f.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
