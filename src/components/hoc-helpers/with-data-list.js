import React from "react";
import Spinner from "../spinner";

const withDataList = (View) => {
    return class extends React.Component {
        state = {
            itemList: null,
        }

        componentDidMount() {
            this.props.getData()
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