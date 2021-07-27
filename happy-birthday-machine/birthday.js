function webLoad() {
    /*Declare Variables*/
    var bDayName;
    var bDayName_default = "Name Here";
    var color1;
    var color1_default = "#FF0000";
    var color2;
    var color2_default = "#0000FF";
    var cake_default = "1";
    var font_default = "Oxygen";
    /*Setting random Music*/
    var songs = [
        'song1.mp3',
        'song2.mp3',
        'song3.mp3',
        'song4.mp3',
        '"media/Happy_Birthday.mp3'
    ];
    var randomSong = Math.floor(Math.random() * songs.length);

    document.getElementById('bday').setAttribute('src', songs[randomSong]);
    var cake = localStorage.getItem('cake');
    /*Local Storage*/
    bDayName = localStorage.getItem('BdayPerson');
    color1 = localStorage.getItem('color1');
    color2 = localStorage.getItem('color2');
    /*Custom font*/
    document.getElementById("body").style.fontFamily = localStorage.getItem('font');
    if (!localStorage.getItem('font')) {
        document.getElementById("body").style.fontFamily = "Oxygen";
        localStorage.setItem('font', font_default);
    }
    if (!localStorage.getItem('BdayPerson')) {
        localStorage.setItem('BdayPerson', bDayName_default);
        bDayName = bDayName_default;
    } else if (!localStorage.getItem('color1')) {
        localStorage.setItem('color1', color1_default);
        color1 = color1_default;
    } else if (!localStorage.getItem('color2')) {
        localStorage.setItem('color2', color2_default);
        color2 = color2_default;
    } else if (!localStorage.getItem('cake')) {
        localStorage.setItem('cake', cake_default);
        cake = cake_default;
    } else {
        console.log('Everything is working, or some other error occured!')
    }
    document.title = 'Happy Birthday ' + bDayName + '!';
    /*Change Style tag innerHTML*/
    document.getElementById('animation-container').innerHTML = `

@keyframes bounce {
0% {
color: ${color1};
}
100% {
color: ${color2};
top: -20px;
text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
0 50px 25px rgba(0, 0, 0, 0.2);
}
}`
        /*InnerHTML changes*/
    document.getElementById('BDayName').innerHTML = bDayName;
    /*Cake Changes*/
    if (cake === "1") {
        console.log('Default Cake Already Set!')
    } else if (cake === "2") {
        document.getElementById('cake-style').innerHTML = `
body {
background: #1D8348;
justify-content: center;
align-items: center;
height: 100vh;
}
.container {
position: absolute;
left: 48%;
top: 35%;
}

.bdaycake {
top: 200px;
position: relative;
}

.holder {
position: absolute;
width: 350px;
height: 20px;
border-radius: 100px;
background-color: #212F3C;
left: -140px;
z-index: 11;
top: 10px;
}

.holder2 {
position: absolute;
width: 100px;
height: 150px;
background-color: #CACFD2;
left: -22px;
}

.holder:before {
content: "";
position: absolute;
width: 200px;
height: 20px;
border-radius: 100px;
background-color: #CACFD2;
top: 139px;
left: 77px;
}

.shadow {
position: absolute;
width: 400px;
height: 40px;
border-radius: 50%;
top: 150px;
left: -155px;
background-color: rgba(0, 0, 0, 0.095);
z-index: -1;
}

.holder1 {
position: absolute;
background-color: #1D8348;
width: 100px;
height: 119px;
border-radius: 0 30px 0 0;
left: -77px;
top: 30px;
z-index: 10;
}

.holder1:after {
position: absolute;
content: "";
background-color: #1D8348;
width: 100px;
height: 120px;
border-radius: 30px 0 0 0;
left: 130px;
}

.cake {
position: absolute;
overflow: hidden;
width: 280px;
height: 140px;
background-color: #FAD7A0;
top: -130px;
left: -102px;
border-radius: 30px 30px 0 0;
}

.cake:after {
content: "";
background-color: #935116;
width: 280px;
height: 15px;
position: absolute;
top: 105px;
}

.cake:before {
content: "";
background-color: #935116;
width: 280px;
height: 15px;
position: absolute;
top: 75px;
}

.top {
position: absolute;
background-color: #573612;
width: 290px;
height: 40px;
box-shadow: inset -10px 10px 0 rgba(0, 0, 0, 0.07);
}

.top:after {
content: "";
position: absolute;
background-color: #573612;
width: 25px;
height: 55px;
top: 15px;
border-radius: 50px;
}

.top:before {
content: "";
position: absolute;
background-color: #FAD7A0;
width: 25px;
height: 35px;
top: 25px;
left: 25px;
border-radius: 50px;
}

.chocolate {
position: absolute;
background-color: #573612;
width: 25px;
height: 45px;
top: 15px;
left: 50px;
border-radius: 50px;
}

.chocolate:after {
content: "";
position: absolute;
background-color: #FAD7A0;
width: 25px;
height: 35px;
left: 25px;
border-radius: 50px;
}

.chocolate:before {
position: absolute;
background-color: #573612;
width: 25px;
height: 45px;
top: 10px;
left: 50px;
border-radius: 50px;
content: "";
}

.chocolate1 {
position: absolute;
background-color: #FAD7A0;
width: 25px;
height: 35px;
left: 125px;
top: 25px;
border-radius: 50px;
}

.chocolate1:after {
position: absolute;
background-color: #573612;
width: 25px;
height: 45px;
top: -5px;
left: 25px;
border-radius: 50px;
content: "";
}

.chocolate1:before {
position: absolute;
content: "";
background-color: #FAD7A0;
width: 25px;
height: 35px;
left: 50px;
top: 5px;
border-radius: 50px;
}

.chocolate2 {
position: absolute;
background-color: #573612;
width: 25px;
height: 35px;
left: 200px;
top: 17px;
border-radius: 50px;
}

.chocolate2:after {
position: absolute;
content: "";
background-color: #FAD7A0;
border-radius: 50px;
width: 25px;
height: 35px;
left: 25px;
}

.chocolate2:before {
content: "";
position: absolute;
background-color: #573612;
width: 35px;
height: 35px;
left: 50px;
top: 8px;
border-radius: 50px;
}

.candle {
position: absolute;
width: 15px;
height: 70px;
background-color: white;
top: -200px;
left: 30px;
box-shadow: inset 0 -10px 0 #E74C3C;
}

.candle:after {
position: absolute;
width: 15px;
height: 15px;
background-color: #E74C3C;
content: "";
top: 35px;
}

.candle:before {
position: absolute;
width: 15px;
height: 15px;
background-color: #E74C3C;
content: "";
top: 10px;
}

.candle1 {
width: 2px;
height: 15px;
content: "";
position: absolute;
background-color: black;
top: -215px;
left: 36px;
}

.flame {
position: absolute;
background-color: #F4D03F;
opacity: 0.9;
z-layer: 1000;
box-shadow: inset 0 -5px 5px #D35400, 5px -5px 20px #FBFFA3;
width: 20px;
height: 30px;
top: -240px;
border-radius: 50%;
left: 27.5px;
animation: flame 0.5s infinite;
}

@keyframes flame {

from,
to {
transform: scale(1, 1);
}

25% {
transform: scale(0.9, 1.1);
}

50% {
transform: scale(1.1, 0.9);
}

75% {
transform: scale(0.95, 1.05);
}
}
        `
        document.getElementById('cake-html').innerHTML = `
<div class="container">
<div class="bdaycake">
<div class="holder"></div>
<div class="holder2"></div>
<div class="holder1"></div>
<div class="shadow"></div>
<div class="cake">
<div class="top"></div>
<div class="chocolate"></div>
<div class="chocolate1"></div>
<div class="chocolate2"></div>
</div>
<div class="candle"></div>
<div class="candle1"></div>
<div class="flame"></div>
</div>
</div>
`;
    } else if (cake === "3") {
        document.getElementById('cake-style').innerHTML = `
        body {
background: rgb(249, 236, 233);
background: radial-gradient(
  circle,
  rgba(249, 236, 233, 1) 1%,
  rgba(221, 184, 184, 1) 100%
);
}

.cake {
position: absolute;
width: 250px;
height: 200px;
top: 50%;
left: 50%;
margin-top: -70px;
margin-left: -125px;
}

.plate {
width: 270px;
height: 110px;
position: absolute;
bottom: -10px;
left: -10px;
background-color: #ccc;
border-radius: 50%;
box-shadow: 0 2px 0 #b3b3b3, 0 4px 0 #b3b3b3,
  0 5px 40px rgba(0, 0, 0, 0.5);
}

.cake > * {
position: absolute;
}

.layer {
position: absolute;
display: block;
width: 250px;
height: 100px;
border-radius: 50%;
background-color: #ff99a3;
box-shadow: 0 2px 0px #ffc4ca, 0 4px 0px #ffc4ca, 0 6px 0px #ffc4ca,
  0 8px 0px #ffc4ca, 0 10px 0px #ffc4ca, 0 12px 0px #ffc4ca,
  0 14px 0px #ffc4ca, 0 16px 0px #ffc4ca, 0 18px 0px #ffc4ca,
  0 20px 0px #ffc4ca, 0 22px 0px #ffc4ca, 0 24px 0px #ffc4ca,
  0 26px 0px #ffc4ca, 0 28px 0px #ffc4ca, 0 30px 0px #ffc4ca;
}

.layer-top {
top: 0px;
}

.layer-middle {
top: 33px;
}

.layer-bottom {
top: 66px;
}

.icing {
top: 2px;
left: 5px;
background-color: #F8DBDB;
width: 240px;
height: 90px;
border-radius: 50%;
}
.icing:before {
content: '';
position: absolute;
top: 4px;
right: 5px;
bottom: 6px;
left: 5px;
background-color: #F8DBDB;
box-shadow: 0 0 4px #FFB9B9, 0 0 4px #f6efe3, 0 0 4px #f6efe3;
border-radius: 50%;
z-index: 1;
}

.drip {
display: block;
width: 50px;
height: 60px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
background-color: #FFCECE;
}

.drip1 {
top: 53px;
left: 5px;
transform: skewY(15deg);
height: 48px;
width: 40px;
}

.drip2 {
top: 69px;
left: 181px;
transform: skewY(-15deg);
}

.drip3 {
top: 54px;
left: 90px;
width: 80px;
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
}

.candle {
background-color: #ccc;
width: 16px;
height: 50px;
border-radius: 8px/4px;
top: -20px;
left: 50%;
margin-left: -8px;
z-index: 10;
}
.candle:before {
content: '';
position: absolute;
top: 0;
left: 0;
width: 16px;
height: 8px;
border-radius: 50%;
background-color: #AFAEAE;
}

.flame {
position: absolute;
background-color: orange;
width: 15px;
height: 35px;
border-radius: 10px 10px 10px 10px/25px 25px 10px 10px;
top: -34px;
left: 50%;
margin-left: -7.5px;
z-index: 10;
box-shadow: 0 0 10px rgba(255, 165, 0, 0.5),
  0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5),
  0 0 80px rgba(255, 165, 0, 0.5);
transform-origin: 50% 90%;
animation: flicker 1s ease-in-out alternate infinite;
}

@keyframes flicker {
0% {
  transform: skewX(5deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.2),
    0 0 20px rgba(255, 165, 0, 0.2), 0 0 60px rgba(255, 165, 0, 0.2),
    0 0 80px rgba(255, 165, 0, 0.2);
}
25% {
  transform: skewX(-5deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.5),
    0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5),
    0 0 80px rgba(255, 165, 0, 0.5);
}
50% {
  transform: skewX(10deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.3),
    0 0 20px rgba(255, 165, 0, 0.3), 0 0 60px rgba(255, 165, 0, 0.3),
    0 0 80px rgba(255, 165, 0, 0.3);
}
75% {
  transform: skewX(-10deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.4),
    0 0 20px rgba(255, 165, 0, 0.4), 0 0 60px rgba(255, 165, 0, 0.4),
    0 0 80px rgba(255, 165, 0, 0.4);
}
100% {
  transform: skewX(5deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.5),
    0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5),
    0 0 80px rgba(255, 165, 0, 0.5);
}
}`;
        document.getElementById('cake-html').innerHTML = `
        <div class="cake">
<div class="plate"></div>
<div class="layer layer-bottom"></div>
<div class="layer layer-middle"></div>
<div class="layer layer-top"></div>
<div class="icing"></div>
<div class="drip drip1"></div>
<div class="drip drip2"></div>
<div class="drip drip3"></div>
<div class="candle">
<div class="flame"></div>
</div>
</div>`;
    } else if (cake === "4") {
        document.getElementById('cake-style').innerHTML = `
        body {
            background: rgb(255,255,189);
background: radial-gradient(circle, rgba(255,255,189,1) 8%, rgba(248,255,116,1) 100%);

}

.cake {
position: absolute;
width: 250px;
height: 200px;
top: 50%;
left: 50%;
margin-top: -70px;
margin-left: -125px;
}

.plate {
width: 270px;
height: 110px;
position: absolute;
bottom: -10px;
left: -10px;
background-color: #ccc;
border-radius: 50%;
box-shadow: 0 2px 0 #b3b3b3, 0 4px 0 #b3b3b3,
  0 5px 40px rgba(0, 0, 0, 0.5);
}

.cake > * {
position: absolute;
}

.layer {
position: absolute;
display: block;
width: 250px;
height: 100px;
border-radius: 50%;
background-color: #f3f0cb;
box-shadow: 0 2px 0px #ecce8c, 0 4px 0px #ecce8c, 0 6px 0px #ecce8c,
  0 8px 0px #ecce8c, 0 10px 0px #ecce8c, 0 12px 0px #ecce8c,
  0 14px 0px #ecce8c, 0 16px 0px #ecce8c, 0 18px 0px #ecce8c,
  0 20px 0px #ecce8c, 0 22px 0px #ecce8c, 0 24px 0px #ecce8c,
  0 26px 0px #ecce8c, 0 28px 0px #ecce8c, 0 30px 0px #ecce8c;
}

.layer-top {
top: 0px;
}

.layer-middle {
top: 33px;
}

.layer-bottom {
top: 66px;
}

.icing {
top: 2px;
left: 5px;
background-color: #f3f0cb;
width: 240px;
height: 90px;
border-radius: 50%;
}
.icing:before {
content: '';
position: absolute;
top: 4px;
right: 5px;
bottom: 6px;
left: 5px;
background-color: #f7f6e7;
box-shadow: 0 0 4px #f3f0cb, 0 0 4px #f3f0cb, 0 0 4px #f3f0cb;
border-radius: 50%;
z-index: 1;
}

.drip {
display: block;
width: 50px;
height: 60px;
border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;
background-color: #f3f0cb;
}

.drip1 {
top: 53px;
left: 5px;
transform: skewY(15deg);
height: 48px;
width: 40px;
}

.drip2 {
top: 69px;
left: 181px;
transform: skewY(-15deg);
}

.drip3 {
top: 54px;
left: 90px;
width: 80px;
border-bottom-left-radius: 40px;
border-bottom-right-radius: 40px;
}

.candle {
background-color: #7b020b;
width: 16px;
height: 50px;
border-radius: 8px/4px;
top: -20px;
left: 50%;
margin-left: -8px;
z-index: 10;
}
.candle:before {
content: '';
position: absolute;
top: 0;
left: 0;
width: 16px;
height: 8px;
border-radius: 50%;
background-color: #ad030f;
}

.flame {
position: absolute;
background-color: orange;
width: 15px;
height: 35px;
border-radius: 10px 10px 10px 10px/25px 25px 10px 10px;
top: -34px;
left: 50%;
margin-left: -7.5px;
z-index: 10;
box-shadow: 0 0 10px rgba(255, 165, 0, 0.5),
  0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5),
  0 0 80px rgba(255, 165, 0, 0.5);
transform-origin: 50% 90%;
animation: flicker 1s ease-in-out alternate infinite;
}

@keyframes flicker {
0% {
  transform: skewX(5deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.2),
    0 0 20px rgba(255, 165, 0, 0.2), 0 0 60px rgba(255, 165, 0, 0.2),
    0 0 80px rgba(255, 165, 0, 0.2);
}
25% {
  transform: skewX(-5deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.5),
    0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5),
    0 0 80px rgba(255, 165, 0, 0.5);
}
50% {
  transform: skewX(10deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.3),
    0 0 20px rgba(255, 165, 0, 0.3), 0 0 60px rgba(255, 165, 0, 0.3),
    0 0 80px rgba(255, 165, 0, 0.3);
}
75% {
  transform: skewX(-10deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.4),
    0 0 20px rgba(255, 165, 0, 0.4), 0 0 60px rgba(255, 165, 0, 0.4),
    0 0 80px rgba(255, 165, 0, 0.4);
}
100% {
  transform: skewX(5deg);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.5),
    0 0 20px rgba(255, 165, 0, 0.5), 0 0 60px rgba(255, 165, 0, 0.5),
    0 0 80px rgba(255, 165, 0, 0.5);
}
}`;
        document.getElementById('cake-html').innerHTML = `
        <div class="cake">
<div class="plate"></div>
<div class="layer layer-bottom"></div>
<div class="layer layer-middle"></div>
<div class="layer layer-top"></div>
<div class="icing"></div>
<div class="drip drip1"></div>
<div class="drip drip2"></div>
<div class="drip drip3"></div>
<div class="candle">
<div class="flame"></div>
</div>
</div>`;
    } else if (cake === "5") {
        document.getElementById('cake-style').innerHTML = `
        body {
background-color: #f0efeb;
display: flex;
justify-content:center;
align-items: center;
height: 100vh;
}

.container {
position: absolute;
top: 50%;
left: 50%;
}

.bdayCake {
position: relative;
left:-100px;
top:100px;
}

.plate {
position: absolute;
width: 242px;
height:10px;
border-radius:10px;
background-color: #2a9d8f;
}

.plate:before {
content:"";
position: absolute;
width:195px;
height:90px;
background-color: #9c6644;
top:-90px;
left:25px;  
}

.plate:after {
content:"";
position: absolute;
width:195px;
left:25px;
height:10px;
background-color: #ffd166;
top:-60px;
box-shadow: 0px 25px #f4978e;
}

.cream {
position: absolute;
background-color: #f08080;
width:195px;
height:20px;
left:25px;
top:-110px;
border-radius:20px 20px 0 0;
}

.cream:before {
content:"";
position: absolute;
background-color: #f08080;
width:15px;
height:30px;
top:10px;
border-radius:20px;
box-shadow: 15px 5px #9c6644, 30px -5px #f08080, 45px 0px #9c6644, 60px 4px #f08080, 75px 3px #9c6644, 90px -5px #f08080, 105px 5px #9c6644, 120px -5px #f08080, 135px 0px #9c6644, 150px 4px #f08080, 165px 0px #9c6644, 180px 3px #f08080;
}

.cream:after {
position: absolute;
content:"";
background-color: rgba(0,0,0,0.1);
width: 97.5px;
height:110px;
left:98px;
border-radius: 0 20px 0 0;
}

.candle {
position: absolute;
width: 10px;
height:40px;
background: repeating-linear-gradient(#fae0e4,
#fae0e4 5px, #ff0a54 5px, #ff0a54 10px);
box-shadow: inset -5px 0px rgba(0,0,0,0.1);
top: -150px;
left:118px;
}

.candle:before {
content:"";
position: absolute;
background-color: #333;
width:2px;
height:10px;
top:-10px;
left:4px;
}

.candle:after {
content:"";
position: absolute;
width:20px;
height: 20px;
background-color:#fcca46;
border-radius: 80% 15% 55% 50% / 55% 15% 80% 50%;
box-shadow: inset -3px 3px #fe7f2d;
transform: rotate(-45deg);
top:-28px;
left:-5px;
opacity:0.9;
animation: scale .5s ease-out infinite;
}

@keyframes scale {
0% {transform: scaleY(1) rotate(-45deg); opacity:0.9;}
50% {transform: scaleY(0.9) rotate(-45deg); opacity:0.8;}
100% {transform: scaleY(1) rotate(-45deg); opacity: 0.9;}  
}

.flame {
position: absolute; 
}

.flame:before {
content:"";
position: absolute;
background-color: rgba(0,0,0,0.1);
height:10px;
width:118px;
border-radius:0 10px 10px 0;
top:0;
left:123px;
}

.one {
position: absolute;
color: #fcca46;
font-size:20px;
top:-160px;
left: 100px;
text-shadow: 33px -30px #fcca46;
animation: flash .5s ease infinite alternate;
}

.two {
position: absolute;
color: #fcca46;
font-size:15px;
top:-180px;
left: 100px;
text-shadow: 35px 30px #fcca46;
animation: flash .8s ease infinite alternate;
}

.three {
position: absolute;
color: #fcca46;
font-size:10px;
top:-195px;
left: 110px;
text-shadow: 30px 30px #fcca46;
animation: flash .4s ease infinite alternate;
}

@keyframes flash {
from { opacity: 1; }	
to { opacity: 0; }
}
        `;
        document.getElementById('cake-html').innerHTML = `
<div class="container">
<div class="bdayCake">
<div class="plate"></div>
<div class="cream"></div>
<div class="candle"></div>
<div class="flame">
<div class="one">&times;</div>
<div class="two">+</div>
<div class="three">+</div>
</div>
</div>
</div>
        `;
        document.getElementById('bouncing-letters').innerHTML = `
.bouncy-letters{
top: 20px;
left: 15%;
position: absolute
}             
h1 span {
position: relative;
top: 20px;
display: inline-block;
animation: bounce 0.3s ease infinite alternate;
color: #fff;
text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
0 8px 0 transparent, 0 9px 0 transparent,
0 10px 10px rgba(0, 0, 0, 0.4);
}
h1 span:nth-child(2) {
  animation-delay: 0.1s;
}

h1 span:nth-child(3) {
  animation-delay: 0.2s;
}

h1 span:nth-child(4) {
  animation-delay: 0.3s;
}

h1 span:nth-child(5) {
  animation-delay: 0.4s;
}

h1 span:nth-child(7) {
  animation-delay: 0.6s;
}

h1 span:nth-child(8) {
  animation-delay: 0.7s;
}

h1 span:nth-child(9) {
  animation-delay: 0.8s;
}

h1 span:nth-child(10) {
  animation-delay: 0.9s;
}

h1 span:nth-child(11) {
  animation-delay: 1s;
}

h1 span:nth-child(12) {
  animation-delay: 1.1s;
}

h1 span:nth-child(13) {
  animation-delay: 1.2s;
}

h1 span:nth-child(14) {
  animation-delay: 1.3s;
}

h1 span:nth-child(16) {
  animation-delay: 1.4s;
}

h1 span:nth-child(17) {
  animation-delay: 1.5s;
}
`;
    } else if (cake === "6") {
        document.getElementById('cake-style').innerHTML = `
        body {
          background: rgba(103, 190, 160, 0.7);
        }
        
        .plate {
          margin: 50vh auto;
          background: #efefef;
          height: 100px;
          width: 300px;
          border-radius: 50%;
          position: relative;
          box-shadow: -6px 8px 0 rgba(57, 134, 107, 0.5);
        }
        .plate:after {
          display: block;
          position: absolute;
          width: 85%;
          height: 80%;
          border-radius: inherit;
          background: #dfdfdf;
          content: "";
          left: 7.5%;
          top: 4%;
        }
        
        .cake {
          position: absolute;
          top: 50vh;
          margin-top: -60px;
          margin-left: -75px;
          left: 50vw;
        }
        .cake .top {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0px 70px 46px 63px;
          border-color: transparent transparent #7c2020;
          position: relative;
          z-index: 2;
          transform: rotate(20deg);
          position: relative;
        }
        .cake .layers {
          transform: skewY(20deg);
          position: relative;
          z-index: 1;
          width: 123px;
          left: -3px;
          top: -2px;
          border-left: 8px solid #541515;
          border-top: 8px solid #541515;
          box-sizing: border-box;
        }
        .cake .layers .layer {
          display: flex;
          justify-content: space-around;
          clear: both;
          height: 17px;
          background: #f6f5c3;
        }
        .cake .layers .layer:nth-child(2n) {
          background: brown;
          border-bottom: 6px solid #541515;
        }
        .cake .layers .layer:after {
          content: "";
          display: block;
          width: 105%;
          position: absolute;
          top: 100%;
          left: -57%;
          height: 100px;
          background: rgba(42, 98, 79, 0.1);
          transform: skew(-50deg);
          border-radius: 0 0 5px 5px;
        }
        .cake .layers .drip {
          width: 10px;
          height: 10px;
          background: #7c2020;
          border-radius: 0 0 50% 50%;
          margin-top: -8px;
          box-shadow: -1px 2px 0px #3f1010;
        }
        .cake .layers .drip:nth-child(2n) {
          width: 15px;
          height: 20px;
          margin-left: -10px;
        }
        .cake .layers .drip:after {
          content: "";
          display: block;
          width: 60%;
          margin: 0 auto;
          height: 80%;
          background: linear-gradient(
            to bottom,
            rgba(84, 21, 21, 0) 0%,
            rgba(84, 21, 21, 0) 28%,
            #541515 99%,
            #541515 100%
          );
          border-radius: 50%;
        }
        
        .candle {
          height: 50px;
          width: 10px;
          /* background: darken(#67bea0, 20%);*/
          background: linear-gradient(
            135deg,
            #39866b 5%,
            #67bea0 5%,
            #67bea0 10%,
            #39866b 10%,
            #39866b 15%,
            #67bea0 15%,
            #67bea0 20%,
            #39866b 20%,
            #39866b 25%,
            #67bea0 25%,
            #67bea0 30%,
            #39866b 30%,
            #39866b 35%,
            #67bea0 35%,
            #67bea0 40%,
            #39866b 40%
          );
          position: relative;
          z-index: 4;
          margin: -35px auto;
          border-radius: 4px;
          box-shadow: inset -2px 0 0 #67bea0;
        }
        .candle:before {
          content: "";
          position: absolute;
          top: -5px;
          left: 3px;
          display: block;
          width: 2px;
          height: 10px;
          background: #444;
        }
        .candle .shadow {
          display: block;
          height: 7px;
          width: 30px;
          background: rgba(84, 21, 21, 0.6);
          position: absolute;
          top: 100%;
          right: 50%;
          border-radius: 4px 4px 0 0;
          transform: rotate(-20deg) skewX(50deg);
        }
        .candle .flame {
          width: 16px;
          height: 16px;
          background: #f8c83c;
          border-radius: 50%;
          position: absolute;
          top: -18px;
          left: -3px;
          border-width: 0 8px 2px 8px;
          animation: flame 1s infinite;
        }
        .candle .flame:after {
          content: "";
          display: block;
          margin-top: -12px;
          margin-left: 0px;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0 8px 18px 8px;
          border-color: transparent transparent #f8c83c transparent;
        }
        
        .crumbs {
          width: 8px;
          height: 8px;
          background: #7c2020;
          border-radius: 50%;
          position: absolute;
          top: 50px;
          left: 70%;
          z-index: 4;
        }
        .crumbs:before {
          content: "";
          width: 8px;
          height: 8px;
          background: #7c2020;
          border-radius: 50%;
          display: block;
          margin-left: 15px;
          margin-top: 5px;
        }
        .crumbs:after {
          content: "";
          width: 4px;
          height: 4px;
          background: #7c2020;
          border-radius: 50%;
          display: block;
          margin-left: 10px;
          margin-top: 6px;
        }
        @keyframes flame {
          from,
          to {
            transform: scale(1, 1);
          }
        
          25% {
            transform: scale(0.9, 1.1);
          }
        
          50% {
            transform: scale(1.1, 0.9);
          }
        
          75% {
            transform: scale(0.95, 1.05);
          }
        }
        
    
      `;
        document.getElementById('cake-html').innerHTML = `
        <div class="cake">
  <div class="candle">
    <div class="flame"></div>
    <div class="shadow"></div>
  </div>
  <div class="top"></div>
  <div class="layers">
    <div class="layer">
      <div class="drip"></div>
      <div class="drip"></div>
      <div class="drip"></div>
    </div>
    <div class="layer"></div>     
    <div class="layer"></div>
    <div class="layer"></div>
  </div>
</div>
<div class="plate">
  <div class="crumbs"></div>
</div>

      `;
        document.getElementById('bouncing-letters').innerHTML = `
.bouncy-letters{
top: 20px;
left: 15%;
position: absolute
}             
h1 span {
position: relative;
top: 20px;
display: inline-block;
animation: bounce 0.3s ease infinite alternate;
color: #fff;
text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
0 8px 0 transparent, 0 9px 0 transparent,
0 10px 10px rgba(0, 0, 0, 0.4);
}
h1 span:nth-child(2) {
animation-delay: 0.1s;
}

h1 span:nth-child(3) {
animation-delay: 0.2s;
}

h1 span:nth-child(4) {
animation-delay: 0.3s;
}

h1 span:nth-child(5) {
animation-delay: 0.4s;
}

h1 span:nth-child(7) {
animation-delay: 0.6s;
}

h1 span:nth-child(8) {
animation-delay: 0.7s;
}

h1 span:nth-child(9) {
animation-delay: 0.8s;
}

h1 span:nth-child(10) {
animation-delay: 0.9s;
}

h1 span:nth-child(11) {
animation-delay: 1s;
}

h1 span:nth-child(12) {
animation-delay: 1.1s;
}

h1 span:nth-child(13) {
animation-delay: 1.2s;
}

h1 span:nth-child(14) {
animation-delay: 1.3s;
}

h1 span:nth-child(16) {
animation-delay: 1.4s;
}

h1 span:nth-child(17) {
animation-delay: 1.5s;
}
`;
    }


};


