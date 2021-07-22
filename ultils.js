
const calculateArea = (length, width) => {
    return length * width;
}
const getDate = () => {
    const date = new Date().getFullYear();
    return date;
}
export {
    calculateArea,
    getDate
}