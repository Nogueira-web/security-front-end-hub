import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 -z-10" />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">// Fale conosco</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Pronto para <span className="text-gradient">proteger</span> o que é seu?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Receba um orçamento personalizado em até 24h. Atendemos toda a região com visita técnica gratuita.
          </p>

          <div className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "Telefone", value: "(11) 99999-0000" },
              { icon: Mail, label: "E-mail", value: "contato@rdsegurity.com.br" },
              { icon: MapPin, label: "Endereço", value: "Av. Paulista, 1000 — São Paulo / SP" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Solicitação enviada! Entraremos em contato em breve."); }}
          className="bg-gradient-card border border-border rounded-2xl p-8 space-y-5 backdrop-blur-xl"
        >
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Nome</label>
            <input required type="text" className="w-full bg-input/60 border border-border rounded-md px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition" placeholder="Seu nome" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">E-mail</label>
              <input required type="email" className="w-full bg-input/60 border border-border rounded-md px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition" placeholder="voce@email.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Telefone</label>
              <input required type="tel" className="w-full bg-input/60 border border-border rounded-md px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition" placeholder="(11) 99999-0000" />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Serviço de interesse</label>
            <select className="w-full bg-input/60 border border-border rounded-md px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition">
              <option>CFTV / Câmeras</option>
              <option>Alarmes Monitorados</option>
              <option>Controle de Acesso</option>
              <option>Cerca Elétrica</option>
              <option>Automação Residencial</option>
              <option>Configuração de Redes</option>
              <option>Manutenção de Computadores</option>
              <option>Outro</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">Mensagem</label>
            <textarea rows={4} className="w-full bg-input/60 border border-border rounded-md px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition resize-none" placeholder="Conte-nos sobre seu projeto..." />
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3.5 rounded-md font-semibold uppercase tracking-wider text-sm glow-primary hover:scale-[1.01] transition-transform">
            <Send className="h-4 w-4" />
            Enviar solicitação
          </button>
        </form>
      </div>
    </section>
  );
}
