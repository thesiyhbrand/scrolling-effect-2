var tl = gsap.timeline({scrollTrigger:{
  trigger:"#main",
  // markers:true,
  start:"75% 50%",
  end:"100% 50%",
  scrub:5,
  duration: 1,
  pin:true,
}});
tl
.to(".img",{
  width: "100vw",
  height: "100vh",
})