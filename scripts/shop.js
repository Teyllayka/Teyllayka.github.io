
let counter = 0;




document.addEventListener('DOMContentLoaded', function() {
  var forms = document.getElementsByTagName('form');

  for (var i = 0; i < forms.length; i++) {

    forms[i].addEventListener('submit', function(event) {

      event.preventDefault();
      addToCart();
      
    }); 
  }

});



function addToCart() {
  if (counter < 9) {
    counter++;

  }
  let cntr = document.getElementById("counter");
  cntr.innerHTML = counter;

  document.getElementById("shown").classList.add('hidden');
  document.getElementById("shown").classList.remove('shown');

  document.getElementById("hidden").classList.add('shown');
  document.getElementById("hidden").classList.remove('hidden');

}







function dosmth() {
  let a = document.getElementById("popup");
    
  if (a.style.right == "0px") {
    a.style.right = "-100%";   // Close the popup
  } else {
    a.style.right = "0px";    // Open the popup
  }
}
 