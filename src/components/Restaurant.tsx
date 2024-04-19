import React from 'react';
import '../styles/card.css';

interface RestaurantProps {
    name: string;
    address: {
        city: string;
        firstLine: string;
    };
    rating: number;
    cuisines: string[];
}

const Restaurant: React.FC<RestaurantProps> = (props) => {
    return (
        <div className='card'>
            <div className='card__header'>
                <h3>{props.name}</h3>
                <div className='card__label'>
                    <i className='fa fa-star'></i>
                    {props.rating}
                </div>
            </div>
            <p>{props.address.firstLine}, {props.address.city}</p>
            <ul className='card__list'>
                {props.cuisines.map(cuisine => (
                    <li key={cuisine} className='card__label'>{cuisine}</li>
                ))}
            </ul>
        </div>
    );
};

export default Restaurant;