import axios from "axios";
import Weatehr from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weatehr
        date="Tuesday"
        time="10:20"
        city="New York"
        condition="cloudy"
        temp={19}
        humidity={80}
        windspeed={10}
      />
    </div>
  );
}

export default App;
