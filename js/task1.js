const ulCategories = document.querySelectorAll('#categories > li.item')
console.log(`У списку ${ulCategories.length} категорії.`)
ulCategories.forEach(category => console.log(`Категорія: ${category.querySelector('h2').innerHTML}
Кількість елементів: ${category.querySelectorAll('ul li').length}`));