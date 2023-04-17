
import {getZoom} from "./zoom.js"


function removePlanes(randomPlane,interval,ref)
{
    if(
    parseInt(randomPlane.style.left.replace("px","")) > 2490*getZoom()
    || 
    parseInt(randomPlane.style.top.replace("px","")) < 0
    || 
    parseInt(randomPlane.style.left.replace("px","")) < 0
    || 
    parseInt(randomPlane.style.top.replace("px","")) > 1400*getZoom())

{
    //console.log("somthing removed")
    //console.log(randomPlane)
    randomPlane.remove()
    clearInterval(interval)
    
    

}
}

export {removePlanes}