import heroImg from "@/assets/hero-security.jpg";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Central de monitoramento de segurança eletrônica" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-8 scanline relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs uppercase tracking-[0.2em] text-primary">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Monitoramento 24/7
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Proteção <span className="text-gradient">inteligente</span> para o que mais importa.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Soluções completas em segurança eletrônica, redes e tecnologia. Projetamos, instalamos e mantemos sistemas que vigiam por você — sem pausas, sem falhas.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contato" className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm glow-primary hover:scale-[1.02] transition-transform">
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicos" className="inline-flex items-center gap-2 border border-border bg-card/50 backdrop-blur px-7 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm hover:border-primary/60 hover:text-primary transition-colors">
              Nossos serviços
            </a>
          </div>
          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> +500 clientes</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> 12 anos no mercado</div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl border border-primary/30 bg-card/40 backdrop-blur-xl p-6 glow-primary animate-pulse-glow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">// Live status</span>
              <span className="flex items-center gap-2 text-xs text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> ONLINE
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Câmeras ativas", value: "248" },
                { label: "Sensores", value: "1.2k" },
                { label: "Acessos hoje", value: "3.847" },
                { label: "Uptime", value: "99.98%" },
              ].map((s) => (
                <div key={s.label} className="bg-secondary/60 rounded-lg p-4 border border-border">
                  <div className="text-2xl font-display font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 h-24 rounded-lg bg-secondary/40 border border-border flex items-end gap-1 p-3">
              {[40, 65, 30, 80, 55, 90, 45, 70, 60, 85, 50, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
