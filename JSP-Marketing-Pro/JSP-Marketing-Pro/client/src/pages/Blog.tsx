import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "10 Shopify SEO Strategies That Will Double Your Organic Traffic",
    excerpt: "Discover the proven SEO techniques that top-performing Shopify stores use to dominate search rankings and drive consistent organic traffic.",
    category: "SEO",
    author: "James Parker",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    image: "from-primary to-teal-500"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Shopify Conversion Rate Optimization",
    excerpt: "Learn how to turn more visitors into customers with data-driven CRO strategies specifically designed for Shopify stores.",
    category: "Conversion",
    author: "Sarah Mitchell",
    date: "Dec 10, 2025",
    readTime: "12 min read",
    image: "from-teal-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Google Ads for Shopify: A Complete PPC Setup Guide",
    excerpt: "Step-by-step guide to setting up profitable Google Ads campaigns for your Shopify store, from account structure to optimization.",
    category: "PPC",
    author: "Michael Brown",
    date: "Dec 5, 2025",
    readTime: "15 min read",
    image: "from-blue-500 to-primary"
  },
  {
    id: 4,
    title: "Klaviyo Email Marketing: Best Practices for Shopify",
    excerpt: "Master email automation flows and campaigns that drive repeat purchases and increase customer lifetime value.",
    category: "Email",
    author: "Emily Watson",
    date: "Nov 28, 2025",
    readTime: "10 min read",
    image: "from-purple-500 to-pink-500"
  },
  {
    id: 5,
    title: "How to Speed Up Your Shopify Store for Better Rankings",
    excerpt: "Technical optimization tips to improve your Shopify store's loading speed and provide a better user experience.",
    category: "Performance",
    author: "James Parker",
    date: "Nov 20, 2025",
    readTime: "7 min read",
    image: "from-orange-500 to-red-500"
  },
  {
    id: 6,
    title: "User-Generated Content: The Secret Weapon for Shopify Brands",
    excerpt: "How to leverage UGC to build trust, increase engagement, and boost conversions on your Shopify store.",
    category: "Marketing",
    author: "Sarah Mitchell",
    date: "Nov 15, 2025",
    readTime: "9 min read",
    image: "from-green-500 to-teal-500"
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

export default function Blog() {
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
              Shopify Marketing Blog
            </h1>
            <p className="text-lg text-white/80">
              Expert insights, strategies, and tips to help you grow your Shopify store and increase revenue.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300" data-testid={`card-blog-${post.id}`}>
                  <div className={`h-48 bg-gradient-to-br ${post.image} relative`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-foreground hover:bg-white">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center text-primary font-medium group-hover:gap-2 gap-1 transition-all text-sm">
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
