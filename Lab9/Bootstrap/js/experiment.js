const name = "AniCat";
const age = 20;
const isStudent = true;
const score = "95";

// Type conversion
const convertedScore = Number(score);

// Display variables in a table
console.table({
    name: name,
    age: age,
    isStudent: isStudent,
    score: score,
    convertedScore: convertedScore
});

// Check data types
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof score);
console.log(typeof convertedScore);

// Floating-point experiment
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);