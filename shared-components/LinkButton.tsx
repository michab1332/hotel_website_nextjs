import Link from "next/link"
import styles from "@/styles/LinkButton.module.css";
import { playfairDisplay } from "@/utils/fonts";

interface LinkButton {
    url: string,
    text: string,
    black?: boolean
}

export default function LinkButton({ url, text, black = false }: LinkButton) {
    const isBlack = black ? styles.linkButtonBlack : styles.linkButton;
    return (
        <div className={isBlack + " " + playfairDisplay.className}>
            <Link href={url}>{text}</Link>
        </div>
    )
}
