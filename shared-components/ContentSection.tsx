import styles from "@/styles/ContentSection.module.css";
import Image, { StaticImageData } from "next/image";
import { poppins, playfairDisplay } from "@/utils/fonts";

interface ContentSection {
    img: string | StaticImageData,
    title: string,
    content: string,
    reverse?: boolean
}

export default function ContentSection({ img, title, content, reverse = false }: ContentSection) {
    return (
        <div className={styles.container}>
            <section className={reverse ? styles.wrapper__reverse : styles.wrapper}>
                <picture className={styles.picture}>
                    <Image style={{ objectFit: "cover" }} fill src={img} alt={title} />
                </picture>
                <div className={styles.textWrapper}>
                    <h3 className={styles.title + " " + playfairDisplay.className}>{title}</h3>
                    <p className={styles.content + " " + poppins.className}>{content}</p>
                </div>
            </section>
        </div>
    )
}
