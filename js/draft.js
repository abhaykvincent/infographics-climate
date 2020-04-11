$("main, section").hide();
$("#splash").show();

TweenMax.from("#splash", 0.5,{
    delay: 0,
    opacity: 0
});

TweenMax.from("#splash header",0.5,{
    delay: 0.5,
    y: -30,
    ease: Sine.easeOut
});
TweenMax.from("#splash footer",0.5,{
    delay: 0.5,
    y: 30,
    ease: Sine.easeOut
});


TweenMax.from("#splash h1",0.5,{
    delay: 1.5,
    scale:0,
    opacity:0,
    ease:Sine.easeOut
});
TweenMax.from("#splash img",0.5,{
    delay: 1,
    scale:0,
    opacity:0,
    ease:Sine.easeOut
});

// fadeout splash screen
TweenMax.to("#splash",0.5,{
    delay:4,
    opacity:0,
    ease:Sine.easeOut,
    onComplete: loadLanding

});

function loadLanding()
{
    $("main, section").hide().css({opacity:1});
    $("#landing").show();
}


TweenMax.from("#landing",0.5,{
    delay: 4,
    scale:0,
    opacity:0,
    ease:Sine.easeOut
});


TweenMax.from("#logo1",0.5,{
    delay: 4.5,
    opacity:0,
    x: -100,
    ease:Sine.easeOut
});
TweenMax.from("#logo3",0.5,{
    delay: 5.5,
    opacity:0,
    x: -100,
    ease:Sine.easeOut
});
TweenMax.from("#logo2",0.5,{
    delay:5,
    opacity:0,
    x:100,
    ease:Sine.easeOut
});
TweenMax.from(".rest h2",0.5,{
    delay:6,
    opacity:0,
    ease:Sine.easeOut
});
TweenMax.from(".rest footer",0.5,{
    delay:7,
    y:50,
    ease:Sine.easeOut
});

//rest 1 start

$("#rest1logo").click(function(){

    
    TweenMax.to("#landing",0.5,{
        delay: 0.1,
        opacity:0,
        onComplete:loadRest,
        onCompleteParams: ["#rest1","grey"]
    });
});


$("#rest1Menu .special").click(function(){
    TweenMax.to("#rest1 .specials",0.5,{
        delay: 0.1,
        opacity:0,
        onComplete:loadSpecials,
        onCompleteParams: ["#rest1"]
    });


});
$("#rest1Menu .reservation").click(function(){
    TweenMax.to(".reservations",0.5,{
        delay: 0.1,
        opacity:0,
        onComplete:loadReserv,
        onCompleteParams: ["#rest1"]
    });


});
//rest 2 start

$("#rest2logo").click(function(){

    
    TweenMax.to("#landing",0.5,{
        delay: 0.1,
        opacity:0,
        onComplete:loadRest,
        onCompleteParams: ["#rest2","grey"]
    });


});
$("#rest2Menu .special").click(function(){
    TweenMax.to("#rest2 .specials",0.5,{
        delay: 0.1,
        opacity:0,
        onComplete:loadSpecials,
        onCompleteParams: ["#rest2"]
    });


});
$("#rest2Menu .reservation").click(function(){
    TweenMax.to(".reservations",0.5,{
        delay: 0.1,
        opacity:0,
        onComplete:loadReserv,
        onCompleteParams: ["#rest2"]
    });


});
//rest 3 start

$("#rest3logo").click(function(){

    
    TweenMax.to("#landing",0.5,{
        delay: 0.1,
        opacity:0,
        onComplete:loadRest,
        onCompleteParams: ["#rest3","grey"]
    });


});
$("#rest3Menu .special").click(function(){
    TweenMax.to("#rest3 .specials",0.5,{
        delay: 0.1,
        opacity:0,
        onComplete:loadSpecials,
        onCompleteParams: ["#rest3"]
    });


});
$("#rest3Menu .reservation").click(function(){
    TweenMax.to("#reservations",0.5,{
        delay: 0.1,
        opacity:0,
        onComplete:loadReserv,
        onCompleteParams: ["#rest3"]
    });


});

$(".back").click(function(){
    $("#landing").show().css({opacity:1, zIndex:1});
    TweenMax.from('#landing',0.5,{
        opacity:0,
        x:-400
    });
});



function loadRest(restID, highlightColor)
{
    TweenMax.from(restID+" header",0.5,{
        delay: 0.1,
        y:-50
    });
    TweenMax.from(restID+" .back",0.5,{
        delay: 0.5,
        y:-50
    });
    TweenMax.from(".headerMenus",1,{
        delay: 1,
        y:-20,
        opacity: 0
    });
    TweenMax.from(restID+" img",0.5,{
        delay: 0.5,
        y:-300
    });
    TweenMax.from(restID+" .details",0.5,{
        delay: 1,
        y:-450
    });
    
    $("#landing").hide();
    $(restID).show();
    $(restID + " .home").show();

}


function loadSpecials(restID)
{
    
    TweenMax.to(restID + " .home",0.5,{
        delay: 0.1,
        x:-500
    });
    $(restID + " .home").hide();
    $(restID + " .reservations").hide();

    $(restID + " .specials").show().css({opacity:1});

    TweenMax.from(restID + " .specials",0.5,{
        delay: 0.1,
        x:500,
    });
    TweenMax.from(restID + " .specials ul",1,{
        delay: 0.1,
        y:200,
        lineHeight: 50
    });


}function loadReserv(restID)
{
    
    TweenMax.to(restID + " .specials",0.5,{
        delay: 0.1,
        x:-500
    });

    $(restID + " .reservations").show().css({opacity:1});

    TweenMax.from(restID + " .reservations",0.5,{
        delay: 0.1,
        x:500,
    });


}