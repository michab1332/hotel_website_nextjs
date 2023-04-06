import styles from "@/styles/HomePage.module.css";
import Image from "next/image";
import LinkButton from "@/shared-components/LinkButton";

import HotelRoomImage from "@/public/hotel_room.jpg";

export default function GallerySection() {
    return (
        <div className={styles.gallerySectionContainer}>
            <Image className={styles.backgroundImage + " " + styles.animateImage} fill src={HotelRoomImage} alt="background photo of hotel room" />
            <LinkButton url="/galeria" text="Zobacz naszą galerie" />
        </div>
    );
}