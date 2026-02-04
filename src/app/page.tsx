import Hero from '@/components/home/Hero';
import Internship from '@/components/home/Internship';
import Services from '@/components/home/Services';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* About Section - Who We Are */}
      <section id="about" className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>Who We Are</h2>

              <div className={styles.aboutText}>
                <p>
                  <strong>Cyber Security & Digital Forensics UK</strong> is a professional cyber security
                  services provider specialising in defensive security, digital forensics, and incident response.
                </p>
                <p>
                  We help organisations identify vulnerabilities, respond to cyber incidents, preserve digital
                  evidence, and strengthen their security posture in line with UK and international standards.
                </p>
                <p>
                  Our approach combines technical expertise, investigative accuracy, and practical risk
                  management — ensuring security solutions that are not only effective, but legally and
                  operationally sound.
                </p>
              </div>
            </div>

            <div className={styles.aboutCards}>
              <div className={styles.aboutImageCard}>
                <img src="https://picsum.photos/800/600?random=5" alt="Our Partners" />
                <div className={styles.aboutImageCardContent}>
                  <h4>Our Partners</h4>
                </div>
                <div className={styles.aboutImageCardArrow}>→</div>
              </div>
              <div className={styles.aboutImageCard}>
                <img src="https://picsum.photos/800/600?random=6" alt="The CSDUK Review" />
                <div className={styles.aboutImageCardContent}>
                  <h4>The CSDUK Review</h4>
                </div>
                <div className={styles.aboutImageCardArrow}>→</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteWrapper}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>
            As a growing organisation, we want to build the company on the right footing by investing in
            the right digital security technologies at the right time. CSDUK has provided us fantastic support
            and advice to enable us to stride towards our ambition of developing a secure, client-focused,
            high-quality service.
          </p>
          <div className={styles.quoteAuthor}>
            <span className={styles.quoteLine}></span>
            <span className={styles.quoteAuthorText}>Security Director, UK Enterprise</span>
          </div>
        </div>
      </section>

      <Internship />

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className={styles.whyChooseSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose Cyber Security & Digital Forensics UK</h2>
          <div className={styles.whyChooseGrid}>
            {[
              { icon: "🇬🇧", text: "UK-focused cyber security and forensic expertise" },
              { icon: "📋", text: "Evidence-driven and legally defensible methodologies" },
              { icon: "📊", text: "Clear reporting for technical and non-technical stakeholders" },
              { icon: "🔒", text: "Confidential handling of sensitive cases and data" },
              { icon: "💼", text: "Practical, real-world experience across security and investigations" }
            ].map((point, i) => (
              <div key={i} className={styles.whyChooseCard}>
                <span className={styles.whyChooseIcon}>{point.icon}</span>
                <p className={styles.whyChooseText}>{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section id="industries" className={styles.industriesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Who We Work With</h2>
          <div className={styles.industriesGrid}>
            {[
              { name: "Small & Medium Enterprises (SMEs)", icon: "🏢" },
              { name: "Corporate Organisations", icon: "🏛️" },
              { name: "Educational Institutions", icon: "🎓" },
              { name: "Legal Professionals & Investigations", icon: "⚖️" },
              { name: "Non-Profit & Public Sector Organisations", icon: "🤝" }
            ].map((ind, i) => (
              <div key={i} className={styles.industryCard}>
                <span className={styles.industryIcon}>{ind.icon}</span>
                <span className={styles.industryName}>{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards Section */}
      <section id="compliance" className={styles.complianceSection}>
        <div className="container">
          <div className={styles.complianceWrapper}>
            <div className={styles.complianceContent}>
              <h2 className={styles.sectionTitle}>Standards & Best Practices</h2>
              <p className={styles.complianceText}>
                Our services are aligned with recognised industry frameworks and best practices, including:
              </p>
              <ul className={styles.complianceList}>
                <li><span className={styles.complianceCheck}>✓</span> ISO/IEC 27001 principles</li>
                <li><span className={styles.complianceCheck}>✓</span> NIST Cyber Security Framework</li>
                <li><span className={styles.complianceCheck}>✓</span> UK GDPR & Data Protection Act considerations</li>
                <li><span className={styles.complianceCheck}>✓</span> ACPO & digital forensic best-practice guidelines</li>
              </ul>
            </div>
            <div className={styles.complianceLogos}>
              <div className={styles.complianceBadge}>ISO 27001</div>
              <div className={styles.complianceBadge}>NIST</div>
              <div className={styles.complianceBadge}>GDPR</div>
              <div className={styles.complianceBadge}>ACPO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaWrapper}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaHeading}>Secure Your Digital Assets Today</h2>
              <p className={styles.ctaText}>
                Whether you need cyber security expertise, forensic investigation support,
                or professional training — we're here to help.
              </p>
            </div>
            <a href="mailto:contact@csduk.co.uk" className={styles.ctaButton}>
              Contact Us for a Confidential Discussion
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
