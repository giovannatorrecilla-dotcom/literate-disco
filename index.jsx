import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import zygalisLogo from "@/assets/zygalis-logo.jpg";
import { Microscope, Shield, Dna, Users, ArrowRight, CheckCircle2, Phone } from "lucide-react";

const Index = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Biossegurança",
      description: "Modela toda a cultura interna com padronização rigorosa de EPIs, fluxo de materiais e controle microbiológico avançado."
    },
    {
      icon: Microscope,
      title: "Precisão Científica",
      description: "Protocolos calibrados, resultados rastreáveis e laboratório com controle total de variáveis para máxima excelência."
    },
    {
      icon: Dna,
      title: "Origem e Herança Genética",
      description: "Foco em matrizes e reprodutores selecionados para melhoramento estratégico e potencial genético superior."
    },
    {
      icon: Users,
      title: "Relação Humana e Confiável",
      description: "Suporte técnico contínuo, visitas, consultorias e acompanhamento pós-transferência de embriões."
    }
  ];

  const services = [
    "Fertilização In Vitro (FIV) com controle laboratorial completo",
    "Injeção Intracitoplasmática de Espermatozóides (ICSI)",
    "Produção de embriões de alta qualidade",
    "Acompanhamento técnico especializado",
    "Consultoria em melhoramento genético",
    "Protocolos personalizados por rebanho"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section id="inicio" className="relative min-h-screen flex flex-col">
        <nav className="absolute top-0 right-0 p-6 z-50 hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Sobre</a>
          <a href="#pilares" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Pilares</a>
          <a href="#servicos" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Serviços</a>
          <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background">
            Contato
          </Button>
        </nav>

        {/* Hero - Refinado */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Logo fluida */}
              <div className="lg:col-span-3 flex justify-center lg:justify-start">
                <img src={zygalisLogo} alt="Zygalis" className="max-w-[180px] md:max-w-[220px] lg:max-w-[260px] h-auto object-contain opacity-95" />
              </div>

              {/* Slogan refinado */}
              <div className="lg:col-span-6 text-center">
                <h1 className="leading-tight font-serif text-primary font-light text-3xl md:text-5xl lg:text-6xl tracking-[-0.015em]">
                  Excelência que começa na origem.
                </h1>
                <p className="mt-4 text-sm md:text-base text-muted-foreground font-light tracking-wide">
                  Reprodução assistida veterinária com rigor científico e biossegurança.
                </p>
              </div>

              {/* DNA Decorativo */}
              <div className="lg:col-span-3 hidden lg:flex justify-end">
                <Dna className="w-48 h-48 text-primary/15 stroke-[1.2]" />
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8 px-4">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 text-primary">
              <Phone className="w-6 h-6" />
              <span className="text-xl md:text-2xl font-medium">(14) 99664-4221</span>
            </div>
          </div>
        </div>
      </section>

      {/* Restante do site permanece igual */}
    </div>
  );
};

export default Index;
