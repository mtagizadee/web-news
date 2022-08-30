import React from 'react';
import helpers from "../../helpers";

const Image = ({image, className}) => {
    return (
        <div
            className={`bg-gray-300 w-full h-[30vh] 2lg:w-[30vw] 2lg:h-[60vh] bg-cover bg-center ${className}`}
            style={{
                backgroundImage: helpers.generateSRC(image)
            }}
        />
    );
};

export default Image;