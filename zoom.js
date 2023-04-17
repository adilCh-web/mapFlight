

var zoom = 1
let plane = document.getElementById("plane")
let map = document.getElementById("img")



function getZoom()
{
    return zoom
}



function changeSize(element,label,number)
{
    if(label === "top")
    {
        let newTop = parseFloat(element.style.top.replace("px",""))*number + "px"
        
        element.style.top = newTop
    }
    if(label === "left")
    {
        let newLeft = parseFloat(element.style.left.replace("px",""))*number + "px"
        
        element.style.left = newLeft
    }
    else if(label === "width")
    {
        let newWidth = element.width*number
        
        element.width = newWidth
 
    }
    else if (label === "height")
    {
        let newHeight = element.height*number
        element.height = newHeight
    }
}


function zoomIn()

{
    if(zoom !=1.953125)
    {
        zoom*=1.25
        console.log(zoom)

        changeSize(map,"width",1.25)
        changeSize(plane,"top",1.25)
        changeSize(plane,"left",1.25)


        changeSize(document.getElementById("c1"),"width",1.25)
        changeSize(document.getElementById("c1"),"top",1.25)
        changeSize(document.getElementById("c1"),"left",1.25)
        document.getElementById("c1").style.height = "auto"

        changeSize(document.getElementById("c2"),"width",1.25)
        changeSize(document.getElementById("c2"),"top",1.25)
        changeSize(document.getElementById("c2"),"left",1.25)
        document.getElementById("c2").style.height = "auto"

        changeSize(document.getElementById("c3"),"width",1.25)
        changeSize(document.getElementById("c3"),"top",1.25)
        changeSize(document.getElementById("c3"),"left",1.25)
        document.getElementById("c3").style.height = "auto"
        
        changeSize(document.getElementById("c4"),"width",1.25)
        changeSize(document.getElementById("c4"),"top",1.25)
        changeSize(document.getElementById("c4"),"left",1.25)
        document.getElementById("c4").style.height = "auto"


        for(let i=0;i<1000;i++)
        {
            let randomplane = document.getElementById("randomPlane"+ i)
            if(typeof(randomplane)!== "undefined" && randomplane !== null)
            {
                changeSize(randomplane,"top",1.25)
                changeSize(randomplane,"left",1.25)
   

            }

        
        }
    }

}


function zoomOut()

{
    if(zoom !=1)
    {
        zoom/=1.25

        changeSize(map,"width",1/1.25)
        changeSize(plane,"top",1/1.25)
        changeSize(plane,"left",1/1.25)

        changeSize(document.getElementById("c1"),"width",1/1.25)
        changeSize(document.getElementById("c1"),"top",1/1.25)
        changeSize(document.getElementById("c1"),"left",1/1.25)
        document.getElementById("c1").style.height = "auto"
 
  
        changeSize(document.getElementById("c2"),"width",1/1.25)
        changeSize(document.getElementById("c2"),"top",1/1.25)
        changeSize(document.getElementById("c2"),"left",1/1.25)
        document.getElementById("c2").style.height = "auto"
    
        changeSize(document.getElementById("c3"),"width",1/1.25)
        changeSize(document.getElementById("c3"),"top",1/1.25)
        changeSize(document.getElementById("c3"),"left",1/1.25)
        document.getElementById("c3").style.height = "auto"

        changeSize(document.getElementById("c4"),"width",1/1.25)
        changeSize(document.getElementById("c4"),"top",1/1.25)
        changeSize(document.getElementById("c4"),"left",1/1.25)
        document.getElementById("c4").style.height = "auto"


        for(let i=0;i<1000;i++)
        {
            let randomplane = document.getElementById("randomPlane"+ i)
            if(typeof(randomplane)!== "undefined" && randomplane !== null)
            {
                changeSize(randomplane,"top",1/1.25)
                changeSize(randomplane,"left",1/1.25)
            }



        }
        //console.log(newTopPosition)
    }



}


export {zoomIn,getZoom,zoomOut}