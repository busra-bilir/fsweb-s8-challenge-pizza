import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Teknolojik Yemekler</h1>
            <p>Kod acıktırır pizza, doyurur</p>
            <Link to="/siparis">
                <button>Sipariş Ver</button>
            </Link>
        </div>
    );
};

export default Home;