import styles from "@/styles/HomePage.module.css";
import Image from "next/image";
import { poppins, playfairDisplay } from "@/utils/fonts";

import HeroImage from "../../public/hotel_hero_image.jpg";
import Logo from "../../public/hotel_logo.png";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <picture className={styles.picture}>
                <Image width="400" src={HeroImage} alt="hotel" />
            </picture>
            <div className={styles.wrapper}>
                <div className={styles.heroLogo}>
                    <picture className={styles.pictureLogo}>
                        <Image src={Logo} alt="Hotel Logo" width={130} />
                    </picture>
                    <p className={styles.textLogo + " " + playfairDisplay.className}>Willa Radwan</p>
                </div>
                <h1 className={styles.heroText}>Hotel i restauracja z historią</h1>
                <p className={styles.heroDescription + " " + playfairDisplay.className}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.</p>
                <div className={styles.infoCard + " " + poppins.className}>
                    <div className={styles.infoCardWrapper}>
                        <div className={styles.info}>
                            <p className={styles.infoTitle}>Numer telefonu:</p>
                            <p className={styles.infoContent}>+48 545 545 122</p>
                        </div>

                        <div className={styles.info}>
                            <p className={styles.infoTitle}>Adres e-mail:</p>
                            <p className={styles.infoContent}>hotel@gmail.com</p>
                        </div>

                        <div className={styles.info}>
                            <p className={styles.infoTitle}>Lokalizacja:</p>
                            <p className={styles.infoContent}>Koronkowa 43-212, Aleksandrów Kuj.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;