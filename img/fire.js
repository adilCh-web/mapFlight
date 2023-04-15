


function firing(deg){
    console.log("fired")
    var plane = document.getElementById("plane");
    let count=0
    let steps = 0
    
    let interval = setInterval(()=>
    {
        count+=1
        steps+=5
        let fire = document.createElement("img")
        fire.src = "./img/dot.png"
        fire.style.height = "40px"
        fire.style.width = "40px"
        fire.style.zIndex =1
        let map = document.getElementById("map")
        map.appendChild(fire)
        fire.style.position = "absolute"
        console.log(plane.style.top)
        switch (deg) {
            case 0:
                
                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps)+"px"
                fire.style.top = (parseFloat(plane.style.top.replace("px","")))+"px"

              break;
            case 360:
                
              fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps)+"px"
              fire.style.top = (parseFloat(plane.style.top.replace("px","")))+"px"

            break;
            case 22.5:
                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*0.75)+"px"

                fire.style.top = (parseFloat(plane.style.top.replace("px","")) +steps*0.25)+"px"
                
                
              break;
            case 45:
                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*0.5)+"px"

                fire.style.top = (parseFloat(plane.style.top.replace("px","")) +steps*0.5)+"px"
                
              break;
            case 67.5:

                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*0.25)+"px"

                fire.style.top = (parseFloat(plane.style.top.replace("px","")) +steps*0.75)+"px"

              break;
              case 90:

                fire.style.left = (parseFloat(plane.style.left.replace("px",""))-12)+"px"

                fire.style.top = (parseFloat(plane.style.top.replace("px","")) +steps)+"px"



              break;
            case 112.5:
                fire.style.top = (parseFloat(plane.style.top.replace("px","")) +steps*0.75)+"px"

                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*(-0.25))+"px"
                    
              break;
            case 135:

                fire.style.top = (parseFloat(plane.style.top.replace("px","")) +steps*0.5)+"px"

                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*(-0.5))+"px"
                    
                
              break;
            case 157.5:

                fire.style.top = (parseFloat(plane.style.top.replace("px","")) +steps*0.25)+"px"

                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*(-0.75))+"px"
                

            case 180:


                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*(-1))+"px"
                    
                break;
            case 202.5:
                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*(-0.75))+"px"

                fire.style.top = (parseFloat(plane.style.top.replace("px","")) +steps*(-0.25))+"px"
                    

                break;
            case 225:

                fire.style.top = (parseFloat(plane.style.top.replace("px","")) +steps*(-0.5))+"px"

                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*(-0.5))+"px"
                    

            
                break;
            case 247.5:
                fire.style.top = (parseFloat(plane.style.top.replace("px","")) -steps*0.75)+"px"

                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*(-0.25))+"px"
                    
                break;
            case 270:
                fire.style.top = (parseFloat(plane.style.top.replace("px","")) - steps)+"px"

                  
                    
                break;
            case 292.5:
                fire.style.top = (parseFloat(plane.style.top.replace("px","")) -steps*0.75)+"px"

                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*0.25)+"px"
                    

                break;
            case 315:
                fire.style.top = (parseFloat(plane.style.top.replace("px","")) -steps*0.5)+"px"

                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*0.5)+"px"
                    

                    
            case 337.5:
                fire.style.top = (parseFloat(plane.style.top.replace("px","")) -steps*0.25)+"px"

                fire.style.left = (parseFloat(plane.style.left.replace("px","")) +steps*0.75)+"px"
                    
                break;
          }

        setTimeout(()=>{fire.remove()},400)
        if(count===12){
            clearInterval(interval)
            fire.remove()
        }
    },500)

}


export {firing}