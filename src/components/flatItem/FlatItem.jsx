import React from 'react';

const FlatItem = ({flat}) => {
    const {title, cover} = flat
    return (
        <li>
            <div>
                <img src={cover} alt={`Photo de couverture du logement ${title}`}/>
                <span>{title}</span>
            </div>
        </li>
    );
};

export default FlatItem;
