import { BarChart, Briefcase, FileCheck, Lock, MapPin } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
    const features = [
        {
            icon: <MapPin size={28} />,
            text: "UK-focused cyber security and forensic expertise"
        },
        {
            icon: <FileCheck size={28} />,
            text: "Evidence-driven and legally defensible methodologies"
        },
        {
            icon: <BarChart size={28} />,
            text: "Clear reporting for technical and non-technical stakeholders"
        },
        {
            icon: <Lock size={28} />,
            text: "Confidential handling of sensitive cases and data"
        },
        {
            icon: <Briefcase size={28} />,
            text: "Practical, real-world experience across security and investigations"
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Why Choose Cyber Security & Digital Forensics UK</h2>
                    <div className={styles.accentLine}></div>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <p className={styles.text}>{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
