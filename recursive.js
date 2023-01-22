const algo = (n) => {
if (n <= 1) return 1;

return algo(n - 1) + algo(n - 2);
}

console.log(algo(5));
