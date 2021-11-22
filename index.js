let overlay = document.getElementById("overlay"); 
let closeBtn = document.getElementById("closeBtn"); 
let expandImg = document.getElementById("expandedImg");

// close btn on popup
closeBtn.addEventListener("click", function() {
  this.parentElement.style.display='none'; 
  overlay.style.display="none";
})

// close if clicking outside of pop-up
overlay.addEventListener("click", function() {
  expandImg.parentElement.style.display='none'; 
  overlay.style.display="none";
})


// pop-up function
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    // imgText.innerHTML = imgs.alt;
    imgText.innerHTML = imgs.parentElement.childNodes[5].innerHTML;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "flex";

    overlay.style.display="block"; 


  }

  

