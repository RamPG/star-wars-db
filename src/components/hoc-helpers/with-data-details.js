import React from "react";
import Spinner from "../spinner";

const withDataDetails = (View, getData, getImage) => {
    return class extends React.Component {
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
            getData(this.props.selectedItemId)
                .then((item) => this.setState(
                    {
                        item: item,
                        loading: false
                    }
                ));
            getImage(this.props.selectedItemId)
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
            return <View {...this.props} item={item} imageUrl={imageUrl}>
            </View>

        }
    }
}

export default withDataDetails;