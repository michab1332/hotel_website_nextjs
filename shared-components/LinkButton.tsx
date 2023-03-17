import Link from "next/link"
import styles from "@/styles/LinkButton.module.css";
import { playfairDisplay } from "@/utils/fonts";

interface LinkButton {
    url: string,
    text: string
}

export default function LinkButton({ url, text }: LinkButton) {
    return (
        <div className={styles.linkButton + " " + playfairDisplay.className}>
            <Link href={url}>{text}</Link>
        </div>
    )
}
