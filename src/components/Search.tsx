interface Input  {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
const Search: React.FC<Input> = ({ value, onKeyPress, onChange }) => {
  return (
    <div className="search-components mt-5 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className=" search-wrap rounded-4 col-10 col-lg-8 bg-light py-2 px-4 d-flex gap-2  align-items-center">
            <span>
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="search-input p-2 border border-0 w-100"
              placeholder="Your Country"
              value={value}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
