console.log('Arrow functions file');

const squareArrow = (x) => {
    return x * x;
};

console.log(squareArrow(5));

const extractFirstName = (fullName) => {
    const firstName = fullName.split(' ')[0];
    return firstName;
};

console.log(extractFirstName('Antonio Mihovilović'));
console.log(extractFirstName('Vita Mihovilović'));
console.log(extractFirstName('Željka Mihovilović'));