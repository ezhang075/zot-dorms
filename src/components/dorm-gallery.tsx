import './dorm-gallery.css'

type DormGalleryProps = {
    galleryImg: string;
    img2?: string;
    img3?: string;
    img4?: string;
    img5?: string;
}

const DormGallery = ({ galleryImg, img2, img3, img4, img5 }: DormGalleryProps) => {
    return (
        <div className="dorm-gallery">
            <div className="gallery-main">
                <img src={galleryImg} alt="Main Dorm View" className="gallery-main-image" />
            </div>

            <div className="gallery-side">
                <img src={img2} alt="Dorm View 2" className="gallery-side-image" />
                <img src={img3} alt="Dorm View 3" className="gallery-side-image" />
                <img src={img4} alt="Dorm View 4" className="gallery-side-image" />
                <img src={img5} alt="Dorm View 5" className="gallery-side-image" />
            </div>
        </div>
    )
}

export default DormGallery;