import './styles/App.css';
import Restaurant from './components/Restaurant';
import RestaurantProps from './components/Restaurant.types';
import { useState, useEffect } from 'react';


function App() {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  const postcode = 'EC4M7RF';
  const url = `restaurants/enriched/bypostcode/${postcode}`;

  const fetchRestaurantData = async () => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    setRestaurants(jsonResponse.restaurants.slice(0, 10));
  };

  useEffect(() => {
    fetchRestaurantData();

    return () => setRestaurants([]);
  }, []);

  return (
    <div className="App">
      {restaurants.map((restaurant, index) => <Restaurant key={index} {...restaurant} />)}
    </div>
  );
}


export default App;
