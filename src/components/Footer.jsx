import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className="text-2xl font-bold">Let's Connect</h2>
                    <p className="text-gray-400 text-center max-w-md">
                        Feel free to reach out for collaborations or just a friendly hello
                    </p>

                    <div className={styles.socials}>
                        <a
                            href="https://www.github.com/MRiveraGuerrero"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.socialLink}
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mikel-rivera-guerrero-801248295/"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.socialLink}
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:mikelrg2003@gmail.com"
                            className={styles.socialLink}
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>

                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Mikel Rivera Guerrero. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
