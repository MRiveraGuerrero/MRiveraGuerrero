import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Background Elements */}
            <div className={`${styles.bgGlow} ${styles.glow1}`} />
            <div className={`${styles.bgGlow} ${styles.glow2}`} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={styles.greeting}>Hello, I'm</h2>
                    <h1 className={styles.title}>
                        <span className="gradient-text">Mikel Rivera Guerrero</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Software Developer & Computer Engineer
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className={styles.ctaContainer}
                >
                    <a href="#projects" className={styles.primaryBtn}>
                        View Work
                    </a>
                    <a href="#contact" className={styles.secondaryBtn}>
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className={styles.scrollDown}
            >
                <ArrowDown size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
