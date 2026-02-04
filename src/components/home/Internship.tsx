import styles from './Internship.module.css';

export default function Internship() {
    return (
        <section id="internship" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Join the CSDUK Internship Program</h2>
                        <p className={styles.subtitle}>
                            Bridge the gap between theoretical knowledge and practical skills with our
                            structured 3-month program.
                        </p>

                        <div className={styles.card}>
                            <div className={styles.details}>
                                <div className={styles.detailItem}>
                                    <h4>Duration</h4>
                                    <p>3 Months</p>
                                </div>
                                <div className={styles.detailItem}>
                                    <h4>Format</h4>
                                    <p>Hands-on</p>
                                </div>
                                <div className={styles.detailItem}>
                                    <h4>Who Can Apply</h4>
                                    <p>Students & Professionals</p>
                                </div>
                            </div>

                            <p className={styles.description}>
                                Work alongside industry professionals on real-world projects.
                                Gain practical experience in ethical hacking, digital forensics,
                                malware analysis, and OSINT investigations.
                            </p>

                            <div className={styles.grid}>
                                <div className={styles.list}>
                                    <h4>Key Highlights</h4>
                                    <ul>
                                        <li>Hands-on Labs (Ethical Hacking, Forensics)</li>
                                        <li>Live Simulated Investigations</li>
                                        <li>Industry Mentorship & Networking</li>
                                        <li>Valid Certification</li>
                                    </ul>
                                </div>
                                <div className={styles.list}>
                                    <h4>Focus Areas</h4>
                                    <ul>
                                        <li>Ethical Hacking (VAPT)</li>
                                        <li>Digital Forensics</li>
                                        <li>Malware Analysis</li>
                                        <li>OSINT Investigations</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.cta}>
                                <a href="#contact" className={styles.ctaButton}>Apply Now</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageCards}>
                        <div className={styles.imageCard}>
                            <img src="https://picsum.photos/800/600?random=1" alt="Partner" />
                            <div className={styles.imageCardOverlay}>
                                <h4>Our Partners</h4>
                            </div>
                            <div className={styles.imageCardArrow}>→</div>
                        </div>
                        <div className={styles.imageCard}>
                            <img src="https://picsum.photos/800/600?random=2" alt="Success Story" />
                            <div className={styles.imageCardOverlay}>
                                <h4>Success Stories</h4>
                            </div>
                            <div className={styles.imageCardArrow}>→</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
