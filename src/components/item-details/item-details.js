import React from 'react';
import './item-details.css';
import Spinner from "../spinner";
import ErrorMessage from "../error-message";

export default class ItemDetails extends React.Component {
    state = {
        item: null,
        imageUrl: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedItemId !== this.props.selectedItemId)
            this.updateItem();
    }

    updateItem() {
        const {getData, getImage, selectedItemId} = this.props;
        this.setState({
            loading: true
        })
        getData(selectedItemId)
            .then((item) => this.setState(
                {
                    item: item,
                    imageUrl: getImage(selectedItemId),
                    loading: false,
                    error: false
                }
            ))
            .catch(() => this.setState({error: true}));
    }

    render() {
        const {loading, item, imageUrl, error} = this.state;
        if (error === true) {
            return (
                <ErrorMessage/>
            )
        }
        if (loading === true)
            return (
                <Spinner/>
            )
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={imageUrl}/>
                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

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