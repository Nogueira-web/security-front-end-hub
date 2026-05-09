import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <span className="font-display font-bold tracking-widest text-sm">SENTINEL<span className="text-primary">.</span>SEC</span>
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          © {new Date().getFullYear()} Sentinel Sec — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
