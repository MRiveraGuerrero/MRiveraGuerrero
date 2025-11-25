import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <a href="#" className={styles.logo}>MRG</a>

                <div className={styles.navLinks}>
                    <a href="#about" className={styles.navLink}>About</a>
                    <a href="#skills" className={styles.navLink}>Skills</a>
                    <a href="#projects" className={styles.navLink}>Projects</a>
                    <a href="#contact" className={styles.navLink}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
