import { Link } from "react-router-dom";

function HomePageContent(){
    return (
        <>
            <h1>Home</h1>
            <Link className="btn" to="/new-device">Add device</Link>
            <Link className="btn" to="/devices">Show devices</Link>
        </>
    )
}

export default HomePageContent;