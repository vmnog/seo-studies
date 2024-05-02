document.addEventListener('DOMContentLoaded', function() {
  console.log('Página totalmente carregada e DOM completamente analisado.');

  var clickableLink = document.querySelector('button');
  if (clickableLink) {
    clickableLink.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Obrigado por clicar! Continuaremos a melhorar nossos serviços.');
    });
  }
});
