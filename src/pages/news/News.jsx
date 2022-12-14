import React, {useEffect, useState} from 'react';
import LayOut from "../../components/layout";
import {useNavigate, useParams} from "react-router";
import {useGetImagesByIdQuery, useGetNewsByIdQuery} from "../../feature/api/api";
import Loader from "../../components/Loader";
import Image from "../../components/ui/Image";
import Logo from "../../components/Logo";
import {Navigate} from "react-router-dom";
import helpers from "../../helpers";
import CommentsSection from "./CommentsSection";
import {ImageService} from "../../services/image-service";

/*
    api - {
        id: number
        images: Image[]
        part1: string
        part2: string
        title: string
        updatedAt: DateTime
        createdAt: DateTime
    }
*/

const fixDate = (targetDate) => {
    return targetDate.split('T')[0].replace('-',' / ').replace('-',' / ');
}

const News = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [news, setNews] = useState(null);
    const [image, setImage] = useState(null);

    const fetchImage = async () => {
        try {
            const response = await ImageService.findOne(id);
            setImage(response.data);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        if (isNaN(Number(id))) {
            navigate('/error');
        } else {
            fetchImage().catch(console.error)
        }
    },[]);

    const {data, error, isLoading} = useGetNewsByIdQuery(id);
    if (isLoading) return <Loader />
    if (!data) return <Navigate to='/error'/>

    return (
        <LayOut>
            <div className='p-3 sm:p-6 flex justify-center'>
                <div>
                    <div>
                        <div>
                            <h1> {data.title} </h1>
                            <p className='bg-gray-300 text-gray-600 bg-opacity-40 p-2 font-bold w-[116px] rounded'>
                                {fixDate(data.createdAt)}
                            </p>
                        </div>
                    </div>
                    <NewsPart text={data.part1} hasImage={image !== null} image={helpers.convertToImage(image)}/>
                    <Citation />
                    <NewsPart text={data.part2}/>
                    <CommentsSection comments={data.comments} newsId={data.id} />
                </div>
            </div>
        </LayOut>
    );
};

export const NewsPart = ({text, hasImage, image}) => {
    return (
        <div className='2lg:flex items-center justify-center'>
            <p className={`max-w-[600px] w-full p-6`}> {text} </p>
            {hasImage &&
                <Image
                    image={image}
                />
            }
        </div>
    )
}

export const Citation = () => {
    return (
        <div className='w-full bg-citation h-[20vh] relative flex items-center justify-center my-12'>
            <h2 className='flex flex-col items-center'> Always in time <Logo clickable={false}/> </h2>
            <div className='w-full absolute top-0 -z-10 flex'>
                <div className='citation-part bg-gray-200'/>
                <div className='citation-part bg-gray-100'/>
            </div>
        </div>
    )
}

export default News;