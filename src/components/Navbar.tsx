import { Shield } from "lucide-react";

export function Navbar() {
  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <Shield className="h-7 w-7 text-primary transition-transform group-hover:scale-110" strokeWidth={1.5} />
            <div className="absolute inset-0 blur-md bg-primary/40 -z-10" />
          </div>
          <span className="font-display font-bold text-lg tracking-widest">
            SENTINEL<span className="text-primary">.</span>SEC
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center justify-center rounded-md bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity uppercase tracking-wider"
        >
          Orçamento
        </a>
      </nav>
    </header>
  );
}
