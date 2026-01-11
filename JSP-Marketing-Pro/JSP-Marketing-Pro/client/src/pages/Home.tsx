import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Search, 
  MousePointer, 
  Palette, 
  Zap, 
  TrendingUp, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ShoppingBag,
  Mail
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Search,
    title: "Shopify SEO Services",
    description: "Dominate search rankings and drive organic traffic to your Shopify store with proven SEO strategies.",
    href: "/services/seo"
  },
  {
    icon: MousePointer,
    title: "Shopify PPC Services",
    description: "Maximize ROI with targeted Google and Meta ads campaigns managed by certified specialists.",
    href: "/services/ppc"
  },
  {
    icon: Palette,
    title: "Shopify Website Design",
    description: "Stunning, conversion-optimized storefronts that turn visitors into loyal customers.",
    href: "/design/website"
  },
  {
    icon: Zap,
    title: "Speed Optimisation",
    description: "Lightning-fast load times that improve user experience and boost your search rankings.",
    href: "/services/speed"
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimisation",
    description: "Data-driven CRO strategies that increase your average order value and conversion rate.",
    href: "/services/cro"
  },
  {
    icon: Users,
    title: "Shopify Consultation",
    description: "Expert guidance to help you make strategic decisions and scale your ecommerce business.",
    href: "/marketing/consultant"
  },
];

const stats = [
  { value: "£1M+", label: "Revenue Generated" },
  { value: "150+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const reviews = [
  {
    name: "Sarah Mitchell",
    company: "Bloom Beauty Co.",
    rating: 5,
    text: "JSP Digital transformed our Shopify store. Our conversion rate increased by 47% within 3 months. Absolutely incredible results!",
    avatar: "SM"
  },
  {
    name: "James Crawford",
    company: "Urban Threads",
    rating: 5,
    text: "The SEO work they did was phenomenal. We went from page 3 to ranking in the top 5 for our main keywords. Revenue is up 230%.",
    avatar: "JC"
  },
  {
    name: "Emily Watson",
    company: "Gourmet Kitchen",
    rating: 5,
    text: "Professional, responsive, and results-driven. JSP Digital understands Shopify better than anyone we've worked with.",
    avatar: "EW"
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ShoppingBag className="w-4 h-4 text-primary" />
              <span className="text-white/90 text-sm font-medium">Shopify Marketing Experts Since 2020</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Grow Your Shopify Store with{" "}
              <span className="text-gradient">Expert Marketing</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              We've helped ecommerce brands generate over £1 million in revenue. From SEO to PPC, 
              website design to conversion optimisation — we're your complete Shopify growth partner.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg" data-testid="button-hero-contact">
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/marketing/case-study">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg" data-testid="button-hero-case-study">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Our Shopify Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive ecommerce marketing solutions designed to scale your Shopify business.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={service.href}>
                  <Card className="group h-full p-6 lg:p-8 bg-card hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/30" data-testid={`card-service-${index}`}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Why Choose JSP Digital Marketing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Since 2020, we've been exclusively focused on helping Shopify merchants succeed. 
                Our specialized expertise means you get a partner who truly understands your platform and industry.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Shopify-exclusive agency with deep platform expertise",
                  "Proven track record with £1M+ revenue generated",
                  "Transparent reporting and regular communication",
                  "Certified Shopify Partners and Google Ads specialists",
                  "Full-service offering from design to marketing",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact">
                <Button className="mt-8" size="lg" data-testid="button-why-choose-contact">
                  Book a Free Consultation
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-teal-500/10 rounded-2xl p-8 lg:p-12">
                <div className="bg-card rounded-xl shadow-xl p-6 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Revenue Growth</div>
                      <div className="text-green-600 font-bold text-2xl">+147%</div>
                    </div>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-primary to-teal-500 rounded-full" />
                  </div>
                </div>
                
                <div className="bg-card rounded-xl shadow-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Conversion Rate</div>
                      <div className="text-blue-600 font-bold text-2xl">4.8%</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Industry average: 1.4%
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what Shopify merchants are saying about working with us.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {reviews.map((review, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full p-6 lg:p-8 bg-card" data-testid={`card-review-${index}`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">{review.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.company}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button variant="outline" size="lg" data-testid="button-view-all-reviews">
                View All Reviews
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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
            <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to Grow Your Shopify Store?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Book a free strategy call with our Shopify experts. We'll analyze your store and 
              create a customized growth plan — no obligations, just actionable insights.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90 px-10 py-6 text-lg" data-testid="button-cta-contact">
                Get Your Free Strategy Call
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
