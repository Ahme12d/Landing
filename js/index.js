let mainColor=localStorage.getItem("colors")

if(mainColor != null){
    document.documentElement.style.setProperty("--main-color",mainColor)
    document.querySelectorAll(".colors-list li").forEach(element=>{
        element.classList.remove("active")
if(element.dataset.color===mainColor){
element.classList.add("active")
}
    })
}

let backgroundOP=true;
let backgroundIntrival;

let backgroundLocalItem=localStorage.getItem("background_option")

if(backgroundLocalItem !=null){

if(backgroundLocalItem==="true"){
    backgroundOP=true;
}else{
    backgroundOP=false;
}


document.querySelectorAll(".random-background span").forEach(element=>{
    element.classList.remove("active")
})
}
if(backgroundLocalItem==="true"){
document.querySelector(".random-background .yes").classList.add("active")
}else{
    document.querySelector(".random-background .no").classList.add("active")
}


// toggele spin
document.querySelector(".toggle-setting .fa-gear").onclick=function(){
    // toggle class fa-spin rotation for self
    this.classList.toggle("fa-spin");
    // toggle class open 
document.querySelector(".sitting-box").classList.toggle("open");

}

//switch colors

const colorsli=document.querySelectorAll(".colors-list li")
colorsli.forEach(li=>{
li.addEventListener("click",(e)=>{
document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
localStorage.setItem("colors",e.target.dataset.color)
handleActive(e);
})
})
//switch randomBackground option

const randomBackground=document.querySelectorAll(".random-background span")
randomBackground.forEach(span=>{
span.addEventListener("click",(e)=>{
e.target.parentElement.querySelectorAll(".active").forEach(element=>{
    element.classList.remove("active")
})
e.target.classList.add("active")

if(e.target.dataset.backgroud=="yes"){
backgroundOP=true;
randomizeImgs() 
localStorage.setItem("background_option",true)
}else{
    backgroundOP=false;
    clearInterval(backgroundIntrival)
    localStorage.setItem("background_option",false)
}





})
})









// landingpage

let landingpage=document.querySelector(".landing-page")
let imagesArray=["01.jpg","02.jpg","06.jpg","04.jpg","08.jpg"];


function randomizeImgs(){
    if(backgroundOP==true){
       backgroundIntrival= setInterval(() => {
            let randomNumber=Math.floor(Math.random()* imagesArray.length)
            landingpage.style.backgroundImage='url("image/'+imagesArray[randomNumber] +'")'
        },3000);
        
    }
}




// select skills selector

let ourSkills=document.querySelector(".skills")

window.onscroll=function () {
let skillOffsetTop=ourSkills.offsetTop;
// this.console.log(skillOffsetTop)
let skillOuterHeight=ourSkills.offsetHeight;
// this.console.log(skillOuterHeight)


let windowHeight=this.innerHeight;
// this.console.log(windowHeight)

let windowScrolltop=this.pageYOffset;
// this.console.log(windowScrolltop)



if(windowScrolltop>(skillOffsetTop-skillOuterHeight-windowHeight+1084)){
let allSkills=document.querySelectorAll(".skill-box .skill-progress span")
allSkills.forEach(skill=>{
    skill.style.width=skill.dataset.progress
})

  }
}



// create  Popup with the Image

let OurGallery=document.querySelectorAll(".gallery img");
OurGallery.forEach(img=>{
    img.addEventListener("click",(e)=>{
        let overlay=document.createElement("div");
        overlay.classList="popup-overlay";
        document.body.append(overlay)
        // create the popup-box
        let popupBox=document.createElement("div")
        popupBox.className="popup-Box"
        if(img.alt !==null){
            let imgHeading=document.createElement("h3");
            let imgText=document.createTextNode(img.alt)
            imgHeading.appendChild(imgText);
            popupBox.appendChild(imgHeading)
        }
        
        // create the popup-Image
        let popupImage=document.createElement("img")
        popupImage.src=img.src
        popupBox.appendChild(popupImage)
        document.body.appendChild(popupBox)

// Create close span 
let closeButton=document.createElement("span");

let closeButtonText=document.createTextNode("X")
closeButton.appendChild(closeButtonText)

closeButton.className="close-button";

popupBox.appendChild(closeButton)

    })
})

document.addEventListener("click",function(e){
if(e.target.className=="close-button"){
    e.target.parentNode.remove()
    document.querySelector(".popup-overlay").remove()
}
})



// select all bullets
const allBullets=document.querySelectorAll(".nav-bullets .bullet");
// 
// select all link

const allLinks=document.querySelectorAll(".links a");
function scrollToSomewhere(element){
    element.forEach(ele=>{
        ele.addEventListener("click",(e)=>{
            e.preventDefault()
    document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior:"smooth"
    })
    
    
        })
    })
}
scrollToSomewhere(allLinks);
scrollToSomewhere(allBullets);




//handle active state
function handleActive(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active")
    })
    ev.target.classList.add("active")
}

















let bulletsSpan=document.querySelectorAll(".testing-option span");
let bulletContainer=document.querySelector(".nav-bullets");
let bulletLocalItam=localStorage.getItem("bullets-option")
if(backgroundLocalItem !==null){
bulletsSpan.forEach(span=>{
    span.classList.remove("active")
});
if(backgroundLocalItem==="block"){
    localStorage.setItem("bullets-option","show")
    document.querySelector(".testing-option .yes").classList.add("active")
}else{
   
    localStorage.setItem("bullets-option","hide")
    document.querySelector(".testing-option .no").classList.add("active")
}
}
bulletsSpan.forEach(span=>{
    span.addEventListener("click",(e)=>{
        
if(span.dataset.display=="show"){
bulletContainer.style.display="block";
localStorage.setItem("bullets-option","show")

}else{
    bulletContainer.style.display="none";
    localStorage.setItem("bullets-option","hide")
}

handleActive(e)


    })
})



// reset button
document.querySelector(".reset-option").onclick=function(){
//    localStorage.remove("bullets-option");
//    localStorage.remove("background_option");
//    localStorage.remove("colors");
localStorage.clear();
window.location.reload();
}


// toggle menu 

let toggleBtn=document.querySelector(".toggle-menu");
let tLinks=document.querySelectorAll(".links");
toggleBtn.onclick=function(){
    this.classList.toggle("menu-active");
    tLinks.classList.toggle("open");
}