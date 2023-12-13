import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <h3 >That page cannot be found</h3>
            <Link to="/"><button className="gohome">Back to the homepage...</button></Link>
        </div>
    );
}

export default NotFound;