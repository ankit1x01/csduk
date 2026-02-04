'use client';

import { Cookie, Settings, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        functional: false,
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        // Check if user has already consented
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        setPreferences({
            necessary: true,
            functional: true,
            analytics: true,
            marketing: true
        });
        saveConsent('all');
    };

    const handleRejectAll = () => {
        setPreferences({
            necessary: true,
            functional: false,
            analytics: false,
            marketing: false
        });
        saveConsent('necessary');
    };

    const handleSavePreferences = () => {
        saveConsent('custom');
    };

    const saveConsent = (type: string) => {
        localStorage.setItem('cookieConsent', type);
        // Here you would typically trigger your GTM or cookie manager
        console.log('Consent saved:', type, preferences);
        setIsVisible(false);
        setShowPreferences(false);
    };

    const togglePreference = (key: keyof typeof preferences) => {
        if (key === 'necessary') return; // Cannot toggle necessary
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    if (!isVisible && !showPreferences) return null;

    return (
        <>
            {/* Main Banner */}
            {isVisible && !showPreferences && (
                <div className={styles.banner}>
                    <div className={styles.bannerContent}>
                        <div className={styles.bannerHeader}>
                            <Cookie className={styles.icon} size={24} />
                            <h3>Cookie Consent</h3>
                        </div>
                        <p>
                            We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content.
                            By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or reject non-essential cookies.
                        </p>
                        <div className={styles.links}>
                            Read our <Link href="/cookies">Cookie Policy</Link> and <Link href="/privacy">Privacy Policy</Link> for more information.
                        </div>
                        <div className={styles.actions}>
                            <button onClick={handleAcceptAll} className={styles.btnPrimary}>Accept All</button>
                            <button onClick={handleRejectAll} className={styles.btnSecondary}>Reject All</button>
                            <button onClick={() => setShowPreferences(true)} className={styles.btnOutline}>
                                <Settings size={16} /> Manage Preferences
                            </button>
                        </div>
                    </div>
                    <button onClick={() => setIsVisible(false)} className={styles.closeBtn} aria-label="Close">
                        <X size={20} />
                    </button>
                </div>
            )}

            {/* Preferences Modal */}
            {showPreferences && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <div className={styles.modalTitle}>
                                <Settings size={24} />
                                <h3>Cookie Preferences</h3>
                            </div>
                            <button onClick={() => setShowPreferences(false)} className={styles.closeModalBtn}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.preferenceItem}>
                                <div className={styles.prefHeader}>
                                    <h4>Strictly Necessary Cookies</h4>
                                    <span className={styles.badge}>Always Active</span>
                                </div>
                                <p>These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
                            </div>

                            <div className={styles.preferenceItem}>
                                <div className={styles.prefHeader}>
                                    <h4>Functional Cookies</h4>
                                    <label className={styles.switch}>
                                        <input
                                            type="checkbox"
                                            checked={preferences.functional}
                                            onChange={() => togglePreference('functional')}
                                        />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                <p>These cookies enable personalized features like remembering your theme preference (dark/light mode) and language settings.</p>
                            </div>

                            <div className={styles.preferenceItem}>
                                <div className={styles.prefHeader}>
                                    <h4>Analytics Cookies</h4>
                                    <label className={styles.switch}>
                                        <input
                                            type="checkbox"
                                            checked={preferences.analytics}
                                            onChange={() => togglePreference('analytics')}
                                        />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                            </div>

                            <div className={styles.preferenceItem}>
                                <div className={styles.prefHeader}>
                                    <h4>Marketing Cookies</h4>
                                    <label className={styles.switch}>
                                        <input
                                            type="checkbox"
                                            checked={preferences.marketing}
                                            onChange={() => togglePreference('marketing')}
                                        />
                                        <span className={styles.slider}></span>
                                    </label>
                                </div>
                                <p>These cookies may be set through our site by our advertising partners to understand your interests and show you relevant adverts on other sites.</p>
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button onClick={handleSavePreferences} className={styles.btnPrimary}>Save Preferences</button>
                            <button onClick={handleAcceptAll} className={styles.btnSecondary}>Accept All</button>
                            <button onClick={handleRejectAll} className={styles.btnOutline}>Reject All</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
