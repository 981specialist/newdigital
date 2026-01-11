import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Accessibility() {
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
              Accessibility Statement
            </h1>
            <p className="text-lg text-white/80">
              Our commitment to digital accessibility for all users.
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
            <h2 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>Our Commitment</h2>
            <p className="text-muted-foreground mb-6">
              JSP Digital Marketing is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility 
              standards to ensure we provide equal access to all users.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>Conformance Status</h2>
            <p className="text-muted-foreground mb-6">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers 
              to improve accessibility for people with disabilities. We strive to conform to WCAG 2.1 level AA standards.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>Accessibility Features</h2>
            <p className="text-muted-foreground mb-4">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Semantic HTML structure for screen reader compatibility</li>
              <li>Keyboard navigation support</li>
              <li>Sufficient color contrast ratios</li>
              <li>Text alternatives for images</li>
              <li>Resizable text without loss of functionality</li>
              <li>Clear and consistent navigation</li>
              <li>Focus indicators for interactive elements</li>
              <li>Descriptive link text</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>Assistive Technologies</h2>
            <p className="text-muted-foreground mb-6">
              Our website is designed to be compatible with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>Known Limitations</h2>
            <p className="text-muted-foreground mb-6">
              While we strive for full accessibility, some content may have limitations. We are actively 
              working to identify and resolve any accessibility issues. If you encounter any problems, 
              please contact us.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>Feedback</h2>
            <p className="text-muted-foreground mb-6">
              We welcome your feedback on the accessibility of the JSP Digital Marketing website. 
              Please let us know if you encounter accessibility barriers:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Email: accessibility@jspdigital.co.uk</li>
              <li>Phone: +44 (0) 123 456 7890</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              We try to respond to accessibility feedback within 5 business days.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8" style={{ fontFamily: 'var(--font-display)' }}>Third-Party Content</h2>
            <p className="text-muted-foreground">
              Please note that our website may link to third-party websites. We are not responsible for 
              the accessibility of third-party content.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
