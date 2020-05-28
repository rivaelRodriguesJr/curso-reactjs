function entrar() {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome?');
    texto = texto ? texto.trim() : '';

    if (texto == '') {
        alert('Digite seu nome novamente');
        area.innerHTML = 'Bem vindo ...';
    } else {
        area.innerHTML = 'Bem vindo ' + texto;
    }




}