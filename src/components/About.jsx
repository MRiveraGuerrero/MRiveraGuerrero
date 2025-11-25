import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Code, Heart } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
    const items = [
        {
            icon: <GraduationCap size={24} />,
            title: "Education",
            text: "Degree in Computer Engineering"
        },
        {
            icon: <MapPin size={24} />,
            title: "Location",
            text: "Based in Spain, Basque Country"
        },
        {
            icon: <Briefcase size={24} />,
            title: "Current Work",
            text: "Currently working on BiskyTeam"
        },
        {
            icon: <Code size={24} />,
            title: "Learning",
            text: "Deepening my knowledge in React"
        },
        {
            icon: <Heart size={24} />,
            title: "Collaboration",
            text: "Open to collaborating on interesting projects"
        }
    ];

    return (
        <section id="about" className={`section ${styles.aboutSection}`}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card ${styles.card}`}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
