import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            {/* Background Effects */}
            <div className={styles.gridOverlay}></div>
            <div className={styles.gradientOverlay}></div>

            <div className={styles.wrapper}>
                <div className={`${styles.content} animate-fade-in`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <span>›</span>
                        <Link href="/about">About</Link>
                        <span>›</span>
                        <span>Cyber Secured UK</span>
                    </div>

                    <h1 className={styles.title}>
                        Cyber Security & Digital Forensics Services in the UK
                    </h1>

                    <p className={styles.tagline}>
                        Made Secure. Made Resilient. Made Stronger.
                    </p>

                    <p className={styles.subtitle}>
                        Protecting organisations, investigations, and digital assets with trusted,
                        evidence-driven cyber security and forensic expertise.
                    </p>

                    <p className={styles.supportingText}>
                        UK-focused cyber security consulting, digital forensics, incident response,
                        and training for businesses, institutions, and legal investigations.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary">Request a Consultation</Link>
                        <Link href="/services" className="btn btn-secondary">View Our Services</Link>
                    </div>

                    <div className={styles.accentLine}>
                        <span className={styles.dot}></span>
                        <span className={styles.line}></span>
                    </div>
                </div>
            </div>

            {/* Animated Particles/Shapes */}
            <div className={`${styles.floatingShape} ${styles.floatingShape1}`}></div>
            <div className={`${styles.floatingShape} ${styles.floatingShape2}`}></div>
        </section>
    );
}
