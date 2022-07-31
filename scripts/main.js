/* Primeiro codigo JS para trocar o titulo da minha pagina via javascript
const meuCabecalho = document.querySelector(`h1`);
meuCabecalho.textContent = `teste`;
*/

/*relogio*/

setInterval(function(){
    
    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    // Chamamos a função zero para que ela retorne a concatenação
    // com os minutos e segundos
    minuto = zero(minuto);
    segundo = zero(segundo);
    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
    document.getElementById('hora').textContent = hora+':'+minuto+':'+segundo;
},1000)

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}


/*modal*/

const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
        modal.style.display = 'none'
    }
    else {
        modal.style.display = 'block'
    }
}

const btn = document.querySelector('.modalBtn')
btn.addEventListener('click', switchModal)

window.onclick = function(event) {
    const modal = document.querySelector('.modal')
    if (event.target ==modal) {
        switchModal ()
    }
}