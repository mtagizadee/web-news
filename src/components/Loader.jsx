import React from 'react';
import Logo from "./Logo";

const Loader = () => {
    return (
        <div className='w-screen h-screen bg-white fixed flex items-center justify-center'>
            <Logo clickable={false} />
        </div>
    );
};

export default Loader;