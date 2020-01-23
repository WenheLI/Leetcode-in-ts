export function strStr(haystack: string, needle: string): number {
    const windowSize = needle.length;
    const strSize = haystack.length;
    if (windowSize === 0) {
        return 0;
    } else if (strSize < windowSize) {
        return -1;
    } else {
        for (let i = 0; i <= strSize - windowSize; i++) {
            if (haystack.substr(i, windowSize) === needle) {
                return i;
            }
        }
    }
    return -1;
}