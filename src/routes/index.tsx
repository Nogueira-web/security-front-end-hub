import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "R.D Segurity — Segurança Eletrônica, Redes e Tecnologia" },
      { name: "description", content: "Empresa de segurança eletrônica: CFTV, alarmes, controle de acesso, cerca elétrica, automação, redes e manutenção de computadores. Projetos sob medida com monitoramento 24/7." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
