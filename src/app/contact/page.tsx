import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <main>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <h1 className={styles.heroHeading}>Get In Touch</h1>
                    <p className={styles.heroSubheading}>
                        Let's discuss how we can help secure your organisation
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.wrapper}>
                        {/* Info Column */}
                        <div className={styles.infoCol}>
                            <h2 className={styles.infoTitle}>Contact Information</h2>
                            <p className={styles.infoText}>
                                Reach out to our team for a confidential discussion about your security needs.
                            </p>

                            <div className={styles.contactDetails}>
                                <div className={styles.contactItem}>
                                    <div className={styles.iconBox}><Mail size={24} /></div>
                                    <div>
                                        <h4 className={styles.itemLabel}>Email</h4>
                                        <a href="mailto:contact@cybersecureduk.com" className={styles.itemLink}>contact@cybersecureduk.com</a>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.iconBox}><Phone size={24} /></div>
                                    <div>
                                        <h4 className={styles.itemLabel}>Phone</h4>
                                        <a href="tel:+440000000000" className={styles.itemLink}>+44 (0) XXX XXXX XXXX</a>
                                    </div>
                                </div>

                                <div className={styles.contactItem}>
                                    <div className={styles.iconBox}><MapPin size={24} /></div>
                                    <div>
                                        <h4 className={styles.itemLabel}>Location</h4>
                                        <p className={styles.itemText}>United Kingdom</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.emergencyBox}>
                                <h4>Urgent Security Incident?</h4>
                                <p>For immediate assistance with a breach or cyber attack:</p>
                                <a href="mailto:emergency@cybersecureduk.com">emergency@cybersecureduk.com</a>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className={styles.formCol}>
                            <form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name *</label>
                                    <input type="text" id="name" name="name" required placeholder="John Doe" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required placeholder="john@company.com" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" placeholder="+44 ..." />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="org">Organisation Name</label>
                                    <input type="text" id="org" name="org" placeholder="Company Ltd." />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="service">Service Interest</label>
                                    <select id="service" name="service">
                                        <option value="">Select a service...</option>
                                        <option value="consulting">Cyber Security Consulting</option>
                                        <option value="forensics">Digital Forensics</option>
                                        <option value="incident">Incident Response</option>
                                        <option value="training">Training & Internship</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" name="message" rows={5} required placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className={styles.submitButton}>Send Message →</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
