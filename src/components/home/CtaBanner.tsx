import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>Secure Your Digital Assets Today</h2>
                        <p className={styles.text}>
                            Whether you need cyber security expertise, forensic investigation support,
                            or professional training — we're here to help.
                        </p>
                    </div>

                    <div className={styles.action}>
                        <Link href="/contact" className={styles.button}>
                            Contact Us for a Confidential Discussion <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
