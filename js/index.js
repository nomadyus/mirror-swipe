(function () {
  $(document).ready(preparePage);  
  
  function addEventListenerToPage() {
    $('#rate-up').on('click', function(a, b) {
      console.log('Rate up!');
    });
    
    $('#rate-down').on('click', function(a, b) {
      console.log('Rate down!');
    })
  }

  function preparePage() {
    console.log('Yeaaah!')
    addEventListenerToPage();
    
  }
})();