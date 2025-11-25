import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const Skills = () => {
    const skills = [
        { name: 'Git', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg' },
        { name: 'Java', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg' },
        { name: 'JavaScript', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg' },
        { name: 'PHP', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg' },
        { name: 'Python', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg' },
        { name: 'Bash', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gnubash.svg' },
        { name: 'VS Code', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg' },
        { name: 'HTML5', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg' },
        { name: 'React', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg' },
        { name: 'CSS3', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg' },
        { name: 'NodeJS', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg' },
        { name: 'MongoDB', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg' },
        { name: 'MySQL', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg' },
        { name: 'Google Cloud', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg' },
        { name: 'Wordpress', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/wordpress-colored.svg' },
        { name: 'Wix', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/wix-colored.svg' },
        { name: 'Linux', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg' },
        { name: 'Docker', url: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg' },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    My <span className="gradient-text">Skills</span>
                </motion.h2>

                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={styles.skillCard}
                        >
                            <img src={skill.url} alt={skill.name} className={styles.skillIcon} />
                            <span className={styles.skillName}>{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
