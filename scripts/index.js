function openMenu(){
    document.getElementsByClassName("menu-mobile")[0].style.display = "flex";
    console.log("abrir");
}

function closeMenu(){
    document.getElementsByClassName("menu-mobile")[0].style.display = "none";
    console.log("cerrar");
}

const mediaQuery = window.matchMedia('(min-width: 768px)')

Window.onload = closeMenu();

window.onresize = function() {
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  closeMenu();
  
}};



$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cs-hidden');
      } 
  });  
});
