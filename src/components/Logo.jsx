import React, {memo, useCallback} from 'react';
import {useNavigate} from "react-router";

const Logo = memo(({clickable}) => {
    const navigate = useNavigate();
    const onClick = clickable? useCallback(() => {
        navigate('/');
    },[]) : undefined;

    return (
        <p onClick={onClick} className={`font-black text-xl  2xl:text-[2rem] ${clickable && 'hover:cursor-pointer'}`}> inews </p>
    );
});

export default Logo;