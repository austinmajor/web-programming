function domLoaded() {
   let cButton = document.getElementById("convertButton");
   let cInput = document.getElementById("cInput");
   let fInput = document.getElementById("fInput");
   let eMsg = document.getElementById("errorMessage");

   cInput.addEventListener("input", function () {
      fInput.value = "";
   });

   fInput.addEventListener("input", function () {
      cInput.value = "";
   });

   cButton.addEventListener("click", function () {
      let cVal = cInput.value;
      let fVal = fInput.value;
      let error = "";

      if (cVal != "") {
         if (!isNaN(cVal)) {
            let f = convertCtoF(cVal);
            fInput.value = f;
            setimage(f);
         } else {
            error = cVal + " is not a number";
         }

      }
      
      if (fVal != "") {
         if (!isNaN(fVal)) {
            let c = convertFtoC(fVal);
            cInput.value = c;
            setimage(fVal);
         } else {
            error = fVal + " is not a number";
         }
      }

      eMsg.innerHTML = error;
   });
}

function convertCtoF(degreesCelsius) {
   let f = degreesCelsius * 9 / 5 + 32;
   return f;
}

function convertFtoC(degreesFahrenheit) {
   let c = (degreesFahrenheit - 32) * 5 / 9;
   return c;
}

function setimage(deg) {
   let wImage = document.getElementById("weatherImage");
   if (deg < 32) {
      wImage.setAttribute("src", "cold.gif");
      wImage.setAttribute("alt", "cold");
   }

   if (deg >= 32 && deg <= 50) {
      wImage.setAttribute("src", "cool.gif");
      wImage.setAttribute("alt", "cool");
   } 
   
   if (deg > 50) {
      wImage.setAttribute("src", "warm.gif");
      wImage.setAttribute("alt", "warm");
   }
}

window.addEventListener("DOMContentLoaded", domLoaded);