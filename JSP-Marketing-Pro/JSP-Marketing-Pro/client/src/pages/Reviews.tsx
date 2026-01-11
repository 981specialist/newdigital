import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Bloom Beauty Co.",
    role: "Founder & CEO",
    rating: 5,
    text: "JSP Digital transformed our Shopify store completely. Our conversion rate increased by 47% within just 3 months of working together. The team's expertise in Shopify is unmatched, and their attention to detail is remarkable. I couldn't recommend them more highly!",
    avatar: "SM",
    results: "+47% Conversion Rate"
  },
  {
    id: 2,
    name: "James Crawford",
    company: "Urban Threads",
    role: "Marketing Director",
    rating: 5,
    text: "The SEO work they did was phenomenal. We went from page 3 to ranking in the top 5 for our main keywords. Revenue is up 230% year over year. Their strategic approach to Shopify SEO is exactly what we needed to break through.",
    avatar: "JC",
    results: "+230% Revenue"
  },
  {
    id: 3,
    name: "Emily Watson",
    company: "Gourmet Kitchen",
    role: "Owner",
    rating: 5,
    text: "Professional, responsive, and results-driven. JSP Digital understands Shopify better than anyone we've worked with. They redesigned our entire store and optimized our checkout flow, leading to a significant reduction in cart abandonment.",
    avatar: "EW",
    results: "-35% Cart Abandonment"
  },
  {
    id: 4,
    name: "David Chen",
    company: "TechGear Pro",
    role: "CEO",
    rating: 5,
    text: "Our PPC campaigns were underperforming until we partnered with JSP Digital. They restructured everything and within 60 days, our ROAS went from 2x to 6.5x. Their Google Ads expertise is exceptional.",
    avatar: "DC",
    results: "6.5x ROAS"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    company: "Eco Living Store",
    role: "Founder",
    rating: 5,
    text: "Working with JSP Digital on our Klaviyo setup was a game-changer. Email now contributes 35% of our total revenue. Their automation flows are incredibly sophisticated yet perfectly aligned with our brand.",
    avatar: "LT",
    results: "35% Revenue from Email"
  },
  {
    id: 6,
    name: "Michael Roberts",
    company: "Fitness Fuel",
    role: "Managing Director",
    rating: 5,
    text: "The speed optimization work alone was worth it. Our page load time went from 6 seconds to under 2 seconds. Combined with their conversion work, we've seen a 180% increase in mobile conversions.",
    avatar: "MR",
    results: "+180% Mobile Conversions"
  },
  {
    id: 7,
    name: "Amanda Foster",
    company: "Artisan Home",
    role: "Creative Director",
    rating: 5,
    text: "JSP Digital's design team created a stunning store that perfectly captures our brand. The attention to UX and the seamless shopping experience has made a huge difference in our average order value.",
    avatar: "AF",
    results: "+52% AOV"
  },
  {
    id: 8,
    name: "Robert Kim",
    company: "Sports Elite",
    role: "E-commerce Manager",
    rating: 5,
    text: "From strategy to execution, JSP Digital exceeded our expectations. Their holistic approach to Shopify marketing helped us scale from £50k to £200k monthly revenue in under a year.",
    avatar: "RK",
    results: "4x Monthly Revenue"
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

export default function Reviews() {
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
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Client Reviews
            </h1>
            <p className="text-lg text-white/80">
              Hear directly from the Shopify merchants who have grown their businesses with our help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 text-center bg-primary/5 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </Card>
            <Card className="p-6 text-center bg-primary/5 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>150+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </Card>
            <Card className="p-6 text-center bg-primary/5 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>5.0</div>
              <div className="text-muted-foreground">Average Rating</div>
            </Card>
            <Card className="p-6 text-center bg-primary/5 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>£1M+</div>
              <div className="text-muted-foreground">Revenue Generated</div>
            </Card>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {reviews.map((review) => (
              <motion.div key={review.id} variants={fadeInUp}>
                <Card className="h-full p-6 lg:p-8 relative" data-testid={`card-review-${review.id}`}>
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary">{review.avatar}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.role}, {review.company}</div>
                      </div>
                    </div>
                    <div className="hidden sm:block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {review.results}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to become our next success story?
            </p>
            <Link href="/contact">
              <Button size="lg" data-testid="button-reviews-contact">
                Start Your Growth Journey
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
