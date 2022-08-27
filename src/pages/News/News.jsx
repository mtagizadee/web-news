import React, {useEffect} from 'react';
import LayOut from "../../components/layout";
import {useNavigate, useParams} from "react-router";
import {useGetNewsByIdQuery} from "../../feature/news/newsApi";
import Loader from "../../components/Loader";

const News = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (isNaN(Number(id))) {
            navigate('/error');
        }
    },[]);

    const {data, error, isLoading} = useGetNewsByIdQuery(id);

    if (isLoading) return <Loader />
    if (!data) navigate('/error');

    return (
        <LayOut>
          News
        </LayOut>
    );
};

export default News;