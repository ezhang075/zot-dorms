import './DormInfoCard.css';

const DormInfoCard = () => {
    return (
        <div className="dorm-info-card">
            <div className="starting-at">STARTING AT</div>
            <div className="price-container">
                <div className="dorm-price">$12,400</div>
                <div className="price-period">/yr</div>
            </div>
            <button className="write-a-review-btn">Write a Review</button>
        </div>
    )
}

export default DormInfoCard;