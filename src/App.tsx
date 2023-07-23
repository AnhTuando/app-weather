import { useState, useEffect } from "react";
import { CSSProperties } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cloud from "./assets/cloud.jpg";

import Search from "./components/Search";
import LocationAndDate from "./components/LocationAndDate";
import TotalDescription from "./components/TotalDescription";
import Forecast from "./components/Forecast";

interface WeatherData {
  name: string;

  sunrise: string;
  visibility: number;
  sunset: string;
  temp: number;
  wind_speed: number;
  humidity: number;
  clouds: number;
  temp_min: number;
  temp_max: number;
  description: string;
}
function App() {
  const apiKey = "4cbb8779d8eaad00a479a6c4b4a826d6";

  const [city, setCity] = useState("Hanoi");

  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData>({
    name: "",

    sunrise: "",
    sunset: "",
    temp: 0,
    humidity: 0,
    visibility: 0,
    wind_speed: 0,
    clouds: 0,
    temp_min: 0,
    temp_max: 0,
    description: "",
  });
  // Search input value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  // Hanlde Enter Value Input
  const handleEnterInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setCity(event.currentTarget.value);
    }
  };
  const style: CSSProperties = {
    backgroundImage: `url(${Cloud})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100vw",
    position: "fixed",

    top: 0,
    left: 0,
    zIndex: -1,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        const apiData: WeatherData = {
          name: response.data.name,

          temp: response.data.main.temp - 273.15,
          visibility: response.data.visibility,
          sunrise: `${new Date(
            response.data.sys.sunrise * 1000
          ).getHours()} : ${new Date(
            response.data.sys.sunrise * 1000
          ).getMinutes()}`,
          sunset: `${new Date(
            response.data.sys.sunset * 1000
          ).getHours()} : ${new Date(
            response.data.sys.sunset * 1000
          ).getMinutes()}`,

          humidity: response.data.main.humidity,
          wind_speed: response.data.wind.speed,
          clouds: response.data.clouds.all,
          temp_min: response.data.main.temp_min - 273.15,
          temp_max: response.data.main.temp_max - 273.15,
          description: response.data.weather[0].description,
        };
        setWeatherData(apiData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
  }, [city]);

  return (
    <div className="app" style={style}>
      <div className="container">
        <div className="row gap-3">
          <Search
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleEnterInput}
          />
          <LocationAndDate country={weatherData.name} />
          <TotalDescription
            temp={Number(weatherData.temp.toFixed(0))}
            visibility={weatherData.visibility}
            clouds={weatherData.clouds}
            humidity={weatherData.humidity}
            sunrise={weatherData.sunrise}
            sunset={weatherData.sunset}
            wind_speed={weatherData.wind_speed}
            description={""}
          />
          <Forecast
            temp_min={weatherData.temp_min}
            temp_max={weatherData.temp_max}
            description={weatherData.description}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
