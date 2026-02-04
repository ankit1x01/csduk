import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    {/* Content Column */}
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Who We Are</h2>

                        <div className={styles.textBlock}>
                            <p>
                                Cyber Security & Digital Forensics UK is a professional cyber security services provider
                                specialising in defensive security, digital forensics, and incident response.
                            </p>
                            <p>
                                We help organisations identify vulnerabilities, respond to cyber incidents, preserve
                                digital evidence, and strengthen their security posture in line with UK and international standards.
                            </p>
                            <p>
                                Our approach combines technical expertise, investigative accuracy, and practical risk
                                management — ensuring security solutions that are not only effective, but legally and operationally sound.
                            </p>
                        </div>

                        <Link href="/about" className={styles.link}>
                            Learn more about us <ArrowRight size={18} className={styles.linkIcon} />
                        </Link>
                    </div>

                    {/* Image Cards Column */}
                    <div className={styles.images}>
                        {/* Card 1 */}
                        <div className={styles.imageCard}>
                            <img src="/team-meeting.png" alt="Our Team" />
                            <div className={styles.imageOverlay}>
                                <h3>Our Team</h3>
                                <div className={styles.arrowBox}>→</div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.imageCard}>
                            <img src="/uk-operations.png" alt="UK Operations" />
                            <div className={styles.imageOverlay}>
                                <h3>UK Operations</h3>
                                <div className={styles.arrowBox}>→</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
