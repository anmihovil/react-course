'use strict'
var nameVar = 'John';
var nameVar = 'Mike'; // In ES6 reasigning variable causes an error

console.log('nameVar', nameVar);

const fullName = 'Antonio Mihovilović';

if(fullName) {
    const firstName = fullName.split(' ')[0];
    const lastName = fullName.split(' ')[1];
    console.log(firstName);
    console.log(lastName);
}
