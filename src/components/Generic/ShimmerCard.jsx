
import "./Shimmer.css";
export default function ShimmerCard({ height = "400px", width = "200px" }) {
    console.log(height, width);
    return (
        <div className="shimmer-card" style={{height: height, width: width}}>
            <div className="shimmer-image"></div>
        </div>
    );
}