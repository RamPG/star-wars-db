import React from 'react';

export default class Row extends React.Component {
    render() {
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    {this.props.left}
                </div>
                <div className="col-md-6">
                    {this.props.right}
                </div>
            </div>
        );
    }
}