const getNumbersTill = (limit) => {
    let numbers = [];
    for (let i = 0; i < limit; i++) {
        numbers.push(i);
    }

    return numbers;
}

export default {
    getNumbersTill
}