import React from 'react';

const Image = ({image, className}) => {
    // TODO remove the placeholder

    return (
        <div
            className={`bg-gray-300 w-full h-[30vh] 2lg:w-[30vw] 2lg:h-[60vh] ${className}`}
        />
    );
};

export default Image;