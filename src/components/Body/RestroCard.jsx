import "./Body.css";
import { IMG_CDN_URL } from "../../utils/constants";
const RestroCard = (props) => {
    const { restroData } = props;

    return (
        <div className="restro-card">
            <img className="restro-image" src={IMG_CDN_URL + restroData.info.cloudinaryImageId} alt="Restaurant" />
            <h2>{restroData.info.name}</h2>
            <p>{restroData.info.costForTwo}</p>
            <p>Rating: {restroData.info.avgRating}</p>
            <p>Cuisine: {restroData.info.cuisines.join(", ")}</p>
            <p>Delivery Time: {restroData.info.sla.deliveryTime} mins</p>
        </div>
    );
};

export default RestroCard;