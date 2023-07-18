import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.png";

function Home() {
    return (
    <div className="home">
        <div className="headerContainer" style={{ backgroundImage: `url(${BannerImage})`}}>
            <h1>Jaswinder Singh</h1>
            <p>PIZZA WEBSITE</p>
        <Link to="/menu">
            <button>ORDER NOW</button>
        </Link>
        </div>
    </div>
    );
}

export default Home;
