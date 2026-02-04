import styles from './Services.module.css';

const services = [
    {
        title: "Cyber Security Consulting",
        desc: "Risk assessments, vulnerability management, penetration testing, and security strategy.",
        icon: "🛡️"
    },
    {
        title: "Digital Forensics & Investigations",
        desc: "Forensic acquisition, analysis, reporting, and expert support for legal and internal cases.",
        icon: "🔍"
    },
    {
        title: "Incident Response & Breach Support",
        desc: "Rapid response to cyber incidents, containment, investigation, and recovery.",
        icon: "⚡"
    },
    {
        title: "Training & Awareness",
        desc: "Cyber security training for organisations, professionals, and academic institutions.",
        icon: "📚"
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className="container">
                <div className={styles.heading}>
                    <h2>Our Expertise</h2>
                    <p>
                        Comprehensive cyber security and digital forensics solutions tailored to your needs.
                    </p>
                </div>
                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardIcon}>{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                            <a href="#contact" className={styles.cardLink}>
                                Find out more →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
