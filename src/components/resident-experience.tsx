import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import './resident-experience.css';
import RatingBar from './RatingBar.tsx';

const ResidentExperiences = () => {
    return (
        <div className="resident-experiences">
            <div className="review-section">
                <div className="review-title">Resident Experiences</div>
                <div className="StarRating">
                    <FaStar className="star" color="#0F1F33" size={30} />
                    <FaStar className="star" color="#0F1F33" size={30} />
                    <FaStar className="star" color="#0F1F33" size={30} />
                    <FaStar className="star" color="#0F1F33" size={30} />
                    <FaStarHalfAlt className="star" color="#0F1F33" size={30} />
                    <div className="rating-text">4.7</div>
                    <div className="review-count">120 reviews</div>
                </div>
                <div className="star-distribution">
                        <RatingBar label="5 stars" percent={60} count={72} color="#0F1F33" />
                        <RatingBar label="4 stars" percent={25} count={30} color="#0F1F33" />
                        <RatingBar label="3 stars" percent={10} count={12} color="#0F1F33" />
                        <RatingBar label="2 stars" percent={5} count={6} color="#0F1F33" />
                        <RatingBar label="1 star" percent={0} count={0} color="#0F1F33" />
                </div>
            </div>
        </div>
    )
}

export default ResidentExperiences;