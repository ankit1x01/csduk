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
                        <div className={styles.auth}>
                            <span>Already Registered?</span>
                            <Link href="/login" className={styles.signIn}>SIGN IN</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        CSDUK
                    </Link>
                    <div className={styles.links}>
                        <Link href="#services" className={styles.link}>Adoption</Link>
                        <Link href="#innovation" className={styles.link}>Innovation</Link>
                        <Link href="#support" className={styles.link}>Support</Link>
                        <Link href="#about" className={styles.link}>About</Link>
                        <Link href="#insights" className={styles.link}>Insights</Link>
                        <Link href="#contact" className={styles.ctaButton}>Start Your Journey</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
