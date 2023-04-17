import { planeNextOther } from "./maydays.js";
import {removePlanes} from "./removeRandomPlane.js"
import {getZoom} from "./zoom.js"
 

 let planesImgs = ["./img/redPlane.png","./img/australian.PNG","./img/blueRed.png","./IMG/airplane-png.png","./img/whitePlane.png","./img/whiteGrey.png"]
 function randomPlaneInTheSky()
 {
    for(let x = 0;x<1000;x++)
    {
        let interval 
        let divMap = document.getElementById("map")
        // div to put an image plane and its flight reference
        let divRandomPlane = document.createElement("div") 
        const randomPlane = document.createElement("img");
        const flightRef = document.createElement("p");
        randomPlane.src = planesImgs[randomIntFromInterval(0,planesImgs.length-1)]
        divRandomPlane.appendChild(randomPlane)
        divRandomPlane.appendChild(flightRef)

        divRandomPlane.style.position = "absolute"
        divRandomPlane.style.zIndex = 6 

        
        divMap.appendChild(divRandomPlane);
        flightRef.innerHTML = refFilght()
        randomPlane.className = "randomPlane"

        flightRef.style.fontSize = "7px"
        flightRef.style.color ="white"

        divRandomPlane.style.left = randomIntFromInterval(0,2470) + "px"

        divRandomPlane.style.top = randomIntFromInterval(0,1360) + "px"

        divRandomPlane.setAttribute("id","randomPlane" + x)
        //flightRef.style.top = (parseInt(randomPlane.style.top.replace("px","")) + 30) + "px"
        //flightRef.style.left = randomPlane.style.left
        let degrees = [0,360, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5]
        let index = randomIntFromInterval(0,16)
        let deg = degrees[index]
        //console.log(deg)
        randomPlane.style.transform =  "rotate(" + deg +"deg)"
        let speeds = [0.2,0.4,0.6,0.8,1,1]
        let speedRandomPlane = speeds[randomIntFromInterval(0,4)]


        switch (deg) {
            case 360:
              interval = setInterval(()=>{
    
                divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + (getZoom()*speedRandomPlane))+"px"

                planeNextOther(divRandomPlane,flightRef.innerHTML);
                removePlanes(divRandomPlane,interval)
                },1000)

              break;
            case 22.5:
              interval = setInterval(()=>{

                divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.75*getZoom()*speedRandomPlane)+"px";
                divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.25*getZoom()*speedRandomPlane)+"px";
                planeNextOther(divRandomPlane,flightRef.innerHTML);
                removePlanes(divRandomPlane,interval)
                }
                ,1000)
                
                
              break;
            case 45:
                interval = setInterval(()=>{
                divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.50*getZoom()*speedRandomPlane)+"px";
                divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.50*getZoom()*speedRandomPlane)+"px";
                planeNextOther(divRandomPlane,flightRef.innerHTML)  
                removePlanes(divRandomPlane,interval)         
                }
                ,1000)
                
              break;
            case 67.5:
                interval = setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.25*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.75*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    }
                    ,1000)


              break;
              case 90:
                interval = setInterval(()=>{
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    }
                    ,1000)


              break;
            case 112.5:
                interval = setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.25*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.75*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    }
                    ,1000)
                    
              break;
            case 135:
                interval = setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.50*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.50*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML);
                    removePlanes(divRandomPlane,interval)
                }
                ,1000)
                
              break;
            case 157.5:
                interval = setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.75*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) + 0.25*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    }
                    ,1000)
                    

            case 180:
                interval =setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    }
                    ,1000)
                    
                break;
            case 202.5:
                interval =setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.75*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.25*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    }
                    ,1000)
                   

                break;
            case 225:
                interval =setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.5*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.5*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    }
                    ,1000)
            
                break;
            case 247.5:
                interval = setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) - 0.25*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.75*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    },1000)
                break;
            case 270:
                interval =setInterval(()=>{
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)}
                    ,1000)
                  
                    
                break;
            case 292.5:
                interval =setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.25*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.75*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    }
                    ,1000)

                break;
            case 315:
                interval = setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.5*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.5*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)
                    }
                    ,1000)
                    
            case 337.5:
                interval =setInterval(()=>{
                    divRandomPlane.style.left = (parseFloat(divRandomPlane.style.left.replace("px","")) + 0.75*getZoom()*speedRandomPlane)+"px";
                    divRandomPlane.style.top = (parseFloat(divRandomPlane.style.top.replace("px","")) - 0.25*getZoom()*speedRandomPlane)+"px";
                    planeNextOther(divRandomPlane,flightRef.innerHTML)
                    removePlanes(divRandomPlane,interval)}
                    ,1000)
                    
                break;
          }



    }
 }


 
 function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function refFilght() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < 2; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   result =result+"-"+String(randomIntFromInterval(1, 9)) + String(randomIntFromInterval(0,9)) + String(randomIntFromInterval(0, 9))
   return result;
}


 export {randomPlaneInTheSky,randomIntFromInterval}