import React from 'react';
import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <h2 className="text-4xl font-playfair-display text-center underline mt-2 mb-2 font-poppins"> See All Craft Items</h2>
            <Categories></Categories>
        </div>
    );
};

export default Home;