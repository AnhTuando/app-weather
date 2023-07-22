interface Description {
  visibility: number;
  sunrise: string;
  sunset: string;
  clouds: number;
  wind_speed: number;
  humidity: number;
}
const DetailDescription: React.FC<Description> = ({
  visibility,
  clouds,
  wind_speed,
  humidity,
  sunrise,
  sunset,
}) => {
  return (
    <>
      <div className="detail-description col-12 col-lg-6 fs-5 bg-light d-flex flex-column rounded-2 p-3 gap-2 mt-4">
        <div className="row d-flex">
          <div className="visibility col-4">
            <span>
              <i className="bi bi-eye"></i>
            </span>
            <span> {visibility}</span>
          </div>
          <div className="wind-wrap col-4">
            <div className="title">Wind</div>
            <div className="wind">
              <span>{wind_speed}</span> <span>mph</span>
            </div>
          </div>
          <div className="sunrise col-4">
            <div>Sunrise</div>
            <div>{sunrise}</div>
          </div>
        </div>
        <div className="row  d-flex">
          <div className="clouds col-4">
            <span>
              <i className="bi bi-cloud"></i>
            </span>
            <span> {clouds}</span>{" "}
          </div>
          <div className="wet-wrap col-4">
            <div className="title">Rain</div>
            <div className="wet">
              <span>{humidity}</span> <span>%</span>
            </div>
          </div>
          <div className="sunrise col-4">
            <div>Sunset</div>
            <div>{sunset}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailDescription;
