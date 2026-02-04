import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { CheckCircle, ChevronRight, GraduationCap, Search, Shield, Zap } from 'lucide-react';
import styles from './services.module.css';

export default function ServicesPage() {
    const categories = [
        {
            title: "Vulnerability Assessment & Penetration Testing (VAPT)",
            icon: <Shield size={32} />,
            items: [
                "Web Application Penetration Testing",
                "Mobile Application Security Testing",
                "Network Penetration Testing",
                "API Security Assessment",
                "Cloud Security Assessment",
                "Wireless Network Testing"
            ]
        },
        {
            title: "Digital Forensics Services",
            icon: <Search size={32} />,
            items: [
                "Computer/Disk Forensics",
                "Mobile Device Forensics",
                "Network Forensics",
                "Memory Forensics",
                "Email Forensics",
                "Cloud Forensics",
                "Social Media Investigation"
            ]
        },
        {
            title: "Incident Response",
            icon: <Zap size={32} />,
            items: [
                "24/7 Emergency Response",
                "Breach Investigation",
                "Malware Analysis",
                "Containment & Eradication",
                "Recovery Planning",
                "Post-Incident Review"
            ]
        },
        {
            title: "Compliance & Consulting",
            icon: <CheckCircle size={32} />,
            items: [
                "ISO 27001 Implementation",
                "GDPR Compliance Assessment",
                "Security Policy Development",
                "Risk Assessment",
                "Security Audits",
                "Virtual CISO Services"
            ]
        },
        {
            title: "Training & Certification",
            icon: <GraduationCap size={32} />,
            items: [
                "Corporate Training Programs",
                "Academic Partnerships",
                "Certification Preparation (CEH, CHFI, etc.)",
                "Security Awareness Workshops",
                "Custom Training Solutions"
            ]
        }
    ];

    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroHeading}>Our Services</h1>
                    <p className={styles.heroSubheading}>
                        Comprehensive cyber security solutions tailored to your needs.
                        Protecting your digital assets with expert precision.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.content}>
                <div className="container">
                    {categories.map((cat, index) => (
                        <div key={index} id={cat.title.toLowerCase().replace(/\s+/g, '-')} className={styles.categorySection}>
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryIcon}>
                                    {cat.icon}
                                </div>
                                <h2 className={styles.categoryTitle}>{cat.title}</h2>
                            </div>

                            <div className={styles.serviceGrid}>
                                {cat.items.map((item, i) => (
                                    <div key={i} className={styles.serviceItem}>
                                        <ChevronRight size={20} className={styles.itemIcon} />
                                        <span className={styles.itemText}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
