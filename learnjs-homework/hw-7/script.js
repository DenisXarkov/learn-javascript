if ("0") {
 alert( 'Привет' ); // да, выведется
}
/*--------------------------------------------------------------------------------*/ 
let value = prompt('Какое "официальное" название JavaScript?', '');
if (value == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}
/*--------------------------------------------------------------------------------*/ 
let num = prompt('Введите число', 0);

if (num > 0) {
alert( 1 );
} else if (num < 0) {
alert( -1 );
} else {
alert( 0 );
}

/*--------------------------------------------------------------------------------*/ 
result = (a + b < 4) ? 'Мало' : 'Много';
/*--------------------------------------------------------------------------------*/ 
let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';