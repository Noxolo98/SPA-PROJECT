import React from 'react';
import nailsImage from '../nail-jpg/nail.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to Our Nail Bar!</h1>
            <img src={nailsImage} alt="Beautiful nails" className="nails-image" />
            <p>Book your appointment today.</p>
        </div>
    );
};

export default Home;

