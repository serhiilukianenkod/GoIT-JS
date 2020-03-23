'use strict';

const categories = [
  ...document.getElementById('categories').querySelectorAll('.item'),
];
console.log(`В списке ${categories.length} категории.`);

for (let categorie of categories) {
  const categorieHeading = categorie.querySelector('h2').textContent;
  const categorieElements = categorie.querySelectorAll('li');
  console.log(`Категория: ${categorieHeading}`);
  console.log(`Количество элементов: ${categorieElements.length}`);
}
