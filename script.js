AOS.init();
const progresses= document.querySelectorAll(".progress-bar")
const nav= document.querySelector(".navbar")
const intro = document.querySelector(".intro")



const options={
    root:null,
    threshold:1,
    rootMargin:"0px"
}
const optionsIntro={
    root:null,
    threshold:0.5,
    rootMargin:"0px"
}
// progresses.forEach(pb=>{
//     pb.style.width=pb.dataset.width
//     pb.innerHTML= pb.dataset.width
// })
const observer=new IntersectionObserver(
   function(elements){
    elements.forEach(ele=>{
        if(ele.isIntersecting){
            ele.target.style.width=ele.target.dataset.width
            ele.target.innerHTML= ele.target.dataset.width
        }
        else{           
            ele.target.style.width="10%"
        }
    })
        
    },options)

progresses.forEach(progress=>{
    observer.observe(progress)  
})

const observerIntro=new IntersectionObserver(function(entries){
    entries.forEach((ele)=>{
        console.log(ele.target);
        if(!ele.isIntersecting){
            nav.classList.remove("navbar-expand-lg")
            nav.classList.add("stick")
        }
        else{
            nav.classList.add("navbar-expand-lg")
            nav.classList.remove("stick")
        }       
    })
},optionsIntro)
observerIntro.observe(intro)


