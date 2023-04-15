import { getSpeed } from "./controlSpeed_and _Landing.js"


var intervalTime;
var intervalDistance
let  totalKm = 0
var sec = 0
let mins = document.getElementById("min")

function clearTime()
{
    clearInterval(intervalTime)
}

function flightTime()
{

        intervalTime = setInterval(()=>
        {
            sec +=5

            let min = parseInt(sec/60)
            let restSec = sec%60
            let restMin = min%60
            let hrs =  parseInt(min/60)
            mins.innerHTML = "FlightTime: " + hrs + "H:" + restMin + "MIN" + " " + restSec + "s"
    
        },500)
        
}




function clearDistance()
{
    clearInterval(intervalDistance)
}


function getDistanceFlight()
{
    intervalDistance = setInterval(()=>
    {
        totalKm+=document.getElementById("speedRange").value/1200
  
        document.getElementById("distance").innerHTML = "Flight Distance: " + totalKm.toFixed(2) + "KM"
        //console.log(getSpeed())
        /*
        switch (parseInt(getSpeed()*10))
        {
            case 0:
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
              break;
            case 10:
                distance+=1200/3600
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
                break;     

            case 6:
                distance+= 720/3600     //720km/h    h=3600 sec
              document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
              break;
            case 4:
                distance+= 480/3600     
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
              
                break;
            case 2:
                distance+= 240/3600     
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
                break;
            case 8:
                distance+= 960/3600     
                document.getElementById("distance").innerHTML = "Flight Distance: " + distance.toFixed(2) + "KM"
                break;
            
    
  


        } */
    },500)
}



export {flightTime,getDistanceFlight,clearTime,clearDistance}