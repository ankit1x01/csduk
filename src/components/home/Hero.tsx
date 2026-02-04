import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>
            <div className={styles.wrapper}>
                <div className={`${styles.content} animate-fade-in`}>
                    <div className={styles.breadcrumb}>
                        <a href="/">Home</a>
                        <span>›</span>
                        <a href="#about">About</a>
                        <span>›</span>
                        <span>What is CSDUK?</span>
                    </div>

                    <h1 className={styles.title}>
                        Cyber Security & Digital Forensics Services in the UK
                    </h1>

                    <p className={styles.tagline}>
                        Made Secure. Made Resilient. Made Smarter.
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
                        <a href="#contact" className="btn btn-primary">Request a Consultation</a>
                        <a href="#services" className="btn btn-secondary">View Our Services</a>
                    </div>

                    <div className={styles.accentLine}>
                        <span className={styles.dot}></span>
                        <span className={styles.line}></span>
                    </div>
                </div>
            </div>
        </section>
    );
}
