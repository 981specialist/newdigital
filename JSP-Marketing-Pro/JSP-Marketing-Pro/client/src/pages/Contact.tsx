import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Let's Grow Your Shopify Store
            </h1>
            <p className="text-lg text-white/80">
              Ready to take your ecommerce business to the next level? Get in touch with our team of Shopify experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-8 lg:p-12">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        Send Us a Message
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              First Name
                            </label>
                            <Input 
                              placeholder="John" 
                              required 
                              data-testid="input-first-name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Last Name
                            </label>
                            <Input 
                              placeholder="Doe" 
                              required 
                              data-testid="input-last-name"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email Address
                          </label>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
                            required 
                            data-testid="input-email"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Website URL
                          </label>
                          <Input 
                            placeholder="https://your-store.myshopify.com" 
                            data-testid="input-website"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            What services are you interested in?
                          </label>
                          <Input 
                            placeholder="SEO, PPC, Website Design, etc." 
                            data-testid="input-services"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Message
                          </label>
                          <Textarea 
                            placeholder="Tell us about your project and goals..." 
                            rows={5}
                            required
                            data-testid="input-message"
                          />
                        </div>
                        
                        <Button type="submit" size="lg" className="w-full" data-testid="button-submit-contact">
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </Button>
                      </form>
                    </>
                  )}
                </Card>
              </motion.div>
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">We respond within 24 hours</p>
                      <a href="mailto:hello@jspdigital.co.uk" className="text-primary hover:underline" data-testid="link-email">
                        hello@jspdigital.co.uk
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                      <p className="text-muted-foreground text-sm mb-2">Mon-Fri from 9am to 5pm</p>
                      <a href="tel:+441onal234567890" className="text-primary hover:underline" data-testid="link-phone">
                        +44 (0) 123 456 7890
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground text-sm">
                        London, United Kingdom<br />
                        Working with clients globally
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9am - 5pm<br />
                        Weekend: By appointment
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
