/**
 * Format price to readable format (by default 2 numbers after point)
 */
export const formatPrice = (number: number, fraction: number = 2): number => {
    return parseFloat(number.toFixed(fraction));
}