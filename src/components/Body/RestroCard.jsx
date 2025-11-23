import "./Body.css";
const RestroCard = (props) => {
    const { restroData } = props;
    const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    return (
        <div className="restro-card">
            <img className="restro-image" src={url + restroData.info.cloudinaryImageId} alt="Restaurant" />
            <h2>{restroData.info.name}</h2>
            <p>{restroData.info.description}</p>
            <p>Rating: {restroData.info.avgRating}</p>
            <p>Cuisine: {restroData.info.cuisines.join(", ")}</p>
        </div>
    );
};

export default RestroCard;