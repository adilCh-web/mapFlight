import {randomPlaneInTheSky} from './randomPlaneInTheSky.js';

import { flightTurn, flightTurnBack,degreeFlight, startFlight} from './flightTurn.js';
import { speeddown,speedup,planeLanding, getSpeed} from './controlSpeed_and _Landing.js';

import {moving} from "./opacity_Moving_clouds.js"
import {zoomIn,zoomOut} from "./zoom.js"





const cities = ["Betina","Rocafull","Bahara","Nohinissi","Kendall","Gropi","Anfochi","Zeer","Elise","Dassdord","Trifpunkt","Citadelle","Rejdenessen","kolayb","Tayma","Nabihalia","Bahara"]

document.getElementById("img").width = 2500
console.log(document.getElementById("img").height)

   
randomPlaneInTheSky()
//getDistanceFlight()
moving()

document.getElementById("zoomIn").addEventListener("click",zoomIn)
document.getElementById("zoomOut").addEventListener("click",zoomOut)





document.getElementById("btn").addEventListener("click",flightTurn)

document.getElementById("btn1").addEventListener("click",flightTurnBack)

document.getElementById("speedUp").addEventListener("click",speedup)

document.getElementById("speedDown").addEventListener("click",speeddown)

document.getElementById("speedRange").addEventListener("change",()=>{
   let speed= document.getElementById("speedRange")
   document.getElementById("displaySpeed").innerHTML = "Speed: " + document.getElementById("speedRange").value + "Km/h";
   console.log(speed.value)
   if(speed.value==250){
         document.getElementById("landingDiv").style.display = "flex"
      
      }})


document.getElementById("landing").addEventListener("click",planeLanding)

document.getElementById("randomCity").addEventListener("click",randomCity)


document.getElementById("startFlight").addEventListener("click",()=>{startFlight()})



 function randomCity()
 {
     if(document.getElementById("selectedCity").value !== "")
     {
        document.getElementById("destination").innerHTML = cities[Math.floor(Math.random()*cities.length)];
     }
     else
     {
        setTimeout(()=>{document.getElementById("randomCity").innerHTML = "Select Departure!!";
        document.getElementById("randomCity").style.fontSize="8px"},2000)
        setTimeout(()=>{document.getElementById("randomCity").innerHTML = "Go!";
        document.getElementById("randomCity").style.fontSize="10px"},2500)
     }

 }




 

