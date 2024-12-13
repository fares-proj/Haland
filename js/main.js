

var xValues = ["الحمايه", "البائعين", "الربح", "الخساره", "النصابين"];
var yValues = [55, 49, 55, 20, 15];
var barColors = ["blue", "orange","green","red","red"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "نسب مهمه في السيرفر"
    }
  }
});






$('nav .left .fa-bars').click(function(){
  $(this).toggleClass('active')
  $('.right').slideToggle()
  
})



$('nav .left .fa-sun').click(function(){
  $('nav .left .fa-sun').css({display : 'none'})
  $('nav .left .fa-moon').css({display : 'block'})
  $('body').addClass('dark')

})


$('nav .left .fa-moon').click(function(){
  $('nav .left .fa-moon').css({display : 'none'})
  $('nav .left .fa-sun').css({display : 'block'})
  $('body').removeClass('dark')
})


$(window).scroll(function(){
  if(scrollY > 100){
    $('.fa-circle-up').css({display : 'block'})
  }else{
    $('.fa-circle-up').css({display : 'none'})
  }
  
})

const up = document.querySelector('.fa-circle-up')



up.addEventListener('click' , function(){
  window.scrollTo({
    top : 0
  })
} )



$('.t').click(function(){
  $('.alert').slideDown()
  setTimeout(function(){
$('.alert').slideUp()
  }, 1000)
})


