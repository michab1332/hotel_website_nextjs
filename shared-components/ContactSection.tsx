import styles from "@/styles/ContactSection.module.css";
import { playfairDisplay } from "@/utils/fonts";
import LinkButton from "./LinkButton";

export default function ContantSection() {
    return (
        <section className={styles.container + " " + playfairDisplay.className}>
            <h2>Jeżeli jesteś zainteresowany/a skontaktuj się z nami</h2>
            <LinkButton url="/kontakt" text="Kontakt" black />
        </section>
    );
}