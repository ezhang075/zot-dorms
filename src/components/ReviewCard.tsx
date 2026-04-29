import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import './ReviewCard.css';

type ReviewProps = {
    name: string;
    date: string;
    review: string;
    rating: number;
}

const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
}

const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
        if (i < Math.floor(rating)) return <FaStar key={i} color="#001e40" size={20} />;
        if (i < rating)             return <FaStarHalfAlt key={i} color="#001e40" size={20} />;
        return                             <FaRegStar key={i} color="#001e40" size={20} />;
    });
}

const ReviewCard = ({name, date, review, rating}: ReviewProps) => {
    const colors = ['#0f2a44', '#1e40af', '#0f766e', '#7c3aed'];
    const bgColor = colors[name.length % colors.length];

    return (
        <div className="review-card">
            <div className="review-content">
                <div className="review-header">
                    <div className="profile-icon" style={{ backgroundColor: bgColor }}>{getInitials(name)}</div>
                    <div className="profile-info">
                        <div className="profile-name">{name}</div>
                        <div className="profile-date">{date}</div>
                    </div>
                    <div className="star-reviews">{renderStars(rating)}</div>
                </div>
                <div className="review-body">
                    {review}
                </div>
                <div className="review-footer">
                    <div className="helpful">Was this helpful?</div>
                    <button className="helpful-btn"><FaThumbsUp size={18}/>24</button>
                    <button className="helpful-btn"><FaThumbsDown size={18}/></button>
                </div>
            </div>

        </div>
    )
}

export default ReviewCard;