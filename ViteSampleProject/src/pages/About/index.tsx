import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.about}>
            <section>
                <h1 className={styles.title}>About Me</h1>
            </section>

            <article>
                <p className={styles.description}>
                    I'm a freelance IT Consultant passionate about building
                    robust system designs and high quality software solutions.
                </p>
            </article>
        </div>
    )
}

export default About;
