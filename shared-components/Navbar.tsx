import { useState, useEffect } from 'react';
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { poppins, playfairDisplay } from "@/utils/fonts";
import Logo from "../public/hotel_logo.png";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    function setActiveNavbar() {
        const scrollY: number = window.scrollY;
        if (scrollY === 0) {
            setActive(false);
            return;
        }
        setActive(true);
    }

    function handleBurgerButtonOnClick() {
        setIsMenuActive(prevState => !prevState);
    }

    useEffect(() => {
        window.addEventListener("scroll", setActiveNavbar);
        return () => window.removeEventListener("scroll", setActiveNavbar);
    }, []);

    return (
        <div className={active ? (styles.container + " " + styles.activeContainer) : styles.container}>
            <div className={active ? (styles.wrapper + " " + styles.activeWrapper) : styles.wrapper}>
                <div className={styles.logo}>
                    <picture className={styles.picture}>
                        <Image src={Logo} alt="Hotel Logo" width={50} />
                    </picture>
                    <p className={styles.logoTitle + " " + playfairDisplay.className}>Willa Radwan</p>
                </div>
                <nav className={styles.nav + " " + poppins.className}>
                    <Link href="/">O nas</Link>
                    <Link href="/uslugi">Usługi</Link>
                    <Link href="/galeria">Galeria</Link>
                    <Link href="/platnosci">Płatności</Link>
                    <Link href="/kontakt">Kontakt</Link>
                </nav>
                <div onClick={handleBurgerButtonOnClick} className={styles.burgerButtonWrapper}>
                    <div className={styles.burgerButton}></div>
                </div>
            </div>
            <div onClick={handleBurgerButtonOnClick} className={isMenuActive ? styles.mobileMenu + " " + poppins.className : styles.mobileMenuHidden}>
                <Link href="/">O nas</Link>
                <Link href="/uslugi">Usługi</Link>
                <Link href="/galeria">Galeria</Link>
                <Link href="/platnosci">Płatności</Link>
                <Link href="/kontakt">Kontakt</Link>
            </div>
        </div >
    );
}

export default Navbar;