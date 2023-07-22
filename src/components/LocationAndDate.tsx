interface Location {
  country: string;
}

const LocationAndDate: React.FC<Location> = ({ country }) => {
  return (
    <div className="current-location mt-4">
      <div className="container">
        <div className="row ">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <h1>{country}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocationAndDate;
