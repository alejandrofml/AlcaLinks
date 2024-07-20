
const $button = document.querySelector('#button')
$button.addEventListener('click', Share)

function Share() {
    
    navigator.share({
        title: 'Compartir',
        text: 'Gracias por compartir!',
        
        url: 'https://alcalinauy.web.app',
        dialogTitle: 'Gracias!'
    })
    .then(() => console.log('Compartido con éxito'))
    .catch(error => console.error('Error al compartir:', error));
}