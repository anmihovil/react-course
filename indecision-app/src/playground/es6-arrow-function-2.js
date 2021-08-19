

// const add = (a,b) => {
//     console.log(arguments); 
//     return a + b;
// }

// console.log(add(55,1,101));

// Map function modifies output without changing content of the array taken as argument!
const user = {
    name: 'Andrew Mead',
    cities: ['Philadelphia', 'New York', 'Dublin', 'Boston'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!'); 
    }
};

let multiplier = {
    numbers: [3, 6, 9],
    multiplyBy: 2,
    numProd: [],
    multiply() {
        this.numbers.forEach((element) => {
            this.numProd.push(element * this.multiplyBy);
        });
    },
    multiplyMap() {
        return this.numbers.map((element) => element * this.multiplyBy );
    }
}
 
console.log(user.printPlacesLived());
multiplier.multiply();
console.log(multiplier.numProd);
console.log(multiplier.multiplyMap());