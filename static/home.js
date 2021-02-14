const intro = document.querySelector(".intro");
const video = intro.querySelector("video");

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((links, index) => {
            if(links.style.animation){
                links.style.animation = '';
            }else{
                links.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 0.4}s`
            }           
        });
        
        burger.classList.tooggle('toggle');
    });
    
}

navSlide();

//END SECTION
const section = document.querySelector("section");
// const end = section.querySelector("a h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 9000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//Text Animation
// const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

// let scene2 = new ScrollMagic.Scene({
//   duration: 3000,
//   triggerElement: intro,
//   triggerHook: 0
// })
//   .setTween(textAnim)
//   .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);
