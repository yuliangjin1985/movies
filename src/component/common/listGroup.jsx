import React, { Component } from 'react';
import { genres } from '../../services/fakeGenreService';

const ListGroup = (props) => {
    const {items, propterValue, propterText} = props;
    return <div>
        <ul class="list-group">
            <li class="list-group-item active">Cras justo odio</li>
            {items.map(item => <li key={item[propterValue]} className="list-group-item">{item[propterText]}</li>)}
        </ul>
    </div>
};
 
export default ListGroup;