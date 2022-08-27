import React from 'react';
import {AnimatePresence, motion} from "framer-motion"

const text = {
    hidden: {
        opacity: 0,
        marginLeft: 0,
        marginBottom: 0
    },
    animate: {
        opacity: 1,
        marginLeft: '1.5em',
        marginBottom: 50,
        transition: {
            duration: 0.5
        }
    }
}

const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: 0.5,
            staggerChildren: 0.35,
        }
    }
}

const image = {
    hidden: {
        opacity: 0,
        y: 0
    },
    show: {
        opacity: 1,
        y: -20,
    }
}

const Hero = () => {
    return (
        <div className='mt-6 overflow-hidden'>
            <motion.div
                variants={text}
                initial='hidden'
                animate='animate'
                className='text-[6vw] sm:text-[5vw] md:text-[4vw] xl:text-[3vw] font-black'
            >
                <p> News are everywhere, everyday, everyone... </p>
                <p> Be in focus with life. Always in time </p>
            </motion.div>
            <div className='relative'>
                <motion.div whileInView={{ scale: 1.1 }} className='w-full h-[80vh] bg-cover bg-no-repeat bg-center bg-home'/>
                <motion.div
                    variants={container}
                    initial='hidden'
                    animate='show'
                    whileInView={{ scale: 1.1 }}
                    className='shadow flex flex-col justify-evenly items-center lg:flex-row'
                >
                    <HeroParagraph className='lg:top-24'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                        cumque distinctio expedita facilis
                    </HeroParagraph>
                    <HeroParagraph className='' >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                        cumque distinctio expedita facilis
                    </HeroParagraph>
                    <HeroParagraph className='lg:top-12'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                        cumque distinctio expedita facilis
                    </HeroParagraph>
                </motion.div>
            </div>
        </div>
    );
};

export const HeroParagraph = ({className,children}) => {
    return (
        <motion.div
            variants={image}
            className={`relative max-w-[300px] bg-cover bg-center bg-no-repeat ${className}`}
        >
            <p className='text-white font-bold text-xl p-3'> {children} </p>
        </motion.div>
    );
}

export default Hero;