//selectores
const title = document.querySelector('#title');
const list = document.querySelector('#list');
const listItems = document.querySelectorAll('.list-item');
console.log(title, list, listItems);

// aatributos

console.log(title.getAttribute('class'))
title.setAttribute('id', 'otro');
title.setAttribute('hola', 'hola');

//clases
title.classList.add('blue');
title.classList.add('red');
title.classList.remove('blue');
console.log(title.classList.contains('blue'));

//setInterval(() => title.classList.toggle('bg-green') , 1000)

setInterval(() => {
    if (title.classList.contains('bg-green')){
        title.classList.remove('bg-green');
    } else{
        title.classList.add('bg-green');
    }
}, 1000);

//crear elementos

const li = document.createElement('li');
li.innerHTML = list.children.length + 1;
li.classList.add('list-item');
list.append(li);

for (let index = 0; index < 10; index++) {
    const li = document.createElement('li');
    li.innerHTML = list.children.length + 1;
    li.classList.add('list-item');
    list.append(li);
}
 
const toDelete = [...list.children].find(item => item.innerHTML === '4')
console.log(toDelete)
toDelete.remove();

//actualizar elemento o introducir texto 

const toUpdate = [...list.children].find(item => item.innerHTML === '3')
toUpdate.innerHTML = 'Actualizado'

