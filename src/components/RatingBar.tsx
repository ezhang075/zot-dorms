import './RatingBar.css';

type RatingBarProps = {
    label: string;
    percent: number;
    color: string;
    count: number;
}

const RatingBar = ({label, percent, color, count}: RatingBarProps) => {
    return (
        <div className="rating-bar">
            <span className="rating-bar-label">{label}</span>
            <div className="rating-bar-container">
                <div className="rating-bar-fill" style={{width: `${percent}%`, backgroundColor: color}}></div>
            </div>
            <div className="count">{count}</div>
        </div>
    )
}

export default RatingBar;