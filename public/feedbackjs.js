var characterEyes = document.getElementsByClassName("eyes");
var faceshadow = document.getElementsByClassName("faceshadow");
var characterBody = document.getElementsByClassName("body");
var characterUpperArm = document.getElementsByClassName("upperarm");
var characterLowerArm = document.getElementsByClassName("lowerarm");
var backgroundClouds = document.getElementsByClassName("background-cloud");
var characterfoot = document.getElementsByClassName("backshoe");
var flag = document.getElementsByClassName("flag");
var fumesgroup = document.getElementsByClassName("fumesgroup");
var fume1 = document.getElementsByClassName("fume1");
var fume2 = document.getElementsByClassName("fume2");
var fume3 = document.getElementsByClassName("fume3");
var fumeshape1 = document.getElementsByClassName("fumeshape1");
var fumeshape2 = document.getElementsByClassName("fumeshape2");
var fumeshape2static = document.getElementsByClassName("fumeshape2static");
var fumeshape2static2 = document.getElementsByClassName("fumeshape2static2");
var fumeshape3 = document.getElementsByClassName("fumeshape3");



/* Animation */
var tlbackgroundClouds = new TimelineMax({repeat:-1, yoyo:true});
tlbackgroundClouds.to(backgroundClouds, 30, {x:-40})

var tlflag = new TimelineMax({repeat:-1});
tlflag.to(flag, 1.5, {skewY:-10})
tlflag.to(flag, 2, {skewY:0})

var tlcharacterBlink = new TimelineMax({repeat:-1});
tlcharacterBlink.set(characterEyes, {scaleX:1.2, scaleY:1.05, x:-1.8})
tlcharacterBlink.set(faceshadow, {transformOrigin:"50% 0%", scaleX:1, scaleY:.77})
tlcharacterBlink.to(characterEyes, .2, {opacity: 0}, 3.8)
tlcharacterBlink.to(characterEyes, .2, {opacity: 1})

var tlcharacterBreathing = new TimelineMax({
  repeat:-1, yoyo:true
});
tlcharacterBreathing.to(characterBody, 5, {
  transformOrigin: "50% 100%",
  scaleY: 1.02,
})

var tlcharacterUpperArm = new TimelineMax();
tlcharacterUpperArm.set(characterUpperArm, {transformOrigin:"10% 50%"})
tlcharacterUpperArm.to([characterUpperArm, characterLowerArm], 5, {
  y:-2.5,
  repeat:-1,
  yoyo:true
})

var tlcharacterLowerArm = new TimelineMax({
  repeat:-1, yoyo:true
});
  tlcharacterLowerArm.set(characterLowerArm,    {
    transformOrigin:"15% 65%"})
  tlcharacterLowerArm.to([characterLowerArm], 1, {
    rotation:-4,
  }, 1.5)
  tlcharacterLowerArm.to([characterLowerArm], 2.8, {
    rotation:0,
  }, 8)


var tlcharacterBackShoe = new TimelineMax({repeat:-1});
tlcharacterBackShoe.set(characterfoot, {transformOrigin:"40% 50%"})
tlcharacterBackShoe.to(characterfoot, 1, {
  rotation:5,
}, 5)
tlcharacterBackShoe.to(characterfoot, .7, {
  rotation:0,
})

/*Fumes Animation*/
var tlfumesgroup = new TimelineMax();
tlfumesgroup.set(fumesgroup, {y:-80})

var tlfumeshape = new TimelineMax({
  repeat:-1
});
tlfumeshape.set([fumeshape1, fumeshape2, fumeshape3], {
  transformOrigin:"50% 50%"})
tlfumeshape.set([fumeshape2, fumeshape2static], {
  x:75, y:-89, 
  scaleY:1.1, scaleX:1.55})
tlfumeshape.set(fumeshape2static2, {
  x:50, y:-60,
  scaleY:1.1, scaleX:1.55
})
tlfumeshape.set(fumeshape3, {
  x:220, y:-185, 
  scaleY:1.8, scaleX:3.3})

tlfumeshape.to(fumeshape3, 3, {
  scaleY:1.3, scaleX:2.5})
tlfumeshape.to(fumeshape2, 3, {
  ease: "linear",
  x:220, y:-185, 
  scaleY:1.8, scaleX:3.3}, "-=3")
tlfumeshape.to(fumeshape1, 2.3, {
  ease: "linear",
  x:75, y:-89, 
  scaleY:1.1, scaleX:1.55}, "-=2.2")

