import React from "react";
import Spinner from "../spinner";

const withDataList = (View, getData) => {

    return class extends React.Component {
        state = {
            itemList: null,
        }

        componentDidMount() {
            getData()
                .then((itemList) => {
                    this.setState({itemList: itemList})
                })
        }

        render() {
            const {itemList} = this.state;
            if (itemList === null)
                return <Spinner/>
            return <View {...this.props} data={itemList}/>
        }
    }
}

export default withDataList;