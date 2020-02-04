export function addBinary(a: string, b: string): string {
    let indexA = a.length - 1;
    let indexB = b.length - 1;
    let curry = 0;
    let res = "";
    while (indexB >= 0 || indexA >= 0) {
        const aChar = parseInt(a[indexA] === undefined ? "0" : a[indexA]);
        const bChar = parseInt(b[indexB] === undefined ? "0" : b[indexB]);
        const total = curry + bChar + aChar;
        const remain = total % 2;
        curry = Math.floor(total / 2);
        indexA -= 1;
        indexB -= 1;
        res = remain + res;
    }
    if (curry) {
        res = curry + res;
    }
    return res;
}