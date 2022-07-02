import axios from "axios";
import Weatehr from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weatehr
        date="Tuesday"
        time="10:20"
        city="Perth"
        condition="cloudy"
        temp={19}
        humidity={80}
        windspeed={10}
      />
      <footer>
        <p>
          This project was coded by Chie and open-sorced on{" "}
          <a
            href="https://github.com/hayamania/weather-react-app"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
