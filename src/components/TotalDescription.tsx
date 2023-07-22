import DetailDescription from "./DetailDescription";
import WeatherDescription from "./WeatherDescription";
interface Description {
  visibility: number;
  clouds: number;
  wind_speed: number;
  humidity: number;
  sunrise: string;
  sunset: string;
  temp: number;
  description: string;
}
const TotalDescription: React.FC<Description> = ({
  visibility,
  clouds,
  wind_speed,
  humidity,
  sunrise,
  sunset,
  temp,
  description,
}) => {
  return (
    <div className="description my-3">
      <div className="container">
        <div className="row d-flex">
          <WeatherDescription temp={temp} description={description} />
          <DetailDescription
            visibility={visibility}
            clouds={clouds}
            humidity={humidity}
            sunrise={sunrise}
            sunset={sunset}
            wind_speed={wind_speed}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalDescription;
