let numbers = [1,2,3,4,5,6,7,8,9,10];

let result = 0;

// //MAP\\
// const doubleNumbers = numbers.map((number) => {
//     return number * 2;
// });

// console.log(doubleNumbers);

// doubleNumbers.forEach((doubleNumber) => {
//     result += doubleNumber
// });
// console.log(result);

//FILTER\\

// const candidates = [
//     {
//         name: "A",
//         score: 70,
//         expectedSalary: 500,
//         prefferedPosition: "Frontend",
//     },
//     {
//         name: "B",
//         score: 40,
//         expectedSalary: 200,
//         prefferedPosition: "Fullstack",
//     },
//     {
//         name: "C",
//         score: 90,
//         expectedSalary: 900,
//         prefferedPosition: "Backend",
//     },
//     {
//         name: "D",
//         score: 80,
//         expectedSalary: 700,
//         prefferedPosition: "Fullstack",
//     },
// ];

// const criteria = {
//     score: 70,
//     expectedSalary: 1000,
//     prefferedPosition: "Backend"
// }

// const passCandidates = candidates.filter((candidate) => {
//     if
//     (candidate.score >= criteria.score && 
//     candidate.expectedSalary <= criteria.expectedSalary && candidate.prefferedPosition === criteria.prefferedPosition
//     ) 
//     return true;

//     return false;
// });

// console.log(passCandidates);

//REDUCE\\
// const sum = numbers.reduce((previous, current) => { // previous & current bisa disingkat menjadi prev & curr
//     return previous + current;
// });

const sum = numbers.reduce((prev, curr) => {
    console.log("prev :", prev);
    console.log("curr:", curr);
    console.log("prev + curr =", prev - curr)
    return prev - curr;
})

console.log(sum)

//FOR EACH\\

// function showNumber(number) {
    
//     console.log(`sekarang nomor ${number}`);

//     result += number;
// }

// numbers.forEach(showNumber);

// console.log(result);

// let doubleNumber = [];

// numbers.forEach((number) =>{
//     doubleNumber.push
// });

// console.log(doubleNumber);




// number = number * 2;\\ line 4 dan 5 ini menghasilkan sama
// number *= 2; \\
// console.log(`sekarang nomor $(number)`);\\ contoh untuk menunjukan nomor sekarang yg diminta di array
// console.log(`sekarang nomor $(number * 2)`);\\ contoh nomor yg dsekarang dikali 2
// console.log(number);
// return number * 2;
// return number;
// showNumber(5) \\ contoh
// console.log(number);
//map
// numbers.map(showNumber);
// console.log(numbers);