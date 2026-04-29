import {MdTune} from 'react-icons/md';
import './StudentReviews.css'
import ReviewCard from './ReviewCard';

const StudentReviews = () => {
    return (
        <div className="student-reviews">
            <div className="header">
                <div className="student-review-title">Student Reviews</div>
                <div className="sort-by-group">
                    <div className="sort-by-icon"><MdTune size={25} color="#6b7280" /></div>
                    <div className="sort-by">Sort by: Newest</div>
                </div>

            </div>
            <div className="ReviewCard">
                <ReviewCard 
                name="Jordan D." 
                date="Oct 14, 2023" 
                review="Middle Earth is honestly one of the best freshman dorm experiences you can get at UCI. The community feel is unlike anything else — everyone on my floor became close friends within the first week. The rooms are a decent size and the location next to the dining hall is super convenient for late-night studying."
                rating= {3.5}
                />
            </div>
        </div>
    )
}

export default StudentReviews;