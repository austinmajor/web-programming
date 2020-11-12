function parseScores(scoresString) {
   return scoresString.split(' ');
}

function buildDistributionArray(scoresArray) {
   // Initialize Grade Bins
   let a = 0, b = 0, c = 0, d = 0, f = 0;

   for (let i = 0; i < scoresArray.length; i++) {
      console.log(scoresArray[i])
      if (scoresArray[i] === "") {
         console.log("Not a number");
      } else {
         if (Number(scoresArray[i]) >= 90) {
            a += 1;
         }
         else if (Number(scoresArray[i]) >= 80) {
            b += 1;
         }
         else if (Number(scoresArray[i]) >= 70) {
            c += 1;
         }
         else if (Number(scoresArray[i]) >= 60) {
            d += 1;
         }
         else {
            f += 1;
         }
      }
   }
   return [a, b, c, d, f];
}

function setTableContent(userInput) {
   let gradeArray = parseScores(userInput);
   let distArray = buildDistributionArray(gradeArray);
   let sum = 0

   for (let i = 0; i < distArray.length; i++) {
      sum = sum + distArray[i];
   }

   // If input contain no scores
   if (sum <= 0) {
      var table = document.getElementById("distributionTable")
      //row = table.appendChild(document.createElement("tr"));
      table.innerHTML = "";
      table.insertRow(0).insertCell(0).innerHTML = "No graph to display";
   } else {
      var table = document.getElementById("distributionTable")
      //row = table.appendChild(document.createElement("tr"));
      table.innerHTML = "";

      // Setup Graph Bars
      row0 = table.insertRow(0)
      for (let i = 0; i < distArray.length; i++) {
         switch (i) {
            case 0:
               row0.insertCell(0).innerHTML = '<div style="height:0px" class="bar0"></div>';
               break;
            case 1:
               row0.insertCell(1).innerHTML = '<div style="height:0px" class="bar1"></div>';
               break;
            case 2:
               row0.insertCell(2).innerHTML = '<div style="height:0px" class="bar2"></div>';
               break;
            case 3:
               row0.insertCell(3).innerHTML = '<div style="height:0px" class="bar3"></div>';
               break;
            case 4:
               row0.insertCell(4).innerHTML = '<div style="height:0px" class="bar4"></div>';
               break;
         }
      }

      // Letter Grade Labels
      row1 = table.insertRow(1)
      for (let i = 0; i < distArray.length; i++) {
         switch (i) {
            case 0:
               row1.insertCell(0).innerHTML = "A";
               break;
            case 1:
               row1.insertCell(1).innerHTML = "B";
               break;
            case 2:
               row1.insertCell(2).innerHTML = "C";
               break;
            case 3:
               row1.insertCell(3).innerHTML = "D";
               break;
            case 4:
               row1.insertCell(4).innerHTML = "F";
               break;
         }
      }

      // Number of occurrences of each gradeArray
      row2 = table.insertRow(2)
      for (let i = 0; i < distArray.length; i++) {
         switch (i) {
            case 0:
               row2.insertCell(0).innerHTML = distArray[i];
               break;
            case 1:
               row2.insertCell(1).innerHTML = distArray[i];
               break;
            case 2:
               row2.insertCell(2).innerHTML = distArray[i];
               break;
            case 3:
               row2.insertCell(3).innerHTML = distArray[i];
               break;
            case 4:
               row2.insertCell(4).innerHTML = distArray[i];
               break;
         }
      }

      // Setup Bar Height
      for (let i = 0; i < distArray.length; i++) {
         switch (i) {
            case 0:
               var bar0 = document.getElementsByClassName("bar0");
               bar0[0].style.height = distArray[0] * 10 + "px";
               break;
            case 1:
               var bar1 = document.getElementsByClassName("bar1");
               bar1[0].style.height = distArray[1] * 10 + "px";
               break;
            case 2:
               var bar2 = document.getElementsByClassName("bar2");
               bar2[0].style.height = distArray[2] * 10 + "px";
               break;
            case 3:
               var bar3 = document.getElementsByClassName("bar3");
               bar3[0].style.height = distArray[3] * 10 + "px";
               break;
            case 4:
               var bar4 = document.getElementsByClassName("bar4");
               bar4[0].style.height = distArray[4] * 10 + "px";
               break;
         }
      }
   }
}

function bodyLoaded() {
   // The argument passed to writeTableContent can be changed for 
   // testing purposes
   setTableContent("45 78 98 83 86 99 90 59");
}