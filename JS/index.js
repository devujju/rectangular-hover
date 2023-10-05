var rec=document.querySelector("#center");

/*var rectLocation=rec.getBoundingClientRect();
console.log(rectLocation.left)
console.log(rectLocation.right)
console.log(rectLocation.width)*/

rec.addEventListener("mousemove", function(details){
    var rectLocation=rec.getBoundingClientRect();
    var insideRectVal=details.clientX-rectLocation.left;
    

    if(insideRectVal<rectLocation.width/2){
        //console.log("left");
        var redColor=gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRectVal);
        gsap.to(rec, {
            backgroundColor:`rgb(${redColor},0,0)`,
            ease:Power4
        })
    }else{
        var blueColor=gsap.utils.mapRange(rectLocation.width/2,rectLocation.width, 0, 255, insideRectVal);
        gsap.to(rec, {
            backgroundColor:`rgb(0,0,${blueColor})`,
            ease:Power4
        })
    }
})

rec.addEventListener("mouseleave", function(){
    rec.style.backgroundColor="white";
})