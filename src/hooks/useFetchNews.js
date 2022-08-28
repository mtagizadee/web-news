import React from 'react';
import {useGetImagesByIdQuery, useGetNewsByIdQuery} from "../feature/api/newsApi";

const useFetchNews = (id) => {
    const newsResponse = useGetNewsByIdQuery(id);
    const imagesResponse = useGetImagesByIdQuery(1);

    return {
        news: newsResponse.data,
        image: imagesResponse.data,
        isLoading: newsResponse.isLoading || imagesResponse.isLoading
    }
};

export default useFetchNews;