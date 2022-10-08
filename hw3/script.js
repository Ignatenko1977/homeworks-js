// const userName = prompt("как твое имя");
// console.log(`userName`, userName)
// alert("Hello " + userName + " !")

// let userMoneyAmount = 500;

// const amountToAdd = Number(prompt("How much to add?"));
// userMoneyAmount = userMoneyAmount + amountToAdd;

// alert("Now in your wallet: " + userMoneyAmount);

// const isAdmin = confirm("Are you admin?");
// console.log(`isAdmin`, isAdmin);

// if (isAdmin) {
//     alert("Welcome");
// }

/*-----------Lesson-1-------------------*/


let oneNumber;
oneNumber = Number(prompt(" введите число"));
console.log(`oneNumber`, oneNumber)

let twoNumber;
twoNumber = Number(prompt(" введите число"));
console.log(`twoNumber`, twoNumber)

alert("Вы ввели числа: " + oneNumber + " и " + twoNumber);

if (oneNumber > twoNumber) {
    alert("число " + oneNumber + " больше,чем число " + twoNumber);
} else if (oneNumber < twoNumber) {
    alert("число " + twoNumber + " больше,чем число " + oneNumber);
} else if (oneNumber === twoNumber) {
    alert('Числа равны');
}

/*--------------Lesson-2----------*/

// const currentYears = 2021;

// const userAnswer = Number(prompt("Какой сейчас год?"));
// if (userAnswer === currentYears) {
//     alert("Вы правы!");
// } else {
//     alert("А вот и нет :(");
// }

// const MIN_AGE = 12;
// const visitorAge = Number(prompt("Сколько вам лет?"));
// const isWithParents = confirm("Вы с родителями?");

// if (visitorAge >= MIN_AGE || isWithParents) {
//     console.log("Доступ разрешен!");
// } else {
//     console.log("Возраст слишком мал для посещения.");
// }



let num1 = Number(prompt("первое число"));
console.log(`num1`, num1)

let operator = prompt("выбирите действие (/,+,*,-)");

let num2 = Number(prompt("второе число"));
console.log(`num2`, num2)


switch (operator) {
    case '+':
        alert(num1 + num2);
        break;
    case '-':
        alert(num1 - num2);
        break;
    case '/':
        alert(num1 / num2);
        break;
    case '*':
        alert(num1 * num2);
        break;

    default:

        alert("Такого оператора не существует");


}

// ----------------Lesson_3------------


let visitorAnswer = Number(prompt("Сколько вам лет"));

if ((visitorAnswer >= 12 && visitorAnswer < 18) || (visitorAnswer >= 60 && visitorAnswer <= 80)) {

    let parentalPermission = confirm("Есть ли у вас разрешение от родителей?");

    if (parentalPermission) {
        alert("Доступ разрешен")
    } else {
        alert("Доступ запрещен")
    }
} else if (visitorAnswer < 12 || visitorAnswer > 80) {
    alert("Доступ запрещен")
} else if (visitorAnswer >= 18 && visitorAnswer <= 60) {
    alert("Доступ разрешер")
} else {
    alert("Значение неизвестно")
}