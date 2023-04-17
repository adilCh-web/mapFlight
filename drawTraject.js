import { getZoom } from "./zoom.js"

function drawTraject()
{
     if (typeof(document.getElementById("plane"))!='undefined' && document.getElementById("plane") != null)
    {
            let plane = document.getElementById("plane")
            let dotTraject = document.createElement("img")
            dotTraject.src = "./img/dot_.png"
            dotTraject.style.height = "1px"
            dotTraject.style.width = "1px"
            dotTraject.style.zIndex =1
            let map = document.getElementById("gpsDiv")
            map.appendChild(dotTraject)
            dotTraject.style.position = "absolute"
            
        
        
            dotTraject.style.left = (parseInt(plane.style.left.replace("px","")) )/(10*getZoom() )+ "px";
            dotTraject.style.top = 
            (parseInt(plane.style.top.replace("px","")))/(10*getZoom() ) + "px"
            console.log(dotTraject.style.left + "---" + dotTraject.style.top)
    }
    




}

export {drawTraject}