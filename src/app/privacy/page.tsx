import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import styles from './legal.module.css';

export default function PrivacyPage() {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Privacy Policy</h1>
                    <p className={styles.meta}>Last updated: 4 February 2026</p>

                    <section>
                        <h2>1. Introduction</h2>
                        <p>Cyber Secured UK ("we", "our", "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
                        <p>Cyber Secured UK is the data controller responsible for your personal data. If you have any questions about this policy, please contact us at contact@cybersecureduk.com.</p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>We collect and process the following types of personal data:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> Name, title, company name, job role</li>
                            <li><strong>Contact Data:</strong> Email address, telephone number, postal address</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
                            <li><strong>Usage Data:</strong> How you use our website and training materials</li>
                            <li><strong>Training Data:</strong> Course enrollment, attendance records, assessment results, certificates</li>
                            <li><strong>Marketing Data:</strong> Your preferences for receiving marketing communications</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>We process your personal data for the following purposes:</p>
                        <ul>
                            <li>To provide cybersecurity training courses and educational services</li>
                            <li>To process course bookings and payments</li>
                            <li>To issue certificates and maintain training records</li>
                            <li>To communicate with you about your training and our services</li>
                            <li>To send marketing communications (with your consent)</li>
                            <li>To improve our website and services</li>
                            <li>To comply with legal and regulatory requirements</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Legal Basis for Processing</h2>
                        <p>We rely on the following legal bases for processing your personal data:</p>
                        <ul>
                            <li><strong>Contract Performance:</strong> To fulfill our training services agreement with you</li>
                            <li><strong>Legitimate Interests:</strong> To operate and improve our business, provided your rights are not overridden</li>
                            <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
                            <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Data Sharing and Disclosure</h2>
                        <p>We may share your personal data with:</p>
                        <ul>
                            <li>Training partners and accreditation bodies (where required for certification)</li>
                            <li>IT service providers and hosting companies</li>
                            <li>Payment processors for secure transaction handling</li>
                            <li>Professional advisors (lawyers, auditors, insurers)</li>
                            <li>Government authorities when legally required</li>
                        </ul>
                        <p>We do not sell your personal data to third parties.</p>
                    </section>

                    <section>
                        <h2>6. International Data Transfers</h2>
                        <p>Your personal data is primarily stored within the United Kingdom. If we transfer data outside the UK, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses or adequacy decisions.</p>
                    </section>

                    <section>
                        <h2>7. Data Retention</h2>
                        <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy. Training records and certificates are typically retained for 7 years for professional accreditation and legal requirements. Marketing data is retained until you withdraw consent.</p>
                    </section>

                    <section>
                        <h2>8. Your Data Protection Rights</h2>
                        <p>Under UK GDPR, you have the following rights:</p>
                        <ul>
                            <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                            <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                            <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                            <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                            <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                            <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing or cookies</li>
                        </ul>
                        <p>To exercise these rights, contact us at contact@cybersecureduk.com</p>
                    </section>

                    <section>
                        <h2>9. Cookies and Tracking Technologies</h2>
                        <p>Our website uses cookies to improve your experience. For detailed information about the cookies we use and your choices, please see our Cookie Policy.</p>
                    </section>

                    <section>
                        <h2>10. Data Security</h2>
                        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, access controls, and regular security assessments.</p>
                    </section>

                    <section>
                        <h2>11. Children's Privacy</h2>
                        <p>Our services are intended for individuals aged 18 and over. We do not knowingly collect personal data from children under 18. If you believe we have collected such data, please contact us immediately.</p>
                    </section>

                    <section>
                        <h2>12. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
                    </section>

                    <section>
                        <h2>13. Contact Us</h2>
                        <p>If you have questions about this Privacy Policy or wish to exercise your data protection rights:</p>
                        <address>
                            <strong>Cyber Secured UK</strong><br />
                            Email: contact@cybersecureduk.com<br />
                            Location: United Kingdom
                        </address>
                    </section>

                    <section>
                        <h2>14. Complaints</h2>
                        <p>If you are not satisfied with our response to your data protection concerns, you have the right to lodge a complaint with the Information Commissioner's Office (ICO):</p>
                        <p>
                            <strong>Information Commissioner's Office</strong><br />
                            Website: www.ico.org.uk<br />
                            Helpline: 0303 123 1113
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
