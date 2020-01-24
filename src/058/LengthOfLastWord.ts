
export function lengthOfLastWord(s: string): number {
    let words = s.split(" ");
    words = words.filter((word) => word.length !== 0);
    if (words.length === 0) {
        return 0;
    }
    return words[words.length - 1].length;
}