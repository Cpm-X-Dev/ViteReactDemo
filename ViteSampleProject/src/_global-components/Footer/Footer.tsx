import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            &copy;2026 Vite Sample Project {" "} <br />
            All rights reserved
        </footer>
    )
}

export default Footer;