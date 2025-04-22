import React from 'react';
import '../progress/Progress.css';

export default function ProgressBar({ value, max }) {
    const percentage = (value / max) * 100;

    return (
        <div className="progress-bar">
            <div
                className="progress-bar__fill"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
}