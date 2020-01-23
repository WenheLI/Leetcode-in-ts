export const countAndSay = (n: number): string => {
    if (n === 1) {
        return "1";
    } else {
        return countGenerator(countAndSay(n - 1));
    }
};

function countGenerator(s: string): string {
    let count = 0;
    let res = "";
    for (let i = 0; i < s.length; i++) {
        let nextChar = s.charAt(i + 1);
        let currChar = s.charAt(i);
        if (nextChar === currChar) {
            count += 1;
        } else {
            res += `${count + 1}${currChar}`;
            count = 0;
        }
    }
    return res;

}
