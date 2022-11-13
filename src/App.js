import './App.css';
import DetaileChart from './Component/Detaile/DetaileChart';
import Forecasting from './Component/Forecasting/Forecasting';
import SearchBar from './Component/Search/Searchbar';


function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Forecasting/>
      <DetaileChart/>
    </div>
  );
}

export default App;
