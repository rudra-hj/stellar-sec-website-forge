
import { Mail, Instagram, Globe, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative bg-cybersec-light/5">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Have a project in mind or interested in my services? Reach out and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="rounded-full bg-primary/10 p-6">
                    <Linkedin className="h-16 w-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Let's Connect on LinkedIn</h3>
                  <p className="text-gray-300 text-center max-w-lg">
                    Feel free to connect with me on LinkedIn where you can see my professional experience, 
                    certifications, and get in touch directly through messaging.
                  </p>
                  <Button 
                    size="lg" 
                    className="mt-4"
                    onClick={() => window.open('https://www.linkedin.com/in/rudra-raw/', '_blank')}
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="space-y-6">
              <Card className="border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/20 mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-gray-400">contact@rudra.it</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/20 mt-1">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Instagram</h3>
                      <p className="text-sm text-gray-400">@rudra.raw</p>
                      <a 
                        href="https://www.instagram.com/rudra.raw/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-1 block"
                      >
                        Follow me
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/20 mt-1">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-sm text-gray-400">Silicon Valley, California</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <a 
                    href="https://www.instagram.com/rudra.raw/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-3"
                  >
                    <div className="p-3 rounded-full bg-primary/20">
                      <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold">Follow my journey</h3>
                      <p className="text-xs text-gray-400 mt-1">@rudra.raw</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
