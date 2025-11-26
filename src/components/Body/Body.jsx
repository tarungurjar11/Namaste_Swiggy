import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import ShimmerCard from "../Generic/ShimmerCard";
import "./Body.css";

const Body = () => {
  // State variable to hold the list of restaurants
  let [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    console.log("Body Component Mounted");
    const data = fetchData();
    data.then((res) => {
      setListOfRestaurants(
        res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    });
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    return json;
  };

  return listOfRestaurants.length === 0 ? (
    <div className="restaurant-list">
      {Array.from({ length: 10 }).map((_, i) => (
        <ShimmerCard key={i} width="18%" />
      ))}
    </div>
  ) : (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div>
        <h2>Restaurants</h2>
        <div className="restaurant-list">
          {listOfRestaurants.map((restaurant) => (
            <RestroCard key={restaurant.info.id} restroData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
