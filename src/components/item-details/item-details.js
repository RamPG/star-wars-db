import React from 'react';
import ErrorButton from "../error-button";
import './item-details.css';
import Spinner from "../spinner";

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
    state = {
        item: null,
        imageUrl: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedItemId !== this.props.selectedItemId)
            this.updateItem();
    }

    updateItem() {
        this.setState({
            loading: true
        })
        this.props.getData(this.props.selectedItemId)
            .then((item) => this.setState(
                {
                    item: item,
                    loading: false
                }
            ));
        this.props.getImage(this.props.selectedItemId)
            .then((item) => this.setState(
                {
                    imageUrl: item
                }
            ))
    }

    render() {
        const {loading, item, imageUrl} = this.state;
        if (loading === true)
            return (
                <Spinner/>
            )
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
