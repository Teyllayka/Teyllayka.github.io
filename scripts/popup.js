function dosmth() {
   let a = document.getElementById("popup");
    
   if (a.style.right == "0px") {
     a.style.right = "-100%";   // Close the popup
   } else {
     a.style.right = "0px";    // Open the popup
   }
 }
 