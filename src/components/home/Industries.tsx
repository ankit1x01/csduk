import { Building2, GraduationCap, Landmark, Scale, Users } from 'lucide-react';
import styles from './Industries.module.css';

export default function Industries() {
    const industries = [
        {
            icon: <Building2 size={24} />,
            name: "Small & Medium Enterprises (SMEs)"
        },
        {
            icon: <Landmark size={24} />,
            name: "Corporate Organisations"
        },
        {
            icon: <GraduationCap size={24} />,
            name: "Educational Institutions"
        },
        {
            icon: <Scale size={24} />,
            name: "Legal Professionals & Investigations"
        },
        {
            icon: <Users size={24} />,
            name: "Non-Profit & Public Sector Organisations"
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Who We Work With</h2>

                <div className={styles.grid}>
                    {industries.map((ind, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {ind.icon}
                            </div>
                            <span className={styles.name}>{ind.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
