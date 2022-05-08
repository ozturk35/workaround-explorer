export const formatNumber = number => {
    let decimalPart = String(Math.floor(number));
    let dotIndex = String(number).indexOf('.');
    const afterDecPoint = (dotIndex === -1) ? '' : String(number).slice(dotIndex);

    for(let i = decimalPart.length - 3; i > 0; i -= 3) {
        decimalPart = decimalPart.slice(0, i) + ',' + decimalPart.slice(i);

    }
    return decimalPart + afterDecPoint;
}
