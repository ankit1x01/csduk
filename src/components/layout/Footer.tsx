import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <div className={styles.brandLogo}>
                        <h3>CSDUK</h3>
                    </div>
                    <p className={styles.brandDescription}>
                        Cyber Security & Digital Forensics UK is a national initiative backed by industry leaders.
                        We connect UK organisations to the <a href="#services">digital tools</a>, <a href="#services">leadership</a>,
                        and skills they need to drive sustainable security growth.
                    </p>
                </div>

                <div className={styles.top}>
                    <div className={styles.links}>
                        <div className={styles.col}>
                            <h4>Key Links</h4>
                            <ul>
                                <li><a href="#services">Our Services</a></li>
                                <li><a href="#internship">Internship Program</a></li>
                                <li><a href="#about">Case Studies</a></li>
                                <li><a href="#contact">Events</a></li>
                                <li><a href="#contact">Resources</a></li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h4>About</h4>
                            <ul>
                                <li><a href="#about">What is CSDUK?</a></li>
                                <li><a href="#about">Our Approach</a></li>
                                <li><a href="#about">Governance</a></li>
                                <li><a href="#about">FAQs</a></li>
                                <li><a href="#contact">Careers</a></li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#services">Security Consulting</a></li>
                                <li><a href="#services">Digital Forensics</a></li>
                                <li><a href="#services">Training Programs</a></li>
                                <li><a href="#services">Compliance Audits</a></li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">YouTube</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Cyber Security & Digital Forensics UK</p>
                    <div className={styles.bottomLinks}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Accessibility Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
