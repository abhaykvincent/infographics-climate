$("section:gt(0)").hide();
        
// set initial screen number
var screenNum = 1;
// transition duration
var duration = 1;
// delay for starting screen animations
// initially set to 3s to allow the preloader to show and then updated in loadScreen1
var delay = 3;

// hide/show navigation functions
function hideNav() {
    TweenMax.to(".next", 0.25, {
        right: -100,
        ease: Power2.easeOut
    });
    
    TweenMax.to(".prev", 0.25, {
        left: -100,
        ease: Power2.easeOut
    });
}

function showNav() {
    TweenMax.to(".next", 0.25, {
        right: 20,
        ease: Power2.easeOut
    });
    
    TweenMax.to(".prev", 0.25, {
        left: 20,
        ease: Power2.easeOut
    });
}

// next and previous navigation functions
function showNextScreen()
{
    // targets the current screen
    var currentScreen = "#screen" + screenNum;
    // sets next screen number
    screenNum++;
    // targets the next screen
    var nextScreen = "#screen" + screenNum;
    // transition out navigation
    hideNav();
    // transitions current screen out
    TweenMax.fromTo(currentScreen, duration, {
        x: 0
    }, {
        delay: 0.5,
        x: -960,
        ease: Power2.easeInOut
    });
    // shows next screen
    $(nextScreen).show();
    // transitions next screen in
    TweenMax.fromTo(nextScreen, duration, {
        x: 960
    }, {
        delay: 0.5,
        x: 0,
        ease: Power2.easeInOut,
        onComplete: function() {
            // hide current screen
            $(currentScreen).hide();
            // transition on navigation
            showNav();
        }
    });
    
    // load function to animate on contents of screen
    window["loadScreen" + screenNum]();
}

function showPrevScreen()
{
    // targets the current screen
    var currentScreen = "#screen" + screenNum;
    // sets next screen number
    screenNum--;
    // targets the next screen
    var prevScreen = "#screen" + screenNum;
    // transition out navigation
    hideNav();
    // transitions current screen out
    TweenMax.fromTo(currentScreen, duration, {
        x: 0
    }, {
        delay: 0.5,
        x: 960,
        ease: Power2.easeInOut
    });
    // shows previous screen
    $(prevScreen).show();
    // transitions next screen in
    TweenMax.fromTo(prevScreen, duration, {
        x: -960
    }, {
        delay: 0.5,
        x: 0,
        ease: Power2.easeInOut,
        onComplete: function() {
            // hide current screen
            $(currentScreen).hide();
            // transition on navigation
            showNav();
        }
    });
    
    // load function to animate on contents of screen
    window["loadScreen" + screenNum]();
}

// next and previous button clicks
$(".next").click(showNextScreen);
$(".prev").click(showPrevScreen);

// SET UP MAIN INTERFACE ///////////////////////////////////////
// fade on main div on page load and hide loading gif
TweenMax.from("main", duration, {
    delay: delay - 2,
    y: $(window).height(),
    ease: Back.easeOut,
    onComplete: function() {
        $("#loading").hide();
    }
});
document.getElementById("bg_audio").loop = false;
// functions for loading on content of each screen
// LOAD SCREEN 1 ///////////////////////////////////////////////
function loadScreen1()
{
    TweenMax.from("#screen1 h1", duration, {
        delay: delay-1,
        opacity: 0
    });
    TweenMax.from("#globe1", duration-0.5, {
        delay: delay-1,
        scale:0,
        opacity: 0
    });
    TweenMax.from("#globe2", duration-0.5, {
        delay: delay-0.5,
        scale:0,
        opacity: 0
    });
    TweenMax.from("#globe3", duration-0.5, {
        delay: delay,
        scale:0,
        opacity: 0
    });
    
    // update delay to wait for screen transition
    delay = duration + 0.5;
}

// animate on content of screen 1 on page load
loadScreen1();

