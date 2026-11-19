function validateName(value) {
    value = value.trim();

    if (value.length < 2 || value.length > 50) {
        return false;
    }

    for (let i = 0; i < value.length; i++) {
        if (value[i] >= '0' && value[i] <= '9') {
            return false;
        }
    }

    return true;
}

console.log(validateName("Cat"));
console.log(validateName("A"));
console.log(validateName("Cat123"));
console.log(validateName("  Cat  "));
console.log(validateName(""));

function validateEmail(value) {
    if (value === "" || value.includes(" ")) {
        return false;
    }

    let pattern = /^[^@]+@[^@]+\.[^@]+$/;

    return pattern.test(value);
}

console.log(validateEmail("cat@gmail.com"));
console.log(validateEmail("hello@yahoo.com"));
console.log(validateEmail("invalidemail"));
console.log(validateEmail("cat gmail.com"));
console.log(validateEmail("cat@gmail"));

function validatePassword(value) {
    if (value.length < 8) {
        return false;
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < value.length; i++) {
        if (/\s/.test(value[i])) {
            return false;
        }

        if (/[a-zA-Zа-яА-ЯёЁ]/.test(value[i])) {
            hasLetter = true;
        }

        if (/[0-9]/.test(value[i])) {
            hasNumber = true;
        }
    }

    return hasLetter && hasNumber;
}

console.log(validatePassword("hello123"));
console.log(validatePassword("12345678"));
console.log(validatePassword("helloworld"));
console.log(validatePassword("hello 123"));
console.log(validatePassword("Монгол123"));

function validateMessage(value) {
    value = value.trim();

    if (value.length < 10 || value.length > 500) {
        return false;
    }

    return true;
}

console.log(validateMessage("Hello, AniCat!"));
console.log(validateMessage("Short"));
console.log(validateMessage(""));
console.log(validateMessage("   This is a valid message.   "));