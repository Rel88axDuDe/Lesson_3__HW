// first task

// function bananas (num) {
//     if (isNaN(num)) {
//         return 'Error'
//     }else if (num == 1) {
//         return '1 banana'
//     }else{
//         return `${num} bananas`
//     }
// }

// let num = +prompt('Введите число');
// let res = bananas(num);
// alert(res);

// third task - !! сам не дошел, помог ИИ - логику впринципе понял

// function levels(number, level) {
//     let res = 1;
//     for (let i = 0; i < level; i++) {
//         res *= number;
//     }
//     return res;
// }

// let number;
// do {
//     number = +prompt('Введите число')
// } while (isNaN(number) || number == 0);

// let level;
// do {
//     level = +prompt(('Введите степень') || 2);
// } while (isNaN(level) || level == 0);

// let res = levels(number, level)
// alert(res)


//second task

// let number = +prompt('Введите число');
// let result = 0;

// if (isNaN(number) || (number <= 1)) {
//     alert('Вводите числа больше 1, и не буквы, пожалуйста');
//     } else {
//         for (let i = 0; i <= number; i++) {
//             if (i % 2 == 0) {
//                 result += i;
//             }
//         } 
//     }

// console.log('Сумма всех четных чисел до' + ' ' + number + ' ' + 'равна' + ' ' + result);
