const emailInput = document.querySelector("#email-input");
const phoneInput = document.querySelector("#phone-input");
const formBtn = document.querySelector('#form-btn');
const form = document.querySelector('#form');

//regex
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const PHONE_REGEX = /^[0](412|414|416|426|424|212)([0-9]{7})$/
//validaions

let emailvalidation = false;
let phoneValidation = false;

//FUNCION
const valideInput = (input, regexValidation) => {
    const infoText = emailInput.parentElement.children[1];

    formBtn.disabled = emailvalidation && phoneValidation ? false : true

    if (input.value === '') {
        input.classList.add('correct');
        input.classList.remove('wrong');
        infoText.classList.remove('show') 
    }else if (regexValidation) {
        input.classList.add('correct');
        input.classList.remove('wrong');
        infoText.classList.remove('show')
    } else{
        input.classList.remove('correct');
        input.classList.add('wrong');
        infoText.classList.add('show')
    }

}





emailInput.addEventListener('input',  e => {
    emailvalidation = EMAIL_REGEX.test(emailInput.value);
    valideInput(emailInput,emailvalidation);
});
phoneInput.addEventListener('input', e =>{
    phoneValidation = PHONE_REGEX.test(phoneInput.value);
    valideInput(phoneInput,phoneValidation)
} )

form.addEventListener('submit', e => {
    e.preventDefault();
    //CREO ELEMENTO DE LA LISTA
    const li = document.createElement('li');
    //CREO CONTENIDO DE LI DEPENDIENDO DE LO QUE ESCRIBIO EL USUARIO EN LOS INPUTS
    li.innerHTML =`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

    <input type="text" value="hola" readnoly>
    <input type="text" value="hola" readonly>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="edit-icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
 `;
    
     //agrego elemento a lista 
     list.append(li)
     //limpio los imputs
     emailInput.value = '';
     phoneInput.value = '';
     valideInput(emailInput)
     valideInput(phoneInput)
     emailvalidation = false;
     phoneValidation = false;
     //guardar en local storage (navergador)
     localStorage.setItem('listacontactos', list.innerHTML)
});
//para obtener la informacion

list.addEventListener('click', e => {
    if (e.target.closest('.delete-icon')) {
        e.target.closest('.delete-icon').parentElement.remove();
        localStorage.setItem('listacontactos', list.innerHTML);
    }

    if (e.target.closest('.edit-icon')) {
        //1. selecciono icono de editar 
        const editIcon = e.target.closest('.edit-icon');
        //2. selecciono el input 
        const editInput = editIcon.parentElement.children[2];
        //3. defino mi condicional usando una clase llamada editado para saber el estado del boton
        if (editIcon.classList.contains('editando')) { 
            //cuando edita 
            //remuevo la clase de editando para indicar que esta guardando los cambios
            editIcon.classList.remove('editando');
            //guardo el nuevo valor del input
            editInput.setAttribute('value', editInput.value);
            editInput.setAttribute('readonly', 'true');
            //coloco el icono de editar 
            editIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    
            `;

            //guardo en local storages
            localStorage.setItem('listacontactos', list.innerHTML);
        } else {
            //nueva clase editando para indicar el estdo del boton
            editIcon.classList.add('editando');
         //remuevo el atributo de readonly para poder escribir el input 
            editInput.removeAttribute('readonly');
            editInput.classList.add('editing');
            phoneInput.addEventListener('input', e =>{
                phoneValidation = PHONE_REGEX.test(phoneInput.value);
            if(phoneValidation){
                phoneInput.classList.remove('error');
            } else{
                phoneInput.classList.add('error');
            }
            } )
            // const end = editInput.value.length;
            // editInput.setSelectionRange(end, end);
            // editInput.focus();
    
          // cambio el icono a un lapiz para indicarle al usuario que esta editando
            editIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        `;
      }
    
    }
});


(() => {
 const locallist = localStorage.getItem('listacontactos')
 list.innerHTML = locallist;
})();