function removeBounce() {
    /*Declare Variables*/
    var bDayName;
    var bDayName_default = "Name Here";
    var color1;
    var color1_default = "#FF0000";
    var color2;
    var color2_default = "#0000FF"
        /*Local Storage*/
    bDayName = localStorage.getItem('BdayPerson');
    color1 = localStorage.getItem('color1');
    color2 = localStorage.getItem('color2');

    if (!localStorage.getItem('BdayPerson')) {
        localStorage.setItem('BdayPerson', bDayName_default);
        bDayName = bDayName_default;
    } else if (!localStorage.getItem('color1')) {
        localStorage.setItem('color1', color1_default);
        color1 = color1_default;
    } else if (!localStorage.getItem('color2')) {
        localStorage.setItem('color2', color2_default);
        color2 = color2_default;
    } else {
        console.log('Everything is working, or some other error occured!')
    }
    if (document.getElementById('animation-container').innerHTML === `
@keyframes bounce {
0% {
color: ${color1};
}
70%{
color: ${color2};
}
100% {
color: ${color1};
}
}`) {
        document.getElementById('animation-container').innerHTML = `
@keyframes bounce {
0% {
color: ${color1};
}
100% {
color: ${color2};
top: -20px;
text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
0 50px 25px rgba(0, 0, 0, 0.2);
}
}`;
        document.getElementById('bounce_changer').innerHTML = "Remove Bounce";
        document.getElementById('bouncing-letters').innerHTML = `
h1 span {
position: relative;
top: 20px;
display: inline-block;
animation: bounce 0.3s ease infinite alternate;
color: #fff;
text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
0 8px 0 transparent, 0 9px 0 transparent,
0 10px 10px rgba(0, 0, 0, 0.4);
}
h1 span:nth-child(2) {
  animation-delay: 0.1s;
}

h1 span:nth-child(3) {
  animation-delay: 0.2s;
}

h1 span:nth-child(4) {
  animation-delay: 0.3s;
}

h1 span:nth-child(5) {
  animation-delay: 0.4s;
}

h1 span:nth-child(7) {
  animation-delay: 0.6s;
}

h1 span:nth-child(8) {
  animation-delay: 0.7s;
}

h1 span:nth-child(9) {
  animation-delay: 0.8s;
}

h1 span:nth-child(10) {
  animation-delay: 0.9s;
}

h1 span:nth-child(11) {
  animation-delay: 1s;
}

h1 span:nth-child(12) {
  animation-delay: 1.1s;
}

h1 span:nth-child(13) {
  animation-delay: 1.2s;
}

h1 span:nth-child(14) {
  animation-delay: 1.3s;
}

h1 span:nth-child(16) {
  animation-delay: 1.4s;
}

h1 span:nth-child(17) {
  animation-delay: 1.5s;
}
`;
    } else {
        document.getElementById('animation-container').innerHTML = `
@keyframes bounce {
0% {
color: ${color1};
}
70%{
color: ${color2};
}
100% {
color: ${color1};
}
}`;
        document.getElementById('bounce_changer').innerHTML = "Add Bounce";

        document.getElementById('bouncing-letters').innerHTML = `
        .bouncy-letters{
top: 20px;
left: 15%;
position: absolute
}             
h1 span {
position: relative;
top: 20px;
display: inline-block;
animation: bounce 1.5s ease infinite alternate;
color: #fff;
text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
0 8px 0 transparent, 0 9px 0 transparent,
0 10px 10px rgba(0, 0, 0, 0.4);
}
h1 span:nth-child(2) {
  animation-delay: 0.1s;
}

h1 span:nth-child(3) {
  animation-delay: 0.2s;
}

h1 span:nth-child(4) {
  animation-delay: 0.3s;
}

h1 span:nth-child(5) {
  animation-delay: 0.4s;
}

h1 span:nth-child(7) {
  animation-delay: 0.6s;
}

h1 span:nth-child(8) {
  animation-delay: 0.7s;
}

h1 span:nth-child(9) {
  animation-delay: 0.8s;
}

h1 span:nth-child(10) {
  animation-delay: 0.9s;
}

h1 span:nth-child(11) {
  animation-delay: 1s;
}

h1 span:nth-child(12) {
  animation-delay: 1.1s;
}

h1 span:nth-child(13) {
  animation-delay: 1.2s;
}

h1 span:nth-child(14) {
  animation-delay: 1.3s;
}

h1 span:nth-child(16) {
  animation-delay: 1.4s;
}

h1 span:nth-child(17) {
  animation-delay: 1.5s;
}
`;
    }
    if (localStorage.getItem('cake') === "5" && document.getElementById('bounce_changer').innerHTML === "Add Bounce") {
        document.getElementById('animation-container').innerHTML = `
@keyframes bounce {
0% {
color: ${color1};
}
70%{
color: ${color2};
}
100% {
color: ${color1};
}
}`;
        document.getElementById('bounce_changer').innerHTML = "Add Bounce";

        document.getElementById('bouncing-letters').innerHTML = `
      .bouncy-letters{
top: 20px;
left: 15%;
position: absolute
}             

h1 span {
position: relative;
top: 20px;
display: inline-block;
animation: bounce 1.5s ease infinite alternate;
color: #fff;
text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
0 8px 0 transparent, 0 9px 0 transparent,
0 10px 10px rgba(0, 0, 0, 0.4);
}
h1 span:nth-child(2) {
  animation-delay: 0.1s;
}

h1 span:nth-child(3) {
  animation-delay: 0.2s;
}

h1 span:nth-child(4) {
  animation-delay: 0.3s;
}

h1 span:nth-child(5) {
  animation-delay: 0.4s;
}

h1 span:nth-child(7) {
  animation-delay: 0.6s;
}

h1 span:nth-child(8) {
  animation-delay: 0.7s;
}

h1 span:nth-child(9) {
  animation-delay: 0.8s;
}

h1 span:nth-child(10) {
  animation-delay: 0.9s;
}

h1 span:nth-child(11) {
  animation-delay: 1s;
}

h1 span:nth-child(12) {
  animation-delay: 1.1s;
}

h1 span:nth-child(13) {
  animation-delay: 1.2s;
}

h1 span:nth-child(14) {
  animation-delay: 1.3s;
}

h1 span:nth-child(16) {
  animation-delay: 1.4s;
}

h1 span:nth-child(17) {
  animation-delay: 1.5s;
}
`;

    } else if (localStorage.getItem('cake') === "5" && document.getElementById('bounce_changer').innerHTML === "Remove Bounce") {
        document.getElementById('bouncing-letters').innerHTML = `
      .bouncy-letters{
top: 20px;
left: 15%;
position: absolute
}             

h1 span {
position: relative;
top: 20px;
display: inline-block;
animation: bounce 0.3s ease infinite alternate;
color: #fff;
text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
0 8px 0 transparent, 0 9px 0 transparent,
0 10px 10px rgba(0, 0, 0, 0.4);
}
h1 span:nth-child(2) {
  animation-delay: 0.1s;
}

h1 span:nth-child(3) {
  animation-delay: 0.2s;
}

h1 span:nth-child(4) {
  animation-delay: 0.3s;
}

h1 span:nth-child(5) {
  animation-delay: 0.4s;
}

h1 span:nth-child(7) {
  animation-delay: 0.6s;
}

h1 span:nth-child(8) {
  animation-delay: 0.7s;
}

h1 span:nth-child(9) {
  animation-delay: 0.8s;
}

h1 span:nth-child(10) {
  animation-delay: 0.9s;
}

h1 span:nth-child(11) {
  animation-delay: 1s;
}

h1 span:nth-child(12) {
  animation-delay: 1.1s;
}

h1 span:nth-child(13) {
  animation-delay: 1.2s;
}

h1 span:nth-child(14) {
  animation-delay: 1.3s;
}

h1 span:nth-child(16) {
  animation-delay: 1.4s;
}

h1 span:nth-child(17) {
  animation-delay: 1.5s;
}
`;

    } else {
        console.log('Something went wrong with bounce... removeBounce(); Line 1800')
    }
};

function resetName() {
    stop();
    var end = new Audio('media/windowsXPshutdown.mp3');
    end.play();
    setTimeout(function() {
        location.replace('index.html');
    }, 3000);
    localStorage.removeItem('color1');
    localStorage.removeItem('color2');
    localStorage.removeItem('BdayPerson');
    localStorage.removeItem('cake');
    localStorage.removeItem('font');
};

function stop() {
    audio = document.getElementById('bday');
    audio.pause();
};
window.onload = webLoad();