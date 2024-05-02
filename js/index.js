document.addEventListener('DOMContentLoaded', function() {
  // Find the clickable link and add an event listener
  var clickableLink = document.querySelector('button');
  if (clickableLink) {
    clickableLink.addEventListener('click', function(event) {
      // Prevent the default action
      event.preventDefault();

      // Find the first paragraph in the main element and change its text content
      var firstParagraph = document.querySelector('main p');
      if (firstParagraph) {
        firstParagraph.textContent = 'Clicou no link! O texto foi modificado..';
      }
    });
  }
});
