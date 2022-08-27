import React from 'react';
import LayOut from "../../components/layout";
import {useGetAllNewsQuery} from "../../feature/news/newsApi";
import Loader from "../../components/Loader";
import NewsCard from "../../components/NewsCard";

const AllNews = () => {
    const {data, error, isLoading} = useGetAllNewsQuery();
    if (isLoading) return <Loader />

    return (
        <LayOut>
            <div className='
                sm:p-6
                flex flex-col items-center gap-8
                md:grid grid-cols-2 2lg:grid-cols-3
            '>
                {data.map((news) => {
                    return (
                        <div className='flex justify-center'>
                            <NewsCard news={news}/>
                        </div>
                    )
                })}
            </div>
        </LayOut>
    );
};

export default AllNews;