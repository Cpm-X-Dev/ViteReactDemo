import Socials from "./_components/Socials";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <section>
                <h1 className={styles.title}>
                    Hello 👋 {" "} <br />
                    I'm Christian Paul!
                </h1>
            </section>

            <article>
                <p className={styles.introduction}>
                    But you call me <span style={{ fontWeight: "bold" }}>Chris</span>! 😄 {" "} <br />
                    I am a freelance IT Consultant. {" "} <br />
                    I offer <span style={{ fontStyle: "italic", fontWeight: "bold" }}>robust</span> system designs and high quality software solutions. 🛠️
                </p>
            </article>

            <Socials />
        </div>
    )
}

export default Home;