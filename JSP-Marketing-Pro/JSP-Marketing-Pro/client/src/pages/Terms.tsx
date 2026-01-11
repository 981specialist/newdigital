import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-lg text-white/80">
              Please read these terms carefully before using our services.
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
            <p className="text-muted-foreground mb-6">
              <strong>Last updated:</strong> January 2026
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing or using JSP Digital Marketing's services, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>2. Services</h2>
            <p className="text-muted-foreground mb-4">
              JSP Digital Marketing provides digital marketing services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Shopify SEO services</li>
              <li>PPC advertising management</li>
              <li>Website design and development</li>
              <li>Conversion rate optimization</li>
              <li>Email marketing</li>
              <li>Marketing consultation</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>3. Payment Terms</h2>
            <p className="text-muted-foreground mb-6">
              Payment terms will be outlined in individual service agreements. Generally, we require a deposit 
              before commencing work, with remaining balances due according to the agreed payment schedule.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              Upon full payment, clients own the deliverables created specifically for their project. 
              JSP Digital Marketing retains ownership of proprietary methodologies, tools, and processes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>5. Confidentiality</h2>
            <p className="text-muted-foreground mb-6">
              We maintain strict confidentiality regarding client information and business data. 
              We will not disclose confidential information to third parties without consent.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>6. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              JSP Digital Marketing shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>7. Termination</h2>
            <p className="text-muted-foreground mb-6">
              Either party may terminate services with written notice as specified in the service agreement. 
              Upon termination, the client is responsible for payment of all work completed.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>8. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these terms at any time. We will notify clients of significant 
              changes via email or through our website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>9. Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at legal@jspdigital.co.uk
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
