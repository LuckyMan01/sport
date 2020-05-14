$(function(){
   
  $('.characteristics__slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.icon-chevron-left'),
    nextArrow: $('.icon-chevron-right'),
    fade: true,
    asNavFor: '.characteristics__slider-doun'
  });
  $('.characteristics__slider-doun').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.characteristics__slider-top',
    dots: false,
    arrows:false,
    centerMode: true,
    focusOnSelect: true
  });



  $(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      $('html, body').animate({scrollTop: dn}, 1000);
    });
  });


    var timer;
    var compareDate = new Date();
      compareDate.setDate(compareDate.getDate() + 99);

      timer = setInterval(function() {
    timeBetweenDates(compareDate);
  }, 1000);

  function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

      clearInterval(timer);
    
    } else {
      
      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  }

});