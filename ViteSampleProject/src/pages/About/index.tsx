import Work from "./_components/Works";
import styles from "./About.module.css";

const About = () => {
	return (
		<div className={styles.about}>
			<section>
				<h1 className={styles.title}>About Me 🤙</h1>
			</section>

			<article className={styles.description}>
				<p>
					I'm{" "}
					<span style={{ fontWeight: "bold" }}>Christian Paul</span>,
					a freelance IT Consultant passionate about building robust
					system designs and high quality software solutions in the
					Philippines. 🛠️
				</p>

				<p>
					Currently, I'm working with{" "}
					<span style={{ fontWeight: "bold" }}>
						JTRIT Solutions Inc.
					</span> {" "}
                    as a Software Engineer & DevSecOps Engineer for 2 years. 👨‍💻
				</p>

                <p>
                    Being in a start-up company working with Philippine Governments, I have
                    the opportunity to work with different industries and technologies - as well as different It positions.
                    I'm always looking for new challenges and opportunities to grow my skills and knowledge.
                </p>
			</article>

			<Work />
		</div>
	);
};

export default About;
