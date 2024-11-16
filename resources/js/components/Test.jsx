import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
    return (
        <div>
            <div className="text-blue-500 ">Test component</div>
            <Link to={`/`}>Home component</Link>
        </div>
    );
};

export default Test;
