const rl = require('readline-sync');

console.log('привет! проверим твои знания таблицы умножения');

for (let i = 0; i < 10000; i = i + 1) {

    let number1 = Math.round(Math.random() * 10);
    let number2 = Math.round(Math.random() * 10);
    console.log (number1, 'x', number2) 

    const number =rl.question('your answer?')

    if (number == number1 * number2){
        console.log('вы дали верный ответ ')
    } else {
        console.log('к сожаление вы дали неверный ответ ,верный ответ -',number1*number2,'ваш ответ',number)
    }
}
