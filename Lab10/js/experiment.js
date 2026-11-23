const name = "AniCat";
const age = 20;
const isStudent = true;
const score = "95";

const convertedScore = Number(score);

console.table({
    name: name,
    age: age,
    isStudent: isStudent,
    score: score,
    convertedScore: convertedScore
});

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof score);
console.log(typeof convertedScore);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);