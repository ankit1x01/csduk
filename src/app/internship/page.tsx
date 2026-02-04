import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { CheckCircle, Code, Globe, HardDrive, Network, ShieldAlert, Terminal } from 'lucide-react';
import styles from './internship.module.css';

export default function InternshipPage() {
    const domains = [
        {
            title: "Ethical Hacking",
            icon: <ShieldAlert size={28} />,
            duration: "4-8 Weeks",
            skills: "Penetration testing, vulnerability assessment, exploit development",
            tools: "Kali Linux, Burp Suite, Metasploit, Nmap"
        },
        {
            title: "Digital Forensics",
            icon: <HardDrive size={28} />,
            duration: "4-8 Weeks",
            skills: "Evidence acquisition, analysis, reporting",
            tools: "FTK, EnCase, Autopsy, Volatility"
        },
        {
            title: "Cyber Crime Investigation",
            icon: <Terminal size={28} />, // Representative
            duration: "4-6 Weeks",
            skills: "Case analysis, evidence handling, legal procedures",
            focus: "UK cyber crime laws and procedures"
        },
        {
            title: "Web Application Security",
            icon: <Globe size={28} />,
            duration: "4-6 Weeks",
            skills: "OWASP Top 10, secure coding, code review",
            tools: "Burp Suite, OWASP ZAP, SQLMap"
        },
        {
            title: "Network Security",
            icon: <Network size={28} />,
            duration: "4-6 Weeks",
            skills: "Firewall configuration, IDS/IPS, network monitoring",
            tools: "Wireshark, Snort, pfSense"
        },
        {
            title: "Python for Security",
            icon: <Code size={28} />,
            duration: "4-6 Weeks",
            skills: "Security scripting, automation, tool development",
            projects: "Build custom security tools"
        }
    ];

    const benefits = [
        "Live project experience",
        "Industry-recognized certification preparation",
        "Expert mentorship from professionals",
        "Portfolio development",
        "Career placement assistance",
        "Flexible online/hybrid options"
    ];

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroHeading}>Cyber Security Internship Program</h1>
                    <p className={styles.heroSubheading}>
                        Gain real-world experience with industry experts
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.overview}>
                <div className="container">
                    <p className={styles.overviewText}>
                        Our internship program, developed from Cyber Secured India's proven training methodology,
                        provides hands-on experience in cutting-edge cyber security and digital forensics.
                    </p>
                </div>
            </section>

            {/* Domains Grid */}
            <section className={styles.domains}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Internship Domains</h2>

                    <div className={styles.grid}>
                        {domains.map((domain, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardTitle}>{domain.title}</div>
                                    <span className={styles.durationBadge}>{domain.duration}</span>
                                </div>

                                <div className={styles.cardSection}>
                                    <span className={styles.cardLabel}>Key Skills</span>
                                    <p className={styles.cardText}>{domain.skills}</p>
                                </div>

                                {domain.tools && (
                                    <div className={styles.cardSection}>
                                        <span className={styles.cardLabel}>Tools</span>
                                        <p className={styles.cardText}>{domain.tools}</p>
                                    </div>
                                )}

                                {domain.focus && (
                                    <div className={styles.cardSection}>
                                        <span className={styles.cardLabel}>Focus</span>
                                        <p className={styles.cardText}>{domain.focus}</p>
                                    </div>
                                )}

                                {domain.projects && (
                                    <div className={styles.cardSection}>
                                        <span className={styles.cardLabel}>Projects</span>
                                        <p className={styles.cardText}>{domain.projects}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className={styles.benefits}>
                <div className="container">
                    <h2 className={styles.benefitsTitle}>Program Benefits</h2>

                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, i) => (
                            <div key={i} className={styles.benefitItem}>
                                <CheckCircle size={24} className={styles.benefitIcon} />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.ctaContainer}>
                        <a href="/contact" className={styles.applyButton}>Apply Now</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
