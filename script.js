const squiggle = document.getElementById("hide")

const drip = () => {
    
    squiggle.style.transition = ("opacity 4s ease");
    squiggle.style.opacity = 1;
  
      
   
}

window.onload = drip