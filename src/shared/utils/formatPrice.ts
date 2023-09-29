export const formatPrice = (number: number, fraction: number = 2): number => {
    return parseFloat(number.toFixed(fraction));
}