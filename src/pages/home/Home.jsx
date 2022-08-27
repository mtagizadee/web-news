import React from 'react';
import LayOut from "../../components/layout";
import Hero from "./Hero";
import Reasons from "./Reasons";
import Carousel from "react-multi-carousel";
import RecentNews from "./RecentNews";

const responsive = {
    all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    }
}

const Home = () => {
    return (
        <LayOut>
            <Hero />
            <Carousel
                responsive={responsive}
                containerClass='p-6 w-full mt-12'
                autoPlay={true}
                showDots={false}
                arrows={false}
                pauseOnHover={false}
                infinite={true}
            >
                {[1,2,3,4,5,6,7,8,9,10].map((num) =>
                    <p key={num} className='text-2xl font-black'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                        eveniet facere impedit ipsum laboriosam non optio provident
                        voluptas.
                    </p>
                )}
            </Carousel>
            <Reasons />
            <RecentNews />
        </LayOut>
    );
};

export default Home;