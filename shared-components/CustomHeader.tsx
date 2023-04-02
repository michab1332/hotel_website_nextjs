import styles from "@/styles/CustomHeader.module.css";
import Image, { StaticImageData } from "next/image";
import { poppins, playfairDisplay } from "@/utils/fonts";

interface CustomHeader {
    srcImg: string | StaticImageData;
    alt: string;
    title: string;
    desc: string;
}

export default function CustomHeader({ srcImg, alt, title, desc }: CustomHeader) {
    return (
        <header className={styles.container}>
            <Image className={styles.backgroundImage} fill src={srcImg} alt={alt} />
            <div className={styles.wrapper}>
                <h2 className={styles.title + " " + playfairDisplay.className}>{title}</h2>
                <p className={styles.desc + " " + poppins.className}>{desc}</p>
            </div>
        </header>
    );
}