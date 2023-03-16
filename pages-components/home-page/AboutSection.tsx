import styles from "@/styles/HomePage.module.css";
import { poppins, playfairDisplay } from "@/utils/fonts";
import Link from "next/link";

export default function AboutSection() {
    return (
        <div className={styles.aboutSectionContainer}>
            <section className={styles.aboutSection}>
                <h2 className={styles.aboutSectionTitle + " " + playfairDisplay.className}>O nas</h2>
                <p className={styles.aboutSectionContent + " " + poppins.className}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                <Link href="/historia" className={poppins.className + " " + styles.aboutSectionLink}>Jeżeli chcesz poznać naszą historię kliknij...</Link>
            </section>
        </div>
    )
}