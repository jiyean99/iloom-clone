//서브메뉴 등장 관련 jquery

// $(function(){
//     $(".main-menu > li").on({
//         "mouseover keyup":function(){
//             $(this).find(".sub-menu").stop().fadeIn(300)
//         },
//         "mouseout keydown":function(){
//             $(this).find(".sub-menu").stop().fadeOut(300)
//         }
//     });
// });

$(function(){
    $(".main-menu > li").hover(function(){
        $(this).find(".sub-menu").stop().fadeToggle(300)
    })
})

//팝업관련 jquery

$(function(){
    $(".popup-icon").click(function(){
        $(".popup-bg").show();

    });
    $(".popup-close").click(function(){
        $(".popup-bg").hide();
    });
})

//메인 슬라이드

$(function(){

    $(".main-slide:gt(0)").hide();

    var num = 0;
    var next = (num+1) % 6;
    var prev = (num-1) % 6;
    
    function nextSlide(){
        $(".main-slide").eq(num).fadeOut(800);
        $(".main-slide").eq(next).fadeIn(800).appendTo('.main-slide-wrap');
        num = next;
    }

    function prevSlide(){
        $(".main-slide").eq(num).fadeOut(800);
        $(".main-slide").eq(next).fadeIn(800).appendTo('.main-slide-wrap');
        num = prev;
    }

    function autoPlay(){
        setInterval(function(){
            nextSlide()
        },4000)
    }

    // setInterval(nextSlide, 4000);
    autoPlay();

    $(".next-btn").stop().click(nextSlide);
    $(".prev-btn").stop().click(prevSlide);
    
})

