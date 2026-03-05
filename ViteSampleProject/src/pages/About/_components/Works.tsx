import styles from "./Works.module.css";

type TWork = {
    id: number;
    companyName: string;
    position: string;
    description: string;
}[]

const works: TWork = [
    {
        id: 1,
        companyName: "JTRIT Solutions Inc.",
        position: "IT Consultant",
        description: "Building robust system designs and high quality software solutions in the Philippines."
    },
    {
        id: 2,
        companyName: "Company ABC",
        position: "Position ABC",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        companyName: "Company XYZ",
        position: "Position XYZ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

export const Work = () => {
    return (
        <div className={styles.workSection}>
            <h2>Work 🏢</h2>
            <section className={styles.workList}>
                {works.map((work) => {
                    return (
                        <div key={work.id} className={styles.workItem}>
                            <div className={styles.workHeader}>
                                <h3 className={styles.companyName}>{work.companyName}</h3>
                                <p className={styles.position}>{work.position}</p>
                            </div>
                            <p className={styles.description}>{work.description}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Work;