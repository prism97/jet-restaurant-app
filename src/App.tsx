import './styles/App.css';
import Restaurant from './components/Restaurant';
import RestaurantProps from './components/Restaurant.types';
import { useState, useEffect } from 'react';
import postcodes from './postcodes';


function App() {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);
  const [postalCode, setPostalCode] = useState<string>(postcodes[0]);

  const url = 'restaurants/enriched/bypostcode/';

  useEffect(() => {
    const fetchRestaurantData = async () => {
      const response = await fetch(url + postalCode);
      const jsonResponse = await response.json();
      setRestaurants(jsonResponse.restaurants.slice(0, 10));
    };
    fetchRestaurantData();

    return () => setRestaurants([]);
  }, [postalCode]);

  return (
    <div className="App">
      <label htmlFor='pc'>Select your postcode</label>
      <select id='pc' value={postalCode}  onChange={(e) => setPostalCode(e.target.value)}>
        {postcodes.map(
          (postcode, index) => <option key={index} value={postcode}>{postcode}</option>
        )}
      </select>
      <h2>Restaurants near postcode "{postalCode}"</h2>
      {restaurants.map((restaurant, index) => <Restaurant key={index} {...restaurant} />)}
    </div>
  );
}


export default App;
