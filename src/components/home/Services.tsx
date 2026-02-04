import { ArrowRight, GraduationCap, Search, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            icon: <Shield size={32} />,
            title: "Cyber Security Consulting",
            description: "Risk assessments, vulnerability management, penetration testing, and security strategy development for organisations of all sizes.",
            link: "/services#consulting"
        },
        {
            icon: <Search size={32} />,
            title: "Digital Forensics & Investigations",
            description: "Forensic acquisition, analysis, reporting, and expert support for legal proceedings and internal investigations.",
            link: "/services#forensics"
        },
        {
            icon: <Zap size={32} />,
            title: "Incident Response & Breach Support",
            description: "Rapid response to cyber incidents, containment strategies, thorough investigation, and complete recovery support.",
            link: "/services#incident-response"
        },
        {
            icon: <GraduationCap size={32} />,
            title: "Training & Awareness",
            description: "Cyber security training programmes for organisations, IT professionals, and academic institutions across the UK.",
            link: "/services#training"
        }
    ];

    return (
        <section className={styles.section} id="services">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Our Expertise</h2>
                    <p className={styles.subheading}>
                        Comprehensive cyber security and digital forensics solutions for UK organisations
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <Link href={service.link} className={styles.cardLink}>
                                Find out more <ArrowRight size={16} className={styles.linkIcon} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
