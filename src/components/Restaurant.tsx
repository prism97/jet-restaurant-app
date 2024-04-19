import '../styles/card.css';
import RestaurantProps from './Restaurant.types';


function Restaurant (props : RestaurantProps) {
    const address = `${props.address.firstLine}, ${props.address.city}, ${props.address.postalCode}`;

    return (
        <div className='card'>
            <div className='card__header'>
                <h3>{props.name}</h3>
                <div className='card__label'>
                    <i className='fa fa-star'></i>
                    {props.rating.starRating}
                </div>
            </div>
            <p>{address}</p>
            <ul className='card__list'>
                {props.cuisines.map((cuisine, index) => (
                    <li key={index} className='card__label'>{cuisine.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Restaurant;
