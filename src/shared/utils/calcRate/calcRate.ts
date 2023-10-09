import {formatPrice} from "@/shared/utils/formatPrice";

/**
 * Format price to readable format (by default 2 numbers after point)
 */
const calcRate = (amount:number, rate1: number, rate2: number): number => {
    return formatPrice(amount * (rate1 / rate2));
}

export { calcRate }