'use strict';

import {
    users
} from './users.js';

//-------------task1------------
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
/* [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]*/

//-------------task2------------
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//-------------task3------------
const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//-------------task4------------
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//-------------task5------------
const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//-------------task6------------
const getUsersWithAge = (users, min, max) => users.filter(user => (user.age >= min && user.age <= max));

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//-------------task7------------
const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

//-------------task8------------
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.some(friend => friend === friendName)).map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//-------------task9------------
const getNamesSortedByFriendsCount = users => [...users].sort((prev, next) => prev.friends.length - next.friends.length).map(user => user.name);

// console.log(users);
// console.log(getUserNames(users));

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//-------------task10------------
const getSortedUniqueSkills = users => {
    const arr = users.reduce(((result, user) => result = [...result, ...user.skills]), []).sort();
    const result = [];
    arr.forEach(el => {
        if (!result.includes(el)) result.push(el)
    });
    return result;
};

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 
'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]*/