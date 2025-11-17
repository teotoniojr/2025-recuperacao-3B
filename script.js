const troca = document.querySelectorAll(".btn-proximo");

troca.forEach(button => {
    button.addEventListener('click', function (){
        const atual = document.querySelector('.ativo');
        const proximo = 'poema-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo')
        document.getElementById(proximo).classList.add('ativo')
    })
}

)