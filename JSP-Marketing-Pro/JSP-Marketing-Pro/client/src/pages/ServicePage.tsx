import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  MousePointer, 
  Mail, 
  Video, 
  Palette, 
  Code, 
  Store, 
  Users, 
  FileText, 
  Target, 
  MessageSquare 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceData: Record<string, {
  title: string;
  description: string;
  icon: any;
  features: string[];
  benefits: { title: string; description: string }[];
}> = {
  "services/seo": {
    title: "Shopify SEO Services",
    description: "Dominate search rankings and drive consistent organic traffic to your Shopify store with our proven SEO strategies.",
    icon: Search,
    features: [
      "Comprehensive SEO audit and strategy",
      "Keyword research and optimization",
      "Technical SEO improvements",
      "Content optimization and creation",
      "Link building and authority development",
      "Monthly reporting and analytics"
    ],
    benefits: [
      { title: "Increased Organic Traffic", description: "Drive more qualified visitors to your store without paying for ads." },
      { title: "Higher Search Rankings", description: "Appear at the top of Google for your target keywords." },
      { title: "Better ROI", description: "SEO provides compounding returns over time, unlike paid advertising." }
    ]
  },
  "services/ppc": {
    title: "Shopify PPC Services",
    description: "Maximize your advertising ROI with expertly managed Google Ads and Meta campaigns tailored for Shopify.",
    icon: MousePointer,
    features: [
      "Google Shopping campaign management",
      "Search and display advertising",
      "Meta (Facebook & Instagram) ads",
      "Remarketing and audience targeting",
      "A/B testing and optimization",
      "Detailed ROI reporting"
    ],
    benefits: [
      { title: "Immediate Traffic", description: "Start driving qualified traffic to your store right away." },
      { title: "Scalable Growth", description: "Increase ad spend profitably as campaigns optimize." },
      { title: "Precise Targeting", description: "Reach your ideal customers at the right moment." }
    ]
  },
  "services/klaviyo": {
    title: "Klaviyo Email Marketing Experts",
    description: "Transform your email marketing with sophisticated Klaviyo automation that drives repeat purchases and loyalty.",
    icon: Mail,
    features: [
      "Full Klaviyo setup and integration",
      "Automated flow creation",
      "Campaign design and execution",
      "Segmentation and personalization",
      "SMS marketing integration",
      "Performance analytics and optimization"
    ],
    benefits: [
      { title: "Increased Customer Lifetime Value", description: "Turn one-time buyers into loyal repeat customers." },
      { title: "Automated Revenue", description: "Earn money while you sleep with automated email flows." },
      { title: "Better Engagement", description: "Personalized emails that resonate with your audience." }
    ]
  },
  "services/ugc": {
    title: "Shopify UGC Services",
    description: "Leverage authentic user-generated content to build trust and increase conversions on your Shopify store.",
    icon: Video,
    features: [
      "UGC strategy development",
      "Creator sourcing and management",
      "Content curation and optimization",
      "Social proof integration",
      "Review collection campaigns",
      "Influencer partnership management"
    ],
    benefits: [
      { title: "Authentic Social Proof", description: "Build trust with real customer content." },
      { title: "Higher Conversions", description: "UGC can increase conversions by up to 29%." },
      { title: "Cost-Effective Content", description: "Get quality content without expensive production." }
    ]
  },
  "design/website": {
    title: "Shopify Website Design",
    description: "Stunning, conversion-optimized Shopify stores that captivate visitors and turn them into loyal customers.",
    icon: Palette,
    features: [
      "Custom Shopify theme design",
      "Mobile-first responsive design",
      "Conversion-optimized layouts",
      "Brand identity integration",
      "Product page optimization",
      "Checkout optimization"
    ],
    benefits: [
      { title: "Professional Brand Image", description: "Stand out from competitors with a unique design." },
      { title: "Better User Experience", description: "Intuitive navigation that guides customers to purchase." },
      { title: "Higher Conversions", description: "Design that's optimized for maximum sales." }
    ]
  },
  "design/developers": {
    title: "Shopify Developers",
    description: "Expert Shopify development services for custom functionality, theme modifications, and app integrations.",
    icon: Code,
    features: [
      "Custom theme development",
      "Theme customization and modifications",
      "App development and integration",
      "Liquid and JavaScript expertise",
      "Performance optimization",
      "API integrations"
    ],
    benefits: [
      { title: "Custom Functionality", description: "Build features unique to your business needs." },
      { title: "Seamless Integrations", description: "Connect all your tools and systems smoothly." },
      { title: "Technical Excellence", description: "Clean, maintainable code that scales with you." }
    ]
  },
  "design/examples": {
    title: "Shopify Store Examples",
    description: "Explore our portfolio of successful Shopify stores we've designed and developed for clients across industries.",
    icon: Store,
    features: [
      "Fashion and apparel stores",
      "Beauty and cosmetics brands",
      "Food and beverage companies",
      "Home and lifestyle products",
      "Electronics and tech stores",
      "Health and wellness brands"
    ],
    benefits: [
      { title: "Proven Track Record", description: "See real examples of our design work." },
      { title: "Industry Expertise", description: "Experience across diverse sectors." },
      { title: "Inspiration for Your Store", description: "Ideas for your own Shopify transformation." }
    ]
  },
  "marketing/experts": {
    title: "Shopify Marketing Experts",
    description: "Full-service Shopify marketing expertise to grow your ecommerce business across all channels.",
    icon: Users,
    features: [
      "Multi-channel marketing strategy",
      "Brand development and positioning",
      "Content marketing",
      "Social media marketing",
      "Influencer partnerships",
      "Performance analytics"
    ],
    benefits: [
      { title: "Holistic Growth", description: "A unified strategy across all marketing channels." },
      { title: "Expert Guidance", description: "Years of Shopify-specific experience." },
      { title: "Measurable Results", description: "Data-driven decisions for continuous improvement." }
    ]
  },
  "marketing/case-study": {
    title: "Shopify Case Studies",
    description: "Detailed case studies showing how we've helped Shopify merchants achieve remarkable growth.",
    icon: FileText,
    features: [
      "Detailed strategy breakdowns",
      "Before and after metrics",
      "Implementation timelines",
      "Challenge and solution analysis",
      "Key learnings and insights",
      "Client testimonials"
    ],
    benefits: [
      { title: "Proof of Results", description: "Real numbers from real clients." },
      { title: "Learn Our Process", description: "Understand how we approach each project." },
      { title: "Set Expectations", description: "Know what results are possible for your store." }
    ]
  },
  "marketing/seo-experts": {
    title: "Shopify SEO Experts",
    description: "Specialized SEO professionals with deep expertise in Shopify's unique technical requirements.",
    icon: Target,
    features: [
      "Shopify-specific SEO knowledge",
      "Technical SEO mastery",
      "E-commerce SEO best practices",
      "Schema markup implementation",
      "International SEO",
      "Local SEO for retail"
    ],
    benefits: [
      { title: "Platform Expertise", description: "We know Shopify's SEO nuances inside out." },
      { title: "E-commerce Focus", description: "Strategies designed for product-based businesses." },
      { title: "Sustainable Rankings", description: "White-hat techniques for long-term success." }
    ]
  },
  "marketing/consultant": {
    title: "Shopify Consultant",
    description: "Strategic consultation to help you make the right decisions and scale your Shopify business effectively.",
    icon: MessageSquare,
    features: [
      "Business strategy development",
      "Technology stack recommendations",
      "Growth roadmap creation",
      "Competitive analysis",
      "Operations optimization",
      "Team and resource planning"
    ],
    benefits: [
      { title: "Strategic Clarity", description: "A clear path forward for your business." },
      { title: "Avoid Costly Mistakes", description: "Learn from our experience with hundreds of stores." },
      { title: "Accelerated Growth", description: "Make better decisions, faster." }
    ]
  }
};

export default function ServicePage() {
  const [, params] = useRoute("/:category/:slug");
  const path = params ? `${params.category}/${params.slug}` : "";
  const service = serviceData[path];

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold">Service not found</h1>
          <Link href="/">
            <Button className="mt-4">Go Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

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
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8">
              <Icon className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              {service.title}
            </h1>
            <p className="text-lg text-white/80 mb-10">
              {service.description}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90" data-testid="button-service-contact">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                What's Included
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our comprehensive service includes everything you need to succeed.
              </p>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Key Benefits
              </h2>
              {service.benefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Book a free consultation call to discuss how we can help grow your Shopify store.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 px-10" data-testid="button-service-cta">
                Book Your Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
