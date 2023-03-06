import { Poppins, Playfair_Display } from 'next/font/google'

export const playfairDisplay = Playfair_Display({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

export const poppins = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})