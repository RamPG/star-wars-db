import React from 'react';
import {withRouter} from 'react-router-dom';
import {StarshipsList, StarshipDetails} from '../sw-components';
import Row from "../row";

const StarshipsPage = ({match, history}) => {
    const {id} = match.params;
    return (
        <Row
            left={<StarshipsList changeItemId={(id) => history.push(id)}/>}
            right={<StarshipDetails selectedItemId={id}/>}
        />
    )
}
export default withRouter(StarshipsPage);