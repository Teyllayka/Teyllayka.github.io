function dosmth() {
   let a = document.getElementById("popup");
   console.log(a.style.display);

   if (a.style.display == "block") {
      a.style.display = "none";
   } else {
      a.style.display = "block";
   }
   
}