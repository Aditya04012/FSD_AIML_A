import React from "react";
import { Link } from "react-router-dom";
function home(){
    return (
        <div>
          
            <ul>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/stopwatch">stopwatch</Link></li>
            </ul>
        </div>
    );
}
export default home;