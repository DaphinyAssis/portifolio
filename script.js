let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
}

let temaAtual = 'claro';

function alterarTema() {
  const body = document.body;
  temaAtual = temaAtual === 'claro' ? 'escuro' : 'claro';
  body.classList.toggle('dark-theme', temaAtual === 'escuro');
}





