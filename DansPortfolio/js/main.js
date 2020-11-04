$(document).ready(function () {
    'use strict'
    $('.menu-toggler').on('click', function( ){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open')
    })
    $('.top-nav .nav-link').on('click', function( ){
            $('.menu-toggler').removeClass('open');
            $('.top-nav').removeClass('open')
    })
    $('.gallery-toggler').on('click', function( ){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open')
    })
    
    $('nav a[href*="#"]').on('click', function( ){
         $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top 
         }, 1500)  
    })
    $('.icon-text').on('mouseover', function( ){
        $('.instaLogo').toggleClass('hover');
        $('.instaText').toggleClass('hover')
    })
    $('.icon-text').on('mouseout', function( ){
        $('.instaLogo').removeClass('hover');
        $('.instaText').removeClass('hover')
    })




    $('#up').on('click', function(){
        $('html,body').animate({
            scrollTop:0
        }, 2000)
    })
    AOS.init({
        easing: 'ease-in-out',
        duration:800,
        once: true
    })
    
    
    
    //Header Bubble animation
    function headerBubbles(){
         let bArray = [],
             sArray = [6, 15, 20, 30]; //sizes in px 

        for (let i = 0; i < $('#text-bubbles').width(); i++){
                bArray.push(i);}
            
        function randomValue(arr) {
            return arr[Math.floor(Math.random() * arr.length)];}
        
        setInterval(function(){
            let size = randomValue(sArray);// Get a random size 
            $('#text-bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px;width: ' + size + 'px; height:' + size + 'px;"></div>');
            $('.individual-bubble').animate({
                'bottom': '100%',
                'opacity' : '-=0.8'
            }, 3000, function(){
                $(this).remove() // Callback function used to remove finsihed animations from the page
            });
        }, 350);
    }
    headerBubbles();    
    //Header Bubble animation/End

    //NavLink Animation    
        let animateButton = function(e) {
        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
      };
      let bubblyButtons = document.getElementsByClassName("nav-link");
      for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('mouseover', animateButton, false);
      }
    //NavLink Animation/End
     


})








    