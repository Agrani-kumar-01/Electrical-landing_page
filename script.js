
let slides  = document.querySelectorAll(".slide")
let b1 = document.querySelector(".b1")
let b2 = document.querySelector(".b2")

// console.log(slides);
let counter = 0

slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
})

const goNext = ()=>{
    // console.log(slides.length);
    if(counter<1){
        counter++
        slideImage()
        b1.style.backgroundColor = "white"
        b2.style.backgroundColor = "#ff8800"
    }
        
}

const goPrev = ()=>{
    if(counter>0){
        counter--
        slideImage()
        b2.style.backgroundColor = "White"
        b1.style.backgroundColor = "#ff8800"
    }
}

const slideImage = ()=>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}

let sliderImg = document.querySelector(".happy-slider")
let rightBtn = document.querySelector(".right")
let leftBtn = document.querySelector(".left")

sliderImg.addEventListener("wheel",(event)=>{
    event.preventDefault()
    sliderImg.scrollLeft += event.deltaY
    sliderImg.style.scrollBehavior = "auto"
})

const goRight = ()=>{
    sliderImg.style.scrollBehavior = "smooth"
    sliderImg.scrollLeft +=470
}

const goLeft = ()=>{
    sliderImg.style.scrollBehavior = "smooth"
    sliderImg.scrollLeft -=470
}