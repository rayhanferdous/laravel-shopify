import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="text-red-500 ">Home component</div>
            <Link to={`/test`}>Test component</Link>
        </div>
    );
};

export default Home;
