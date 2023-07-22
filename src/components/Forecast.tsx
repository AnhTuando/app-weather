interface Description {
  description: string;

  temp_min: number;
  temp_max: number;
}
const Forecast: React.FC<Description> = ({
  description,
  temp_min,
  temp_max,
}) => {
  return (
    <div className="forecast text-light container bg-light text-dark   py-2  rounded-2 text-center d-flex flex-column gap-2">
      <h2>Forecast</h2>
      <div className="row">
        <div className="max-temp col-md-4">
          <span>Max Temperature: </span>
          <span>{temp_max}</span> <span> C</span>
        </div>
        <div className="min-temp  col-md-4">
          <span>Min Temperature: </span>
          <span>{temp_min}</span> <span> C</span>
        </div>
        <div className="rain  col-md-4">
          Description: <span>{description}</span>
        </div>
      </div>
    </div>
  );
};
export default Forecast;
