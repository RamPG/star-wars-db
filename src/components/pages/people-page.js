import React from 'react';
import {withRouter} from 'react-router-dom';
import {PeopleList, PersonDetails} from '../sw-components';
import Row from '../row';

const PeoplePage = ({match, history}) => {
    const {id} = match.params;
    return (
        <Row
            left={<PeopleList changeItemId={(id) => history.push(id)}/>}
            right={<PersonDetails selectedItemId={id}/>}
        />
    )
}

export default withRouter(PeoplePage);
