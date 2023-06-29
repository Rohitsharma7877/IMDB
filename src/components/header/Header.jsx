import React, { useState } from "react";
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {

  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search or other actions with the searchValue
    console.log("Search value:", searchValue);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Country");

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Perform filtering or other actions based on the selected option
    console.log("Selected option:", option);
  };

  return (
    <div className='header'>
        <div className='headerLeft'>
        <Link to='/'><img className='header__icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt='logo'/></Link>
       <div className="search-bar">
       <form className="search-bar"  onSubmit={handleSearchSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearchInputChange}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
       </div> 


       <div className="filter-button- start">
       <div className={`dropdown-filter ${isOpen ? "open" : ""}`}>
      <button className="filter-button" onClick={toggleDropdown}>
        {selectedOption}
        <i className={`arrow-icon ${isOpen ? "up" : "down"}`} />
      </button>
      {isOpen && (
        <ul className="options-list">
          {/* <li
            className={`option ${selectedOption === "Country" ? "active" : ""}`}
            onClick={() => handleOptionSelect("Country")}
          >
            Country
          </li> */}
          <li
            className={`option ${selectedOption === "Australia" ? "active" : ""}`}
            onClick={() => handleOptionSelect("Australia")}
          >
            Australia
          </li>
          <li
            className={`option ${selectedOption === "Germany" ? "active" : ""}`}
            onClick={() => handleOptionSelect("Germany")}
          >
            Germany
          </li>
          <li
            className={`option ${selectedOption === "USA" ? "active" : ""}`}
            onClick={() => handleOptionSelect("USA")}
          >
            USA
          </li>
          <li
            className={`option ${selectedOption === "Italy" ? "active" : ""}`}
            onClick={() => handleOptionSelect("Italy")}
          >
            Italy
          </li>
          <li
            className={`option ${selectedOption === "Romania" ? "active" : ""}`}
            onClick={() => handleOptionSelect("Romania")}
          >
            Romania
          </li>
        </ul>
      )}
    </div>
       </div>

        <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>

        </div>
    </div>
  )
}

export default Header