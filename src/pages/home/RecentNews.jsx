import React, {useEffect} from 'react';
import Carousel from "react-multi-carousel";
import NewsCard from "../../components/NewsCard";
import Loader from "../../components/Loader";
import {useGetAllNewsQuery} from "../../feature/news/newsApi";

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1330 },
        items: 3,
    },
    laptop: {
        breakpoint: { max: 1024, min: 930 },
        items: 2,
    },
    tablet: {
        breakpoint: { max: 930, min: 720 },
        items: 1.5,
    },
    mobile: {
        breakpoint: { max: 720, min: 0 },
        items: 1,
    }
}

const RecentNews = () => {
    const { data, error, isLoading } = useGetAllNewsQuery();
    if (isLoading) return <Loader />

    return (
        <div className='mt-24 p-12 bg-gray-200'>
            <h1 className='home-title'> Recent news </h1>
            <Carousel
                responsive={responsive}
                arrows={false}
                showDots={false}
                autoPlay={true}
                infinite={true}
                swipeable={true}
            >
                {data.map((news) => {
                    return <NewsCard news={news}/>
                })}
            </Carousel>
        </div>
    );
};

export default RecentNews;