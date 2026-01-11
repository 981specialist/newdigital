import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Legal() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Legal Information
            </h1>
            <p className="text-lg text-white/80">
              Important legal information about JSP Digital Marketing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>Company Information</h2>
            <p className="text-muted-foreground mb-6">
              JSP Digital Marketing is a digital marketing agency specializing in Shopify ecommerce solutions. 
              Founded in 2020, we are registered and operating in the United Kingdom.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>Privacy Policy</h2>
            <p className="text-muted-foreground mb-4">
              We take your privacy seriously. This privacy policy describes how we collect, use, and protect your personal information.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-2">Information We Collect</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Business information (company name, website URL)</li>
              <li>Communication records</li>
              <li>Website usage data through cookies</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground mb-2">How We Use Your Information</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>To provide our services</li>
              <li>To communicate with you about your project</li>
              <li>To improve our services</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Our website uses cookies to enhance your browsing experience. By continuing to use our site, 
              you consent to the use of cookies in accordance with our cookie policy.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>Contact</h2>
            <p className="text-muted-foreground">
              For any legal inquiries, please contact us at legal@jspdigital.co.uk
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
