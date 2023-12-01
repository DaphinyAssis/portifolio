function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
}

function alterarIdioma() {
    const titulo = document.querySelector('.title h2');
    const mensagem1 = document.querySelector('.title p:nth-child(3)');
    const mensagem2 = document.querySelector('.title p:nth-child(4)');
    const btnPortfolio = document.querySelector('.title button');

    if (titulo.textContent === 'Olá, meu nome é') {
        titulo.textContent = 'Hello, my name is';
        mensagem1.textContent = 'I am a programming student empowering myself';
        mensagem2.textContent = 'to be a Full-Stack developer!';
        btnPortfolio.textContent = 'View Portfolio';
    } else {
        titulo.textContent = 'Olá, meu nome é';
        mensagem1.textContent = 'Sou uma estudante de programação me capacitando';
        mensagem2.textContent = 'para ser uma desenvolvedora Full-Stack!';
        btnPortfolio.textContent = 'Ver Portfólio';
    }
}



