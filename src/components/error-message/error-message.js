import React from 'react';

import './error-message.css';
import icon from "./death-star.png"

export default class ErrorMessage extends React.Component {
    render() {
        return (
            <div className="error-indicator">
                <img src={icon} alt="error icon"/>
                <span className="boom">BOOM!</span>
                <span>
                        Something has gone terribly wrong
                </span>
                <span>
                    (but we already sent droids to fix it)
                </span>
            </div>
        );
    }
}