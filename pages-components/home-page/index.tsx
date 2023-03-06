import styles from "@/styles/HomePage.module.css";

import Image from "next/image";

import HeroImage from "../../public/hotel_hero_image.jpg";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <picture className={styles.picture}>
                <Image width="400" src={HeroImage} alt="hotel" />
            </picture>
            <div className={styles.wrapper}>

            </div>
        </div>
    )
}

export default HomePage;