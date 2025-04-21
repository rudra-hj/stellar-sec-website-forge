
import { Shield, FileCode, FileSymlink, Terminal, Code, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ServicesSection = () => {
  const services = [
    {
      title: "Security Audits & Assessments",
      description: "Comprehensive evaluation of your systems and networks to identify vulnerabilities and security gaps.",
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyberattacks to evaluate the security of your IT systems and identify exploitable vulnerabilities.",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
    {
      title: "Open Source Implementation",
      description: "Integration of secure open-source solutions tailored to your specific business requirements.",
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      title: "Linux System Administration",
      description: "Expert setup, configuration, and maintenance of Linux-based infrastructure with security best practices.",
      icon: <Terminal className="h-10 w-10 text-primary" />,
    },
    {
      title: "Custom Security Solutions",
      description: "Development and implementation of bespoke security applications and tools for unique challenges.",
      icon: <FileCode className="h-10 w-10 text-primary" />,
    },
    {
      title: "Security Training & Workshops",
      description: "Educational programs to enhance your team's security awareness and technical skills.",
      icon: <FileSymlink className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section id="services" className="section-padding relative bg-cybersec-light/5">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Comprehensive cybersecurity services to protect your business from evolving threats
            while leveraging the power of open-source technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm card-hover">
              <CardHeader>
                <div className="mb-3">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-primary hover:text-white hover:bg-primary">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
