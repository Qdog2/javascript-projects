function recursiveFactorial(n) {
    if (n === 1) {
        return n;
    }
    return n * recursiveFactorial(n - 1);
}