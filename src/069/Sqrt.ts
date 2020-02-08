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

export const mySqrtBinary = (x: number) => {
    let left = 1;
    let right = Math.floor(x / 2);
    if (x === 0) {
        return 0
    } else if (x < 4) {
        return 1;
    } else {
        while (left < right) {
            let mid = Math.floor((left + right + 1) / 2);
            const sq = mid * mid;
            if (sq > x) {
                right = mid - 1;
            } else {
                left = mid;
            }
        }

        return left;
    }
}

export const mySqrtNewton = (x: number) => {
    if (x === 0) {
        return 0;
    }
    let curr = 1;
    while (true) {
        let pre = curr;
        curr = (curr + x / curr) / 2;
        if (Math.abs(curr - pre) < Number.EPSILON) {
            return Math.floor(curr);
        }
    }
}