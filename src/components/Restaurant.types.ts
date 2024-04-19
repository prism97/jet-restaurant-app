interface Cuisine {
    name: string;
}

interface Rating {
    starRating: number;
}

interface Address {
    city: string;
    firstLine: string;
    postalCode: string;
}

export default interface RestaurantProps {
    name: string;
    address: Address;
    rating: Rating;
    cuisines: Cuisine[];
}