// LOAD SCREEN 2 ///////////////////////////////////////////////
function loadScreen2()
{
    document.getElementById('bg_audio').src="audio/audio01.mp3";
    document.getElementById('bg_audio').play();
    // animate content on with delays
    TweenMax.from("#screen2 h1", duration, {
        delay: delay,
        opacity: 0
    });
    TweenMax.from("#intro", duration, {
        delay: delay+1,
        opacity: 0
    });
    TweenMax.from("#screen2Globe", duration, {
        delay: delay+1.5,
        rotation: 360,
        scale: 0,
        opacity: 0
    });
    TweenMax.from(".screen2Buttons", duration, {
        delay: delay+2.5,
        X: 200,
        opacity: 0,
        
    });
    
}

// LOAD SCREEN 3 ///////////////////////////////////////////////
function loadScreen3()
{
    document.getElementById('bg_audio').src="audio/audio02.mp3";
    document.getElementById('bg_audio').play();
    // animate content on with delays
    TweenMax.from("#screen3 h1", duration, {
        delay: delay,
        opacity: 0,
    });
    TweenMax.from("#screen3Left", duration, {
        delay: delay,
        scale:0,
        rotation: 360,
        opacity: 0,
    });
    TweenMax.from(".screen3Desc", duration, {
        delay: delay+0.5,
        x:200,
        opacity: 0,
    });
    
}

// LOAD SCREEN 4 ///////////////////////////////////////////////
function loadScreen4()
{
    document.getElementById('bg_audio').src="audio/audio03.mp3";
    document.getElementById('bg_audio').play();
    // animate content on with delays
    TweenMax.from("#screen4 h1", duration, {
        delay: delay,
        opacity: 0
    });
    TweenMax.from("#screen4Desc", duration, {
        delay: delay+0.5,
        x: 300,
        opacity: 0
    });
    TweenMax.from("#screen4Globe", duration, {
        delay: delay+1,
        x: 300,
        rotation: 360,
        opacity: 0
    });
    TweenMax.from("#screen4Right", duration, {
        delay: delay+1,
        x: 300,
        opacity: 0
    });
    
}

// LOAD SCREEN 5 ///////////////////////////////////////////////
function loadScreen5()
{
    document.getElementById('bg_audio').src="audio/audio04.mp3";
    document.getElementById('bg_audio').play();
    // animate content on with delays
    TweenMax.from("#screen5 h1", duration, {
        delay: delay,
        opacity: 0
    });
    TweenMax.from("#screen5Globe img", duration, {
        delay: delay,
        scale: 0,
        rotation: -360,
        opacity: 0
    });
    TweenMax.from("#screen5desc", duration, {
        delay: delay+0.4,
        x: 300,
        opacity: 0
    });
    TweenMax.from("#s5DescLeft", duration, {
        delay: delay+0.5,
        x: 300,
        opacity: 0
    });
    TweenMax.from("#s5DescRight", duration, {
        delay: delay+1,
        x:300,
        opacity: 0
    });
    
}

// LOAD SCREEN 6 ///////////////////////////////////////////////
function loadScreen6()
{
    document.getElementById('bg_audio').src="audio/audio05.mp3";
    document.getElementById('bg_audio').play();
    // animate content on with delays
    TweenMax.from("#screen6 h1", duration, {
        delay: delay,
        opacity: 0
    });
    TweenMax.from("#screen6topLeft", duration, {
        delay: delay+0.5,
        x:300,
        opacity: 0
    });
    TweenMax.from("#screen6topRight", duration, {
        delay: delay+1,
        x:300,
        opacity: 0
    });
    TweenMax.from("#screen6bottom", duration, {
        delay: delay+2,
        opacity: 0
    });
    
}

// LOAD SCREEN 7 ///////////////////////////////////////////////
function loadScreen7()
{
    // animate content on with delays
    TweenMax.from("#screen6 h1", duration, {
        delay: delay,
        opacity: 0
    });
    TweenMax.from("#screen7list", duration, {
        delay: delay+0.5,
        x:300,
        opacity: 0
    });
    
}

