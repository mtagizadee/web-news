import React from 'react';
import {motion} from "framer-motion";

const variants = {
    hidden: {
        opacity: 0,
        height: 0
    },
    show: {
        opacity: 1,
        height: 'auto'
    }
}

const Modal = ({children, modal, setModal}) => {

    const onBgClick = () => {
        setModal(false);
    }

    const onContentClick = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            {modal &&
                <div onClick={onBgClick} className='w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-30 center-content z-50'>
                    <motion.div variants={variants} initial='hidden' animate='show' onClick={onContentClick}>
                        {children}
                    </motion.div>
                </div>
            }
        </>
    );
};

export default Modal;