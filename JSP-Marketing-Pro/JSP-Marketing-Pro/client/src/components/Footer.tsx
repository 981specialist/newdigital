import { Link } from "wouter";
import { Facebook, Twitter } from "lucide-react";

const footerLinks = {
  marketingServices: {
    title: "Marketing Services",
    links: [
      { name: "Shopify SEO Services", href: "/services/seo" },
      { name: "Shopify PPC Services", href: "/services/ppc" },
      { name: "Klaviyo Experts", href: "/services/klaviyo" },
      { name: "Shopify UGC Services", href: "/services/ugc" },
    ],
  },
  shopifyDesigners: {
    title: "Shopify Designers",
    links: [
      { name: "Shopify Website Design", href: "/design/website" },
      { name: "Shopify Developers", href: "/design/developers" },
      { name: "Shopify Store Examples", href: "/design/examples" },
    ],
  },
  shopifyMarketing: {
    title: "Shopify Marketing",
    links: [
      { name: "Shopify Marketing Experts", href: "/marketing/experts" },
      { name: "Shopify Case Study", href: "/marketing/case-study" },
      { name: "Shopify SEO Experts", href: "/marketing/seo-experts" },
      { name: "Shopify Consultant", href: "/marketing/consultant" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
      { name: "Reviews", href: "/reviews" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Legal", href: "/legal" },
      { name: "Terms", href: "/terms" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-teal-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>J</span>
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  JSP Digital
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Shopify marketing experts helping ecommerce brands grow since 2020.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {footerLinks.marketingServices.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.marketingServices.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer" data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {footerLinks.shopifyDesigners.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.shopifyDesigners.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer" data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {footerLinks.shopifyMarketing.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.shopifyMarketing.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer" data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {footerLinks.company.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer" data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {footerLinks.legal.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-white text-sm transition-colors cursor-pointer" data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} JSP Digital Marketing. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Generating over £1 million in revenue for our clients since 2020.
          </p>
        </div>
      </div>
    </footer>
  );
}
