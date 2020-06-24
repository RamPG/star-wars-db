import React from 'react';
import Spinner from "../spinner";
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
    state = {
        item: null,
        url: null,
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
                    url: item
                }
            ))
    }

    render() {
        if (this.state.loading === true)
            return (
                <Spinner/>
            )
        const {item, item: {name}, url} = this.state;
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={url}/>
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
