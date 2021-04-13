// №3

// let a = Math.trunc(-100 + Math.random()*(100+100));
// console.log(a);
// let b = Math.trunc(-100 + Math.random()*(100+100));
// console.log(b);

// if (a>=0 & b>=0) {
//     console.log(a-b);
// } else if (a<=0 & b<=0) {
//     console.log(a*b);
// } else {
//     console.log(a+b);
// }

// №4

// const RANDOM_MIN = 0;
// const RANDOM_MAX = 15;

// let a = getRandom(RANDOM_MIN, RANDOM_MAX);
// alert("Случайное число = " + a);

// function getRandom(min, max) {
//     return Math.trunc(min + Math.random()*(max-min));
// }

// function getNumber(x) {
//     let str = "";
//         switch (x) {
//             case 0: case 1: case 2: case 3: case 4: case 5:
//             case 6: case 7: case 8: case 9: case 10:
//             case 11: case 12: case 13: case 14: case 15:
//                 while (x<RANDOM_MAX) {
//                     x++; str+=x; str+=" ";
//                 }
//             alert(str);
//             break;
//         }
// }

// getNumber(a);

//№5

// let a = Math.trunc(-100 + Math.random()*(100+100)); 
// let b = Math.trunc(-100 + Math.random()*(100+100));
// function summery(a,b) {return a+b;}
// function difference(a,b) {return a-b;}
// function multiplication(a,b) {return a*b;}
// function quotient(a,b) {
//     if (b!==0) {
//         return a/b;
//     }
// }

// alert("Сумма " +a+ " и " +b+ " равна " + summery(a, b));
// alert("Разность " +a+ " и " +b+ " равна " + difference(a, b));
// alert("Произведение " +a+ " и " +b+ " равно " + multiplication(a, b));
// alert("Частное " +a+ " и " +b+ " равно " + quotient(a, b));

//№6 

// let arg1 = Math.trunc(-100 + Math.random()*(100+100));
// let arg2 = Math.trunc(-100 + Math.random()*(100+100));

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case "сумма": case "Сумма": case "сложить": case "Сложить": 
//         alert("Сумма чисел " +arg1+ " и " +arg2+ " равна " +(arg1 + arg2));
//         break;
//         case "разность": case "Разность": case "вычитание": case "Вычитание": case "отнять": case "Отнять":
//         alert("Разность чисел " +arg1+ " и " +arg2+ " равна " +(arg1 - arg2));
//         break;
//         case "произведение": case "Произведение": case "умножить": case "Умножить": 
//         alert("Произведение чисел " +arg1+ " и " +arg2+ " равно " +(arg1 * arg2));
//         break;
//         case "частное": case "Частное": case "деление": case "Деление": 
//         alert("Частное чисел " +arg1+ " и " +arg2+ " равно " +(arg1 / arg2));
//         break;
//     }
// }

// operation = prompt("Введите операцию для двух случайных чисел на русском языке");
// mathOperation(arg1, arg2, operation);

//№8

// let current = 1;
// function power(val, pow) {
//     current*=val;    
//     temp = current;
//     if (pow>1) {
//         temp = power(val, pow-1);
//     }
//     alert(current);
// }
// let val = +prompt("Введите число");
// let pow = +prompt("Введите степень");
// power(val, pow);