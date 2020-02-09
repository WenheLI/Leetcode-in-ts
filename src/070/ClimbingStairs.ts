export const climbStairs = (n: number): number => {
    const table = [1, 1];
    const res = climbHelperDP(n, table);
    return res;
}

// Recursion O(2**n)
function climbHelper(n: number): number {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return climbHelper(n - 1) + climbHelper(n - 2);
    }
}

// DP O(n)
function climbHelperDP(n: number, table: number[]): number {
    if (n == 1 || n == 0) {
        return 1;
    }
    let curr = 2;
    while ( curr <= n) {
        table.push(table[curr - 1] + table[curr - 2]);
        curr += 1;
    }
    return table[n];
}