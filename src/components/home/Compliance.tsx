import { Check } from 'lucide-react';
import styles from './Compliance.module.css';

export default function Compliance() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    {/* Content Column */}
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Standards & Best Practices</h2>
                        <p className={styles.intro}>
                            Our services are aligned with recognised industry frameworks and best practices, including:
                        </p>

                        <ul className={styles.list}>
                            <li>
                                <Check size={20} className={styles.check} />
                                <span>ISO/IEC 27001 principles</span>
                            </li>
                            <li>
                                <Check size={20} className={styles.check} />
                                <span>NIST Cyber Security Framework</span>
                            </li>
                            <li>
                                <Check size={20} className={styles.check} />
                                <span>UK GDPR & Data Protection Act considerations</span>
                            </li>
                            <li>
                                <Check size={20} className={styles.check} />
                                <span>ACPO & digital forensic best-practice guidelines</span>
                            </li>
                        </ul>
                    </div>

                    {/* Badges Column */}
                    <div className={styles.badges}>
                        <div className={styles.badgeBox}>
                            <span className={styles.badgeText}>ISO 27001</span>
                            <div className={styles.glowLine}></div>
                        </div>
                        <div className={styles.badgeBox}>
                            <span className={styles.badgeText}>NIST</span>
                            <div className={styles.glowLine}></div>
                        </div>
                        <div className={styles.badgeBox}>
                            <span className={styles.badgeText}>GDPR</span>
                            <div className={styles.glowLine}></div>
                        </div>
                        <div className={styles.badgeBox}>
                            <span className={styles.badgeText}>ACPO</span>
                            <div className={styles.glowLine}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
