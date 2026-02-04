import { Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.mainGrid}>
                    {/* Brand Section */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/logo.png"
                                alt="Cyber Secured UK"
                                width={150}
                                height={50}
                                className={styles.logoImage}
                            />
                        </Link>
                        <p className={styles.description}>
                            Cyber Security and Digital Forensics UK Ltd. Providing expert cyber security and digital forensics services across the United Kingdom.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter" className={styles.socialIcon}><Twitter size={20} /></a>
                            <a href="#" aria-label="YouTube" className={styles.socialIcon}><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className={styles.links}>
                        {/* Col 1 */}
                        <div className={styles.col}>
                            <h4 className={styles.colTitle}>Services</h4>
                            <ul>
                                <li><Link href="/services">Cyber Security Consulting</Link></li>
                                <li><Link href="/services">Digital Forensics</Link></li>
                                <li><Link href="/services">Incident Response</Link></li>
                                <li><Link href="/services">Training Programs</Link></li>
                            </ul>
                        </div>

                        {/* Col 2 */}
                        <div className={styles.col}>
                            <h4 className={styles.colTitle}>Company</h4>
                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/about">Why Choose Us</Link></li>
                                <li><Link href="/about">Our Team</Link></li>
                                <li><Link href="/contact">Careers</Link></li>
                            </ul>
                        </div>

                        {/* Col 3 */}
                        <div className={styles.col}>
                            <h4 className={styles.colTitle}>Resources</h4>
                            <ul>
                                <li><span className={styles.disabledLink}>Blog (Coming Soon)</span></li>
                                <li><Link href="/about">Case Studies</Link></li>
                                <li><Link href="/contact">FAQ</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Col 4 */}
                        <div className={styles.col}>
                            <h4 className={styles.colTitle}>Legal</h4>
                            <ul>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                                <li><Link href="/terms">Terms of Service</Link></li>
                                <li><Link href="/cookies">Cookie Policy</Link></li>
                                <li><Link href="/accessibility">Accessibility</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} Cyber Security and Digital Forensics UK Ltd. All rights reserved.</p>
                    <div className={styles.bottomLinks}>
                        <Link href="/privacy">Privacy</Link>
                        <span className={styles.separator}>|</span>
                        <Link href="/terms">Terms</Link>
                        <span className={styles.separator}>|</span>
                        <Link href="/accessibility">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
