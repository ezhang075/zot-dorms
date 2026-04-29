import {useParams} from 'react-router-dom';
import dorms from '../components/dorms.tsx';
import DormRatingSummary from '../components/dorm-rating-summary.tsx';
import DormGallery from '../components/dorm-gallery.tsx';
import ResidentExperiences from '../components/resident-experience.tsx';
import StudentReviews from '../components/StudentReviews.tsx';
import DormInfoCard from '../components/DormInfoCard.tsx';

const DormPage = () => {
    const { id } = useParams();
    const dorm = dorms.find((dorm) => dorm.id === id);
    if (!dorm) {
        return <div>Dorm not found</div>;
    }

    return (
        <div className="dorm-page">
            {/* <DormRatingSummary rating={dorm.rating} reviewCount={dorm.review_count} /> */}
            <div className="page-content">
                <div className="dorm-page-top">
                    <h1 className="dorm-title">{dorm.name}</h1>
                    <DormRatingSummary rating={dorm.rating} reviewCount={dorm.review_count} />
                </div>
                <div className="dorm-page-content">
                    <div className="dorm-main-content">
                        <DormGallery galleryImg={dorm.image} img2={dorm.img2} img3={dorm.img3} img4={dorm.img4} img5={dorm.img5} />
                        <div className="dorm-description">{dorm.description}</div>
                        <div className="resident-experience">
                            <ResidentExperiences />
                        </div>
                        <div className="student-reviews"><StudentReviews/></div>
                    </div>
                    <aside className="dorm-page-side">
                        <DormInfoCard/>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default DormPage;