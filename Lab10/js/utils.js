const clamp = (n, min, max) => {
    if (n < min) {
        return min;
    }

    if (n > max) {
        return max;
    }

    return n;
};

console.log(clamp(5, 10, 50));
console.log(clamp(25, 10, 50));
console.log(clamp(80, 10, 50));

const average = (...nums) => {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum / nums.length;
};

console.log(average(10, 20, 30));
console.log(average(5, 15));
console.log(average(2, 4, 6, 8));

const greet = (name = 'Зочин') => {
    return `Сайн байна уу, ${name}!`;
};

console.log(greet("Cat"));
console.log(greet());
console.log(greet("Бат"));

const makeCounter = (start = 0) => {
    let count = start;

    return () => {
        count++;
        return count;
    };
};

const counter1 = makeCounter();
const counter2 = makeCounter(5);

console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

const applyN = (fn, n, x) => {
    let result = x;

    for (let i = 0; i < n; i++) {
        result = fn(result);
    }

    return result;
};

const double = x => x * 2;

console.log(applyN(double, 3, 2));
console.log(applyN(double, 1, 5));
console.log(applyN(double, 0, 10));

const compose = (f, g) => {
    return x => f(g(x));
};

const addFive = x => x + 5;
const multiplyTwo = x => x * 2;

const combined = compose(addFive, multiplyTwo);

console.log(combined(10));