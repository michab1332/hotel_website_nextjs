import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import GallerySection from "./GallerySection";
import ContentSection from "@/shared-components/ContentSection";
import ServicesSection from "./ServicesSection";

import ContentSectionImage from "@/public/hotel_room.jpg";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <GallerySection />
            <ContentSection img={ContentSectionImage} title="Lorem Ipsum" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
            <ContentSection reverse img={ContentSectionImage} title="Lorem Ipsum" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
            <ServicesSection />
        </>
    )
}

export default HomePage;