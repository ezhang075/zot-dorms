import {FaStar, FaStarHalfAlt} from 'react-icons/fa';

type DormRatingSummaryProps = {
    rating: number;
    reviewCount: number;
}

const DormRatingSummary = ({rating, reviewCount}: DormRatingSummaryProps) => {
    return (
        <div className="dorm-rating-summary">
            <div className="rating-left">
                <h2 className="rating-number">{rating.toFixed(2)}</h2>
                <div className="dorm-stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                </div>
            </div>

            <div className="rating-divider"></div>

            <div className="rating-right">
                <div className="dorm-review-count">{reviewCount}</div>
                <div className="review-label">Reviews</div>
            </div>
        </div>
    )
}

export default DormRatingSummary;