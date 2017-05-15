// alert("test");
'use strict';
  var arr = [];
  for (var i = 0; i < 5; i++) {
  arr[i] = prompt ('введите имя нового пользователя', '');
  }

  var yesNo = 0;
  var login = prompt('введите ваше имя');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === login) {
      yesNo = 1;
    }
    else {
    }
  }

if (yesNo > 0) {
  alert(login + ', вы успешно вошли');
}
else {
  alert('hasta la vista, baby...');
}



exponentiation()
function exponentiation(a, b) {
  var a = prompt('enter a hole number');
  var b = prompt('enter an exponent');
  var c = Math.pow(Math.round(a), Math.round(b));
  console.log(c);
}
