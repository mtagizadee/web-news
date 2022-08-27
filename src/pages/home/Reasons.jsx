import React from 'react';
import {ReactComponent as Search} from "../../assets/svg/search.svg";
import {ReactComponent as Watch} from "../../assets/svg/watch.svg";
import {ReactComponent as Forum} from "../../assets/svg/forum.svg";
import {motion} from "framer-motion";

const image = {
    hidden: {
        opacity: 0,
        x: 0
    },
    whileInView: {
        opacity: 1,
        x: -10
    },
}

const animation = {
    variants: image,
    initial: 'hidden',
    whileInView: 'whileInView'
}

const Reasons = () => {
    return (
        <div className='p-12 bg-gray-200 mt-32 relative'>
            <h1 className='home-title'> Join our community </h1>
            <div className='bg-gray-300 bg-opacity-50 max-w-[900px] flex flex-col 2sm:grid grid-cols-2 2md:grid-cols-3 p-6'>
                <Reason
                    title='Search'
                    icon={<Search />}
                >
                    Find news with our search and filter system
                </Reason>
                <Reason
                    title='Up-to-date'
                    icon={<Watch />}
                >
                    We always post only up-to-date and trustful news
                </Reason>
                <Reason
                    title='Forum'
                    icon={<Forum />}
                >
                    We are not only news page but also a forum, so you can
                    share your opinion in comment sections
                </Reason>
            </div>
            <>
                <motion.div { ...animation } className='reasons-image bg-people bg-cover bg-center'/>
                <motion.div { ...animation } className='reasons-image bg-gray-700 bg-opacity-30'/>
            </>
        </div>
    );
};

export const Reason = ({title, children, icon}) => {
    return (
        <div className='bg-gray-300 max-w-[220px] p-6 md:ml-6 mt-6 2md:relative bottom-[5em] rounded-xl'>
            <div className='flex items-center'>
                <div className='mr-1'> {icon} </div>
                <p className='font-bold text-lg'> {title} </p>
            </div>
            <p className='max-w-[200px] p-1'> {children} </p>
        </div>
    );
}

export default Reasons;