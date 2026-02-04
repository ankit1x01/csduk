import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import styles from './Internship.module.css';

export default function Internship() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    {/* Left Column: Content */}
                    <div className={styles.content}>
                        <span className={styles.label}>INTERNSHIP PROGRAM</span>
                        <h2 className={styles.heading}>Launch Your Cyber Security Career</h2>

                        <p className={styles.description}>
                            Join our industry-leading internship program, derived from Cyber Secured India's
                            proven excellence. Gain hands-on experience with real-world projects, expert
                            mentorship, and career-ready skills.
                        </p>

                        <div className={styles.highlights}>
                            <div className={styles.listCol}>
                                <h4 className={styles.listTitle}>Training Focus:</h4>
                                <ul className={styles.list}>
                                    <li><Check size={18} className={styles.checkIcon} /> Ethical Hacking & Penetration Testing</li>
                                    <li><Check size={18} className={styles.checkIcon} /> Digital Forensics Investigation</li>
                                    <li><Check size={18} className={styles.checkIcon} /> Cyber Crime Analysis</li>
                                    <li><Check size={18} className={styles.checkIcon} /> Network Security</li>
                                </ul>
                            </div>

                            <div className={styles.listCol}>
                                <h4 className={styles.listTitle}>What You Get:</h4>
                                <ul className={styles.list}>
                                    <li><Check size={18} className={styles.checkIcon} /> Live project experience</li>
                                    <li><Check size={18} className={styles.checkIcon} /> Industry certification prep</li>
                                    <li><Check size={18} className={styles.checkIcon} /> Expert mentorship</li>
                                    <li><Check size={18} className={styles.checkIcon} /> Career placement support</li>
                                </ul>
                            </div>
                        </div>

                        <Link href="/internship" className={styles.ctaButton}>
                            Explore Internship Program <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Right Column: Image Cards */}
                    <div className={styles.visuals}>
                        <div className={styles.imageCard}>
                            <img src="https://picsum.photos/600/400?random=1" alt="Student Success Stories" />
                            <div className={styles.cardOverlay}>
                                <h3>Student Success Stories</h3>
                                <div className={styles.cardArrow}>→</div>
                            </div>
                        </div>

                        <div className={styles.imageCard}>
                            <img src="https://picsum.photos/600/400?random=2" alt="Training Facilities" />
                            <div className={styles.cardOverlay}>
                                <h3>Training Facilities</h3>
                                <div className={styles.cardArrow}>→</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
