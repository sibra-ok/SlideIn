console.log('hi');

let slide=document.getElementById('site-wrap');

let slides=document.querySelectorAll('.slide-in');
let scrolled=false;
/*
slide.addEventListener('scroll',(e)=>{
    if(!scrolled){
console.log('scrolled');
scrolled=true;
let slides=document.querySelectorAll('.slide-in');

if(slides.classList.contains('align-left')){

slides.classList.add('active');
setTimeout(function(){
},5000);

}

}
})

*/




window.addEventListener('scroll',()=>{
console.log('scroll');


let slides=document.querySelectorAll('.wrap .slide-in');

slides.forEach(slide=>{

//if(!scrolled){
//scrolled=true;
//console.log('true')

if(isInViewport(slide)){
slide.classList.add('active');
console.log('inView')
}


else{
setTimeout(()=>{
slide.classList.remove('active')},1000)
}






//}

});

});



function isInViewport(element){
    const rect= element.getBoundingClientRect();
    return(
    rect.top<=window.innerHeight&
    rect.left<window.innerWidth&&
    rect.bottom>=0&&//(window.innerHeight||document.documentElement.clientHeight)&&
    rect.right>0//(window.innerWidth||document.documentElement.clientWidth)
    );
    
    
    }