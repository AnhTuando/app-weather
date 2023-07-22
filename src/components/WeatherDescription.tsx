interface Description {
  temp: number;
  description: string;
}

const WeatherDescription: React.FC<Description> = ({ temp, description }) => {
  return (
    <div className="weather-description col-12 col-lg-6 d-flex justify-content-center align-items-center">
      <div className="wrap-items py-3 px-5 bg-light-subtle rounded-2">
        <div className="show-template fs-1 fw-bold ">
          <span>{temp}</span>
          <span> C</span>
        </div>
        <div className="show-description fs-4 fw-medium">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};
export default WeatherDescription;
