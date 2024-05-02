document.addEventListener('DOMContentLoaded', function() {
  // Find the clickable link and add an event listener
  var clickableLink = document.querySelector('a[href="javascript:void(0);"]');
  if (clickableLink) {
    clickableLink.addEventListener('click', function(event) {
      // Prevent the default action
      event.preventDefault();

      // Find the first paragraph in the main element and change its text content
      var firstParagraph = document.querySelector('main p');
      if (firstParagraph) {
        firstParagraph.textContent = 'Clicou no link! O texto foi modificado..';
      }

      // Optionally, show the hidden div if it exists
      var hiddenDiv = document.querySelector('main > div[style="display: none;"]');
      if (hiddenDiv) {
        hiddenDiv.style.display = 'block'; // Show the previously hidden content
        hiddenDiv.textContent = 'Antes essa div estava escondida, agora está visível!';
      }
    });
  }
});
