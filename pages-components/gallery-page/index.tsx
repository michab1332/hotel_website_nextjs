import CustomHeader from "@/shared-components/CustomHeader";
import ContentSection from "@/shared-components/ContentSection";

import ContentSectionImage from "@/public/hotel_room.jpg";

export default function GalleryPage() {
    return (
        <>
            <CustomHeader srcImg={ContentSectionImage} alt="image" title="Galeria" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s." />
            <main>
                <ContentSection img={ContentSectionImage} title="Coś więcej o nas" content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." />
            </main>
        </>
    )
}