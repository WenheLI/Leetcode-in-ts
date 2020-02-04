// O(n)
export const mySqrt = (x: number) => {
    if (x === 0 || x === 1) {
        return x;
    }
    for (let i = 1; i <= x; i++) {
        if(i * i > x) {
            return i - 1;
        }
    }
}