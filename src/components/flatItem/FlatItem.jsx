import React from 'react';
import {NavLink} from "react-router-dom";

const FlatItem = ({flat}) => {
    const {id, title, cover} = flat
    return (
        <NavLink to={`/logement-${id}`}>
            <li>
                <div>
                    <img src={cover} alt={`Photo de couverture du logement ${title}`}/>
                    <span>{title}</span>
                </div>
            </li>
        </NavLink>
    );
};

export default FlatItem;
