import hero from "../src/assets/hero.svg";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <img className="pt-14" src={hero} alt="hero-image" />
      <SearchBar />
    </div>
  );
}

export default App;
