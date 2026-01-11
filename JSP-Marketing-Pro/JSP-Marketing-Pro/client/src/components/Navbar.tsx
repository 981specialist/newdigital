import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Shopify SEO Services", href: "/services/seo" },
  { name: "Shopify PPC Services", href: "/services/ppc" },
  { name: "Klaviyo Experts", href: "/services/klaviyo" },
  { name: "Shopify UGC Services", href: "/services/ugc" },
];

const designers = [
  { name: "Shopify Website Design", href: "/design/website" },
  { name: "Shopify Developers", href: "/design/developers" },
  { name: "Shopify Store Examples", href: "/design/examples" },
];

const marketing = [
  { name: "Shopify Marketing Experts", href: "/marketing/experts" },
  { name: "Shopify Case Study", href: "/marketing/case-study" },
  { name: "Shopify SEO Experts", href: "/marketing/seo-experts" },
  { name: "Shopify Consultant", href: "/marketing/consultant" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="link-home">
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>J</span>
              </div>
              <span className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                JSP Digital
              </span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                data-testid="dropdown-services"
              >
                Marketing Services <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[220px]">
                      {services.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <span className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors cursor-pointer" data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('designers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                data-testid="dropdown-designers"
              >
                Shopify Designers <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'designers' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[220px]">
                      {designers.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <span className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors cursor-pointer" data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('marketing')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                data-testid="dropdown-marketing"
              >
                Shopify Marketing <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'marketing' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[220px]">
                      {marketing.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <span className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted transition-colors cursor-pointer" data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/blog">
              <span className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer" data-testid="link-blog">
                Blog
              </span>
            </Link>

            <Link href="/reviews">
              <span className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors cursor-pointer" data-testid="link-reviews">
                Reviews
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button data-testid="button-contact" className="bg-primary hover:bg-primary/90 text-white px-6">
                Get In Touch
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Marketing Services</p>
                {services.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span className="block py-2 text-foreground/80" onClick={() => setMobileOpen(false)}>{item.name}</span>
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shopify Designers</p>
                {designers.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span className="block py-2 text-foreground/80" onClick={() => setMobileOpen(false)}>{item.name}</span>
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shopify Marketing</p>
                {marketing.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span className="block py-2 text-foreground/80" onClick={() => setMobileOpen(false)}>{item.name}</span>
                  </Link>
                ))}
              </div>
              <div className="pt-4 space-y-2">
                <Link href="/blog">
                  <span className="block py-2 text-foreground/80" onClick={() => setMobileOpen(false)}>Blog</span>
                </Link>
                <Link href="/reviews">
                  <span className="block py-2 text-foreground/80" onClick={() => setMobileOpen(false)}>Reviews</span>
                </Link>
              </div>
              <Link href="/contact">
                <Button className="w-full mt-4" onClick={() => setMobileOpen(false)}>Get In Touch</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
