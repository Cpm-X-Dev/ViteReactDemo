import styles from "./Socials.module.css";

type TSocial = {
    id: number;
    name: string;
    link: string;
}[]

const socials: TSocial = [
    {
        id: 1,
        name: "Github",
        link: "https://github.com/"
    },
    {
        id: 2,
        name: "LinkedIn",
        link: "https://www.linkedin.com/"
    },
    {
        id: 3,
        name: "Twitter",
        link: "https://x.com/"
    }
]

const Socials = () => {
    return (
        <section className={styles.socialSection}>
            <ul className={styles.ul}>
                {socials.map((social) => {
                    return (
                        <li key={social.id}>
                            <a href={social.link} target="_blank" rel="noreferrer">
                                {social.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Socials;