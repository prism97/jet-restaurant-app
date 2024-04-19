import './styles/App.css';
import Restaurant from './components/Restaurant';


function App() {
  const address = {
    city: "London",
    firstLine: "5-9 Great Eastern Street",
  };

  const restaurantData = {
    name: 'Fat Hippo - Shoreditch',
    address: address,
    rating: 4.4,
    cuisines: ['Burgers', 'American', 'Deals']
  };

  const postcode = 'EC4M7RF';
  const url = `restaurants/enriched/bypostcode/${postcode}`;

  const fetchRestaurantData = async () => {
    const res = await fetch(url);
    const jsonRes = await res.json();
    console.log(jsonRes['restaurants'].slice(0, 10));
  };

  fetchRestaurantData();

  return (
    <div className="App">
        <Restaurant {...restaurantData} />
    </div>
  );
}


export default App;
