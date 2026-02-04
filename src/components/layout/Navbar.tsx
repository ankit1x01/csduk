import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.header}>
            {/* Top Bar - Utility Links */}
            <div className={styles.topBar}>
                <div className={styles.container}>
                    <div className={styles.topRight}>
                        <div className={styles.search}>
                            <span>SEARCH</span>
                            <span className={styles.searchIcon}>🔍</span>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.support}>
                            <a href="mailto:nikhil@cybersecuredindia.com" className={styles.supportLink}>Support</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logoLink}>
                        <Image
                            src="/logo-symbol.png"
                            alt="CSDF UK Symbol"
                            width={50}
                            height={50}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>
                    <div className={styles.links}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/services" className={styles.link}>Services</Link>
                        <Link href="/internship" className={styles.link}>Internship</Link>
                        <Link href="/about" className={styles.link}>About</Link>
                        <Link href="/contact" className={styles.ctaButton}>Get Started</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
