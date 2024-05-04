import React from 'react';

const Slider = () => {
    return (
        <div className="carousel container mx-auto w-full rounded-2xl ">
        <div id="slide1" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/K51ndZM/slider.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle text-white">❮</a>
                <a href="#slide2" className="btn btn-circle text-white">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url( https://i.ibb.co/wLMtDhy/maxresdefault.jpg )' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
              
                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle text-white">❮</a>
                <a href="#slide3" className="btn btn-circle text-white">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/2YvFYDY/slider1.jpg)' }}>
                <div className="hero-overlay bg-opacity-75"></div>
                <div className="hero-content text-center text-neutral-content">

                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle text-white">❮</a>
                <a href="#slide1" className="btn btn-circle text-white">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Slider;