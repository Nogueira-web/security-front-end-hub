import { Camera, Bell, KeyRound, Zap, Phone, Cog, Network, Monitor } from "lucide-react";

const services = [
  { icon: Camera, title: "CFTV / Câmeras IP", desc: "Sistemas de vigilância em alta definição com acesso remoto via app, gravação em nuvem e visão noturna." },
  { icon: Bell, title: "Alarmes Monitorados", desc: "Sensores de presença, abertura e quebra com central monitorada e notificações em tempo real." },
  { icon: KeyRound, title: "Controle de Acesso", desc: "Biometria, cartões RFID, fechaduras eletrônicas e gestão completa de entradas e saídas." },
  { icon: Zap, title: "Cerca Elétrica", desc: "Instalação e manutenção de cercas elétricas com central de choque homologada e laudo técnico." },
  { icon: Phone, title: "Interfonia", desc: "Porteiros eletrônicos, vídeo-porteiros IP e integração com smartphones para condomínios e residências." },
  { icon: Cog, title: "Automação Residencial", desc: "Portões automáticos, iluminação, persianas e cenários inteligentes integrados ao seu sistema de segurança." },
  { icon: Network, title: "Configuração de Redes", desc: "Projetos de cabeamento estruturado, Wi-Fi corporativo, roteadores, switches e VLANs seguras." },
  { icon: Monitor, title: "Manutenção de Computadores", desc: "Suporte técnico, formatação, recuperação de dados e manutenção preventiva para PCs e servidores." },
];

export function Services() {
  return (
    <section id="servicos" className="py-28 relative">
      <div className="absolute inset-0 grid-pattern opacity-20 -z-10" />
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">// O que fazemos</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Serviços <span className="text-gradient">executados</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Soluções end-to-end em segurança eletrônica e tecnologia. Do projeto à manutenção.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_oklch(0.78_0.18_200/0.3)]"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground/50">
                0{i + 1}
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:glow-primary transition-all">
                <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
