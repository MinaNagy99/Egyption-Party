
 let userName = document.getElementById('name')  ;
 let email = document.querySelector('#mail')         ;        
 let textArea = document.querySelector('#textArea');
let btn =document.querySelector('button');
let users = [];

 function getValue() {
    let user = {
        name:userName.value ,
        email : email.value,
        textArea :textArea.value 
       }
       users.push(user)

 }
btn.addEventListener('click' , getValue)


textArea.addEventListener('keyup' , char)
function char() {
    var max = 100;
    $("textarea").keyup(function () {
        var length = $(textArea).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
};

function openNav() {
    let boxWidth = $('#mySidenav').outerWidth()
    if ($('#mySidenav').css ('left') === `-${boxWidth}px`) {
    $('#mySidenav').animate({'left': `0px`} , 100 )
    $('#open').animate ({'left' : '300px'} , 500)
    }
    else{
        $('#mySidenav').animate({'left' : `-${boxWidth}px`} ,100 )
        $('#open').animate ({'left' : '30px'}, 500)
    }
 
}


$('.lineHead1').click(function () {
    $('.c1').slideToggle(500)
    $('.c2').slideUp(500)
    $('.c3').slideUp(500)
    $('.c4').slideUp(500)

    })
$('.lineHead2').click(function () {
    $('.c1').slideUp(500)
    $('.c2').slideToggle(500)
    $('.c3').slideUp(500)
    $('.c4').slideUp(500)        
        })
$('.lineHead3').click(function () {
    $('.c1').slideUp(500)
    $('.c2').slideUp(500)
    $('.c3').slideToggle(500)
    $('.c4').slideUp(500)             
            })
$('.lineHead4').click(function () {
    $('.c1').slideUp(500)
    $('.c2').slideUp(500)
    $('.c3').slideUp(500)
    $('.c4').slideToggle(500)                    
                })    


                function countdown() {
                    var now = new Date();
                    var eventDate = new Date(2022, 12, 28);
                
                    var currentTiime = now.getTime();
                    var eventTime = eventDate.getTime();
                
                    var remTime = eventTime - currentTiime;
                
                    var s = Math.floor(remTime / 1000);
                    var m = Math.floor(s / 60);
                    var h = Math.floor(m / 60);
                    var d = Math.floor(h / 24) - 30;
                
                    h %= 24;
                    m %= 60;
                    s %= 60;
                
                    h = (h < 10) ? "0" + h : h;
                    m = (m < 10) ? "0" + m : m;
                    s = (s < 10) ? "0" + s : s;
                
                    document.getElementById("days").innerHTML = "<p>" + d + " D" + "</p>";
                    document.getElementById("days").innerHTML = "<p>" + d + " D" + "</p>";
                
                    document.getElementById("hours").innerHTML = "<p>" + h + " h" + "</p>";
                    document.getElementById("minutes").innerHTML = "<p>" + m + " m" + "</p>";
                    document.getElementById("seconds").innerHTML = "<p>" + s + " s" + "</p>";
                
                    setTimeout(countdown, 1000);
                }
                
                countdown();
                let homeOffset = $('#home').offset().top;
                let detailsOffset = $('#details').offset().top
                let durationOffset = $('#duration').offset().top
                let contectOffset = $('#hire-me').offset().top

                $('#home1').click(function () {
                    $('html,body').animate({scrollTop:homeOffset} , 1000)
                })
                $('#details1').click(function () {
                    $('html,body').animate({scrollTop:detailsOffset} , 1000)
                })
                $('#duration1').click(function () {
                    $('html,body').animate({scrollTop:durationOffset} , 1000)
                })
                $('#hire-me1').click(function () {
                    $('html,body').animate({scrollTop:contectOffset} , 1000)
                })