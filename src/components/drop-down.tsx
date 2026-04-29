import { useState } from 'react';
import './drop-down.css';

type DropDownProps = {
    title: string;
    choices: string[];
}

const DropDown = ({title, choices}: DropDownProps) => {
    const [selected, setSelected] = useState('')
    return (
        <div className='drop-down'>
            <div className="drop-down-title">{title}</div>
            <select 
                className="drop-down-select"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
            >
                <option value="">Select a dorm</option>
                {choices.map((choice) => (
                    <option key={choice} value={choice}>{choice}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown;