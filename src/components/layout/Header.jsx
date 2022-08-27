import React from 'react';
import Logo from "../Logo";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className='fixed w-full flex justify-center p-6 top-0 bg-white z-30'>
            <div className='flex items-center justify-evenly w-full max-w-[1600px]'>
                <Logo clickable={true}/>
                <NavBar />
                <div className='font-bold flex items-center justify-between w-[40vw] max-w-[140px] 2xl:max-w-[180px] 2xl:text-xl'>
                    <button> Log in </button>
                    <button className='border-2 border-gray-200 py-1 px-3 rounded'> Sign Up </button>
                </div>
            </div>
        </header>
    );
};

export default Header;