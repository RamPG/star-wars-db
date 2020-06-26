import React from 'react';
import ErrorButton from "../error-button";
import './item-details.css';

class Record extends React.Component {
    render() {
        const {label, item, field} = this.props;
        return (
            <li className="list-group-item">
                <span className="term">{label}</span>
                <span>{item[field]}</span>
            </li>
        )
    }
}

export {Record};

export default class ItemDetails extends React.Component {

    render() {
        const {item, item: {name}, imageUrl} = this.props;
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={imageUrl}/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
                <ErrorButton/>
            </div>
        )
    }
}
