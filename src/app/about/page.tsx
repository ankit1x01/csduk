import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import styles from './about.module.css';

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.breadcrumb}>
                            <Link href="/">Home</Link>
                            <span>›</span>
                            <span>About Us</span>
                        </div>
                        <h1 className={styles.heroTitle}>About CSDF UK</h1>
                        <p className={styles.heroSubtitle}>
                            Leading the UK&apos;s cyber security and digital forensics initiatives
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className={styles.aboutSection}>
                <div className="container">
                    <div className={styles.aboutWrapper}>
                        <div className={styles.aboutContent}>
                            <h2 className={styles.sectionTitle}>Who We Are</h2>

                            <div className={styles.aboutText}>
                                <p>
                                    <strong>Cyber Security and Digital Forensics UK Ltd.</strong> is a professional cyber security
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
                                <img src="/team-meeting.png" alt="Our Team" />
                                <div className={styles.aboutImageCardContent}>
                                    <h4>Our Team</h4>
                                </div>
                                <div className={styles.aboutImageCardArrow}>→</div>
                            </div>
                            <div className={styles.aboutImageCard}>
                                <img src="/uk-operations.png" alt="UK Operations" />
                                <div className={styles.aboutImageCardContent}>
                                    <h4>UK Operations</h4>
                                </div>
                                <div className={styles.aboutImageCardArrow}>→</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className={styles.whyChooseSection}>
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

            {/* Compliance Section */}
            <section className={styles.complianceSection}>
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

            {/* Industries Section */}
            <section className={styles.industriesSection}>
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

            <Footer />
        </main>
    );
}
