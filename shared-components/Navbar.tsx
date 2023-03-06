import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { poppins, playfairDisplay } from "@/utils/fonts";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <picture className={styles.picture}>
                        {/* add logo */}
                    </picture>
                    <p className={styles.logoTitle + " " + playfairDisplay.className} >Willa Radwan</p>
                </div>
                <nav className={styles.nav + " " + poppins.className}>
                    <Link href="/">O nas</Link>
                    <Link href="/uslugi">Usługi</Link>
                    <Link href="/galeria">Galeria</Link>
                    <Link href="/platnosci">Płatności</Link>
                    <Link href="/kontakt">Kontakt</Link>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;