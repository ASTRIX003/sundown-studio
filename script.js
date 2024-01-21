document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
});
var a = document.querySelector("#elem-container")
var b = document.querySelector("#fixed-image")
a.addEventListener("mouseenter",function(){
    
    b.style.display = "block"
})
a.addEventListener("mouseleave",function(){
    b.style.display = "none"
});


var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute('data-image')
        b.style.backgroundImage = `url(${image})`
    })
})
 

var cursor = document.querySelector("#cursor")
var page4 = document.querySelector("#page-4")
page4.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
   
    x:dets.x,
    y:dets.y
   })
})
page4.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page4.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})