import styles from "@/styles/Footer.module.css";
import { poppins, playfairDisplay } from "@/utils/fonts";
import Image from "next/image";

import Logo from "../public/hotel_logo.png";

export default function Footer() {
    return (
        <footer className={styles.container + " " + poppins.className}>
            <div className={styles.wrapper}>
                <section className={styles.info}>
                    <div className={styles.infoWrapper}>
                        <p className={styles.infoTitle}>Numer telefonu:</p>
                        <p className={styles.infoContent}>+48 545 545 122</p>
                    </div>

                    <div className={styles.infoWrapper}>
                        <p className={styles.infoTitle}>Numer telefonu:</p>
                        <p className={styles.infoContent}>+48 545 545 122</p>
                    </div>

                    <div className={styles.infoWrapper}>
                        <p className={styles.infoTitle}>Numer telefonu:</p>
                        <p className={styles.infoContent}>+48 545 545 122</p>
                    </div>
                </section>
                <section className={styles.info}>
                    <div className={styles.infoWrapper}>
                        <p className={styles.infoTitle}>Numer telefonu:</p>
                        <p className={styles.infoContent}>+48 545 545 122</p>
                    </div>

                    <div className={styles.infoWrapper}>
                        <p className={styles.infoTitle}>Numer telefonu:</p>
                        <p className={styles.infoContent}>+48 545 545 122</p>
                    </div>

                    <div className={styles.infoWrapper}>
                        <p className={styles.infoTitle}>Numer telefonu:</p>
                        <p className={styles.infoContent}>+48 545 545 122</p>
                    </div>
                </section>

                <div className={styles.logo}>
                    <picture >
                        <Image src={Logo} alt="Hotel Logo" width={130} />
                    </picture>
                    <p className={styles.textLogo + " " + playfairDisplay.className}>Willa Radwan</p>
                </div>

            </div>
        </footer>
    );
}