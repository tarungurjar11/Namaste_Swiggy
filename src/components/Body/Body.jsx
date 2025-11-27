import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import ShimmerCard from "../Generic/ShimmerCard";
import { Link } from "react-router-dom";
import "./Body.css";
import { SWIGGY_URL } from "../../utils/constants";
const Body = () => {
  // State variable to hold the list of restaurants
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect - fetch data");
    const data = fetchData();
    data.then((res) => {
      const restros =
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(restros);
      setFilteredRestaurants(restros);
    });
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      SWIGGY_URL
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    return json;
  };

  return (
    <div className="body">
      <div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            value={searchText}
            placeholder="Search for restaurants..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("search", searchText);
              const data = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurants(
              filteredRestaurants.filter((res) => res.info.avgRating > 4.2)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div>
        {listOfRestaurants.length === 0 ? (
          <div className="restaurant-list">
            {Array.from({ length: 10 }).map((_, i) => (
              <ShimmerCard key={i} width="18%" />
            ))}
          </div>
        ) : (
          <div>
            <h2>Restaurants</h2>
            <div className="restaurant-list">
              {filteredRestaurants.map((restaurant) => (
                <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
                  <RestroCard restroData={restaurant} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
