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

  return (
    <div className="App">
        <Restaurant {...restaurantData} />
    </div>
  );
}


export default App;
