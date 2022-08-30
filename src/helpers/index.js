const getNumbersTill = (limit) => {
    let numbers = [];
    for (let i = 0; i < limit; i++) {
        numbers.push(i);
    }

    return numbers;
}

const convertToImage = (image) => {
    return btoa(
        new Uint8Array(image).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
        )
    );
}

const generateSRC = (image) => {
    return `url(data:;base64,${image})`;
}

export default {
    getNumbersTill,
    convertToImage,
    generateSRC
}