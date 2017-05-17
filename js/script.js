'use strict';

autorisation ();

function autorisation () {
  var arr= [];
  for (var i = 0; i < 5; i++) {
  arr[i] = prompt ('введите имя нового пользователя', '');
  }

  var yesNo = 0;
  var login = prompt('введите ваше имя');

  if (login === null) {
    alert('недопустимое имя пользователя');
    return;
}
else {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === login) {
      yesNo = 1;
    }
    else {
    }
  }
}
if (yesNo > 0) {
  alert(login + ', вы успешно вошли');
}
else {
  alert('hasta la vista, baby...');
}
}

var a = prompt('enter a base');
var n = prompt('enter an exponent');
var test = {
  x: a
}

for (var i = 0; i < (n-1); i++) {
  calculation ();
}
function calculation () {
  test.x = test.x * a;
}
console.log('результат вычислений: ' + test.x);
