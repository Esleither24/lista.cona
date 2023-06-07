const creaUsuario = (username, password) => {
    const user = {
        username,
        password,

    }
    return user;
}

const user1 = crearUsuario('gabo123', '123456');
const user2 = crearUsuario('carol25', '1234hola');
const user3 = crearUsuario('gabo123', '123');
let users = [user1, user2, user3];
let intentosUser = 3;
let intentosPass = 3;
let passIng = '';
let userIng = '';

let userExist = users.find(user => user.username === userIng);

while (userIng !== userExist?.username && intentosUser > 0) {
    userIng = prompt('ingresa tu usuario')
    userExist = users.find(user => user.username === userIng);
    intentosUser = intentosUser -1;
}

while (passIng !== userExist?.password &&  intentosPass > 0 && userExist) {
    passIng = prompt ('ingrese su contraseña')
    intentosPass = intentosPass -1;
}

if (passIng === userExist?.password) {
    alert ('bienvenido')
}
else{
    alert('se ha bloqueado la cuenta')
}