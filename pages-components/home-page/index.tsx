import Image from "next/image";

import HeroImage from "../../public/hotel_hero_image.jpg";

const HomePage = () => {
    return (
        <div className="homeContainer">
            <div className="homeContainer__imageWrapper">
                <picture className="homeContainer__picture" style={{ objectFit: 'cover' }}>
                    <Image src={HeroImage} alt="hotel" />
                </picture>
            </div>
        </div>
    )
}

export default HomePage;