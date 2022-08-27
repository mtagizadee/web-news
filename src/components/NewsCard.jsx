import React, {memo} from 'react';

const NewsCard = memo(({news}) => {
    return (
        <div className='min-w-[200px] w-full max-w-[400px] bg-gray-300 rounded-2xl'>
            <div>
                <div className='relative'>
                    <div className={`rounded-2xl h-[35vh] w-full bg-gray-300 bg-cover bg-center`}/>
                    <div className='shadow'/>
                    <p className='absolute bottom-0 text-white text-2xl p-3 font-bold bg-black w-full bg-opacity-50'> {news.title} </p>
                </div>
            </div>
            <div  className='p-4'>
                <p className='mb-3'> {news.part1.slice(0,300)}... </p>
                <button className='bg-gray-400 bg-opacity-70 py-2 px-4 rounded text-gray-600'> Learn more </button>
            </div>
        </div>
    );
});

export default NewsCard;