import React from 'react';
import {Link} from "react-router-dom";

import './header.css';
export default class Header extends React.Component {
    render() {
        return (
            <div className="header d-flex">
                <h3>
                    <a href="#">
                        <Link to="/">Star DB</Link>
                    </a>
                </h3>
                <ul className="d-flex">
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                    <li>
                        <Link to="/planets">Planets</Link>
                    </li>
                    <li>
                        <Link to="/starships">Starships</Link>
                    </li>
                </ul>
            </div>
        );
    }
}