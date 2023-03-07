import { useState } from "react"
import "./searchBar.css";
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };      
      return (
        <div>
        <input className="search" type="search" placeholder="Search Event" onChange={handleChange} value={searchInput} />
        </div>);
};
export default SearchBar;

