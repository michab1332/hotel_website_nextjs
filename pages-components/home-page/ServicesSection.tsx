import styles from "@/styles/HomePage.module.css";
import Image from "next/image";
import { poppins, playfairDisplay } from "@/utils/fonts";
import LinkButton from "@/shared-components/LinkButton";

import HotelImage from "../../public/hotel_hero_image.jpg";
import RestaurantImage from "../../public/hotel_room.jpg";

export default function ServicesSection() {
    return (
        <div className={styles.servicesContainer}>
            <div className={styles.servicesWrapper}>
                <section className={styles.serviceSection}>
                    <Image className={styles.backgroundImage + " " + styles.animateImage} src={HotelImage} fill alt="Hotel" />
                    <h2 className={styles.serviceTitle + " " + playfairDisplay.className}>Hotel</h2>
                    <p className={styles.serviceContent + " " + poppins.className}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
                    <LinkButton url="/hotel" text="Dowiedz się więcej" />
                </section>
                <section className={styles.serviceSection}>
                    <Image className={styles.backgroundImage + " " + styles.animateImage} src={RestaurantImage} fill alt="Restauracja" />
                    <h2 className={styles.serviceTitle + " " + playfairDisplay.className}>Restauracja</h2>
                    <p className={styles.serviceContent + " " + poppins.className}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.</p>
                    <LinkButton url="/hotel" text="Dowiedz się więcej" />
                </section>
            </div>
        </div>
    )
}
