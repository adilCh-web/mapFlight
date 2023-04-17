import {getSpeed} from "./controlSpeed_and _Landing.js";
import { drawTraject } from "./drawTraject.js";
import { flightTime,getDistanceFlight } from "./time_Km_perFlight.js";
import {getZoom} from "./zoom.js"

var degreeFlight = 0;
var plane = document.getElementById("plane");
plane.style.left="113px";
plane.style.top="96px";
var verticalPositionPX =  document.getElementById("vertical");
var horizontalPositionPX =  document.getElementById("horizontal")



//intervals 

var interval_0Dregree;
var interval_22_Dregree;
var interval_45_Dregree;
var interval_67_Dregree;
var interval_90_Dregree;
var interval_112_Dregree;
var interval_135_Dregree;
var interval_157_Dregree;
var interval_180_Dregree;
var interval_202_Dregree;
var interval_225_Dregree
var interval_247_Dregree
var interval_270_Dregree;
var interval_292_Dregree;
var interval_315_Dregree;
var interval_337_Dregree;

let startTime = true

function startFlight(){
    
    if(startTime)
    {
        document.getElementById("btn").disabled = false;
        document.getElementById("btn1").disabled = false;
        getDistanceFlight()
        flightTime();
        flightOrientation()
        startTime=false;
        setInterval(() => {
            drawTraject()
        }, 1000);

    }
}
  

  function flightTurn()
  {

    
    //console.log("here " + getSpeed())


    degreeFlight +=22.5
    document.getElementById("deg").innerHTML = 'Deg": ' +  degreeFlight
    plane.style.transform =  "rotate(" + degreeFlight +"deg)";
    console.log("this is the dgree " + degreeFlight);
    flightOrientation();
    
  }


  
  function flightTurnBack()
  {
    if(degreeFlight===0){
        degreeFlight=360
    }
    
    //console.log("here " + getSpeed())

    degreeFlight -=22.5
    document.getElementById("deg").innerHTML = 'Deg": ' +  degreeFlight
    plane.style.transform =  "rotate(" + degreeFlight +"deg)";
    console.log("this is the dgree " + degreeFlight);
    flightOrientation();

  }

 function flightOrientation()
 {
     

   if(degreeFlight === 0 || degreeFlight === 360 )
   {
       clearInterval(interval_337_Dregree)
       clearInterval(interval_22_Dregree)
       interval_0Dregree = setInterval(()=>{
       plane.style.left = (parseFloat(plane.style.left.replace("px","")) + getZoom()*getSpeed())+"px";
    
       horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2) 
       verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2) ;
    
    
    },1000);
       degreeFlight = 0
   }
   else if(degreeFlight === 22.5)
   {
       clearInterval(interval_0Dregree)
       clearInterval(interval_45_Dregree)

       interval_22_Dregree = setInterval(()=>{
       plane.style.left = (parseFloat(plane.style.left.replace("px","")) + getZoom()*getSpeed())+"px";
       plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.75*getZoom()*getSpeed())+"px";
       horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2) 
       verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)
       }
       ,1000)
   }

   else if(degreeFlight===45)
   {
       clearInterval(interval_22_Dregree)
       clearInterval(interval_67_Dregree)
       interval_45_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) + getZoom()*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) + getZoom()*getSpeed())+"px";
           horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
           ,1000)
   }

   else if(degreeFlight===67.5)
   {

       clearInterval(interval_45_Dregree);
       clearInterval(interval_90_Dregree)
       interval_67_Dregree = setInterval(()=>{
       plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.75*getZoom()*getSpeed())+"px";
       plane.style.top = (parseFloat(plane.style.top.replace("px","")) + getZoom()*getSpeed())+"px";
               horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2) 
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
       ,1000)
   }

   else if(degreeFlight===90)
   {
       clearInterval(interval_67_Dregree)
       clearInterval(interval_112_Dregree)
       interval_90_Dregree = setInterval(()=>{
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) + getZoom()*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
           ,1000)
   }
   else if(degreeFlight===112.5)
   {
       clearInterval(interval_90_Dregree)
       clearInterval(interval_135_Dregree)
       interval_112_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.75*getZoom()*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) + getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2) 
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
           ,1000)
   }

   else if(degreeFlight===135)
   {
       clearInterval(interval_112_Dregree)
       clearInterval(interval_157_Dregree)
       interval_135_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) - getZoom()*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) + getZoom()*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2) 
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
           ,1000)
   }
   else if(degreeFlight === 157.5)
   {
       clearInterval(interval_135_Dregree)
       clearInterval(interval_180_Dregree)

           interval_157_Dregree = setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) - getZoom()*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) + 0.75*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
               ,1000)
       
   }

   else if(degreeFlight===180)
   {
       clearInterval(interval_157_Dregree)
       clearInterval(interval_202_Dregree)
       interval_180_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) - getZoom()*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
           ,1000)
   }
   else if(degreeFlight===202.5)
   {
       clearInterval(interval_180_Dregree)
       clearInterval(interval_225_Dregree)

           interval_202_Dregree = setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) - getZoom()*getZoom()*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.75*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
               ,1000)
   }

   else if(degreeFlight===225)
   {
       clearInterval(interval_202_Dregree)
       clearInterval(interval_247_Dregree)
       interval_225_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) - getZoom()*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) - getZoom()*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
           ,1000)
   }
   else if(degreeFlight === 247.5)
   {
       clearInterval(interval_225_Dregree)
       clearInterval(interval_270_Dregree)
           interval_247_Dregree = setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) - 0.75*getZoom()*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) - getZoom()*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
               ,1000)
   }

   else if(degreeFlight===270)
   {
       clearInterval(interval_247_Dregree)
       clearInterval(interval_292_Dregree)
       interval_270_Dregree = setInterval(()=>{
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) - getZoom()*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2) 
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
           ,1000)
   }

   else if(degreeFlight === 292.5)
   {
       clearInterval(interval_270_Dregree)
       clearInterval(interval_315_Dregree)
           interval_292_Dregree =  setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) + 0.75*getZoom()*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) - getZoom()*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2) 
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
               ,1000)
       
   }

   else if(degreeFlight===315)
   {
       clearInterval(interval_292_Dregree)
       clearInterval(interval_337_Dregree)
       interval_315_Dregree = setInterval(()=>{
           plane.style.left = (parseFloat(plane.style.left.replace("px","")) + getZoom()*getSpeed())+"px";
           plane.style.top = (parseFloat(plane.style.top.replace("px","")) - getZoom()*getSpeed())+"px";
                   horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
           ,1000)
   }
   else if(degreeFlight === 337.5)
   {
       clearInterval(interval_315_Dregree)
       clearInterval(interval_0Dregree)
           interval_337_Dregree =  setInterval(()=>{
               plane.style.left = (parseFloat(plane.style.left.replace("px","")) +getZoom()*getSpeed())+"px";
               plane.style.top = (parseFloat(plane.style.top.replace("px","")) - 0.75*getZoom()*getSpeed())+"px";
                       horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
            verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
               ,1000)
       
   }

   else if(degreeFlight==360) // degreeFlight=360 which mean 0 degree
   {
       clearInterval(interval_337_Dregree)
       clearInterval(interval_22_Dregree)
       interval_0Dregree = setInterval(()=>{
           plane.style.left = (parseInt(plane.style.left.replace("px","")) + getZoom()*getSpeed())+"px"},1000);
           horizontalPositionPX.innerHTML = "horizontal Mapp: " + parseFloat(plane.style.left.replace("px","")).toFixed(2)  
                verticalPositionPX.innerHTML = "vertical Mapp: " + parseFloat(plane.style.top.replace("px","")).toFixed(2)}
     }


     export {flightTurn,flightTurnBack,startFlight,degreeFlight}