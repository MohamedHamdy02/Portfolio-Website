
$(document).ready(function () {

    let about = $('#about').offset().top;

    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();

        if (windowScroll > about - 130) {
            $('#nav-bar').css('backgroundColor', 'rgba(0,0,0,0.9)');
            $('#btnUp').fadeIn(500);
        }
        else {
            $('#nav-bar').css('backgroundColor', 'transparent');
            $('#btnUp').fadeOut(500);
        }
    });

    $("a[href^='#']").click(function (e) {
        let linkHref = $(e.target).attr('href');
        let sectionOffset = $(linkHref).offset().top;
        $('html , body').animate({ scrollTop: sectionOffset }, 1000);
    });

    $('#btnUp').click(function () {
        $('html , body').animate({ scrollTop: 0 }, 1000);
    });

    $('#loading .fa-spinner').fadeOut(500, function () {
        $('#loading').fadeOut(500, function () {
            $('loading').remove();
            $('body , html').css('overflow', 'auto');
        })
    })
});

$("#sideBar i").click(function () {
    let boxWidth = $(".box").outerWidth();
    if ($("#sideBar").css('left') === '0px') 
    {
        $("#sideBar").animate({ left: `-${boxWidth}` }, 700)
    }
    else {
        $("#sideBar").animate({ left: `0px` }, 700)
    }
});

let colorSpans = $("#sideBar span");
console.log(colorSpans);
for(let i = 0; i<colorSpans.length; i++) 
{
    let red = Math.round(Math.random() *255);
    let green = Math.round(Math.random() *255);
    let blue = Math.round(Math.random() *255);
    colorSpans.eq(i).css('backgroundColor' , `rgb(${red} , ${green} , ${blue})`)
}

$('#sideBar span').click(function (e) {
    
    let color = $(e.target).css('backgroundColor')
    $('.change').css('color' , color)
})
