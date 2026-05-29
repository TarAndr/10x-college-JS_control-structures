console.log('\t1. დაბეჭდე რიცხვები (მარტივი ნაბიჯები)');
let MIN_NUM = 1;
let MAX_NUM = 20;
for(let i = MIN_NUM; i <= MAX_NUM; ++i) {
    console.log(i);
}

console.log('\n\t2. იპოვე ლუწი რიცხვები');
MIN_NUM = 2;
MAX_NUM = 50;
for(let i = MIN_NUM; i <= MAX_NUM; i += 2) {
    console.log(i);
}

console.log('\n\t3. სარაკეტო უკუთვლა');
MAX_NUM = 10;
let i = MAX_NUM;
while(i) {
    console.log(i--);
}
console.log('Start!');

console.log('\n\t4. რიცხვების ჯამი (აკუმულატორი)');
MIN_NUM = 1;
MAX_NUM = 100;
let sum = 0;
for(let i = MIN_NUM; i <= MAX_NUM; ++i) {
    sum += i;
}
console.log('Summ of all numbers from ' + MIN_NUM + ' to ' + MAX_NUM + ' is ' + sum);

console.log('\n\t5. გამრავლების ტაბულა');
MIN_NUM = 1;
MAX_NUM = 10;
let num = prompt('Input a number: ');
for(let i = MIN_NUM; i <= MAX_NUM; ++i) {
    let result = num * i;
    console.log(`\t\t${num} x ${i} = ${result}`);
}

console.log('\n\t6. დაჟინებული შეკითხვა (პაროლის დაცვა)');
const SECRET = 'js';
let answer;
do{
    answer = prompt('Input the secret word: ');
}while(answer != SECRET)
console.log('Secret word is true.');

console.log('\n\t7. ფაქტორიალის გამოთვლა');
MIN_NUM = 1;
num = prompt('Input a number: ');
let factorial = 1;
for(let i = MIN_NUM; i <= num; ++i) {
    factorial *= i;
}
console.log(`Factorial of ${num} is ${factorial}`);
