$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      $('html').css("scrollBehavior", "smooth");
  });

  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  var typed = new Typed(".typing", {
      strings: ["Designer", "Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: [ "Developer","Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          }
      }
  });
});

const source =this.document.getElementById('view').innerHTML
 
const bt1 =this.document.getElementById('send')
 bt1.addEventListener('click', after);

  function after()
 {
    const template = Handlebars.compile(source);
     var v1 =  document.getElementById('name').value;
 
     const replacement = {};
     replacement.Name = v1;
     const compiledHtml = template(replacement);
    const displayGoals = document.getElementById('message');
    displayGoals.innerHTML = compiledHtml;
 }