import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const LayOut = ({children}) => {
    return (
        <div className='font-main'>
            <Header />
            <main id="main" className='mt-20 flex justify-center'>
                <div className='w-full max-w-[1600px]'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LayOut;