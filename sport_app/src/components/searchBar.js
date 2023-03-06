import { useState } from "react"
import "./searchBar.css";
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };      
      return (<div className="container">
        <div className="box">
        <p className="header title">Sporting Adda</p>
        <input className="header search" type="search" placeholder="Search Event" onChange={handleChange} value={searchInput} />
        </div>
    </div>);
};
export default SearchBar;

