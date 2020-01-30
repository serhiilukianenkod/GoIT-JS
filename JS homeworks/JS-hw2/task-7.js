'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  const minLength = 4;
  const maxLength = 16;
  if (login.length >= minLength && login.length <=maxLength) return true; 
  else 
  return false;
};

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) return false;
  else
  return true;
};

const addLogin = function(allLogins, login) {
  if (!isLoginValid(login)){

      console.log('Ошибка! Логин должен быть от 4 до 16 символов');
      return;
  }

  if (!isLoginUnique(allLogins, login)){
    console.log('Такой логин уже используется!');
    return;
  }

  console.log('Логин успешно добавлен!');
  allLogins.push(login);

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'

// console.log(logins);