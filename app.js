// let fruit = prompt("Please choose valid fruit name")

// let kg = prompt("Kiloqrami daxil edin")

// switch (fruit) {
//     case "alma":
//         console.log("alma");
//         break;

//     default:
//         break;
// }

// let arr = ("12", 5, 3, -4, -5, 6, -7, "99", NaN, undefined, true, false, null);

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] * 1 == arr[i] && arr[i] == "number") {
//         console.log(arr[i]);
//     }
// }

// let arr1 = (12, 5, 3, -4, -5, -6, -7, 99)
// let max = arr1[0];

// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > max) {
//         max = arr1[i];
//     }
// }
// console.log(arr1[i]);

//Fibonacci konsol sira

// function fibonacci(num) {
//     if (num == 1) return 0;
//     if (num == 2) return 1;
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     let i = 2;
//     while (i < num) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//         i += 1;
//     }
//     return num2;
// }
// console.log("Fibonacci(1): " + fibonacci(1));
// console.log("Fibonacci(2): " + fibonacci(2));
// console.log("Fibonacci(3): " + fibonacci(3));
// console.log("Fibonacci(4): " + fibonacci(4));
// console.log("Fibonacci(5): " + fibonacci(5));
// console.log("Fibonacci(6): " + fibonacci(6));
// console.log("Fibonacci(7): " + fibonacci(7));
// console.log("Fibonacci(8): " + fibonacci(8));
// console.log("Fibonacci(5): " + fibonacci(9));
// console.log("Fibonacci(10): " + fibonacci(10));
// console.log("Fibonacci(11):" + fibonacci(11));

//Vurma cedveli

// let number = prompt("Reqem daxil edin: ");
// for (let i = 1; i <= 10; i++) {
//     let pass = i * number;
//     console.log(`${number} * ${i} = ${pass}`);
// }

//Fibonacci reqemler

// var i;
// var number = [0, 1];

// for (i = 2; i <= 10; i++) {
//     number[i] = number[i - 2] + number[i - 1];
//     console.log(number[i]);
// }

// 1-500

// let a = "cut";
// let b = "tek";
// for (let i = 0; i < 500; i++) {
//     if (i % 2 === 0) document.write(i + " ");
// }
// for (let i = 0; i < 500; i++) {
//     if (i % 2 !== 0) document.write(i + " ");
//     console.log((i % 2 === 500) - (i % 2 !== 500));
// }
