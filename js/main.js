

// initMap() - функция инициализации карты
function initMap() {
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	var centerLatLng = new google.maps.LatLng(49.987540, 36.232826);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
    zoom: 12  ,             // Зум по умолчанию. Возможные значения от 0 до 21
    scrollwheel: false,
    draggable: false
  };
  
	// Создаем карту внутри элемента #map
  var map = new google.maps.Map(document.getElementById("map__google"), mapOptions);
  var marker = new google.maps.Marker({
    position: {lat: 50.014511, lng: 36.245087},
    map: map,
    title: 'MrBurger',
    icon: {
      url: "icons/map-marker.png",
      scaledSize: new google.maps.Size(64, 64)
    }
  });
  var marker = new google.maps.Marker({
    position: {lat: 49.987976, lng: 36.232677},
    map: map,
    title: 'MrBurger',
    z-index: 999,
    icon: {
      url: 'icons/map-marker.png',
      scaledSize: new google.maps.Size(64, 64)
    }
  });
  var marker = new google.maps.Marker({
    position: {lat: 49.971617, lng: 36.301848},
    map: map,
    title: 'MrBurger',
    icon: {
      url: "icons/map-marker.svg",
      scaledSize: new google.maps.Size(64, 64)
    }
  });
  var marker = new google.maps.Marker({
    position: {lat: 49.981775, lng: 36.180883},
    map: map,
    title: 'MrBurger',
    icon: {
      url: "icons/map-marker.svg",
      scaledSize: new google.maps.Size(64, 64)
    }
  });
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);

//убрать прокрутку
$.fn.showMap = function(options, addr){
  options = $.extend({
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.map__google
  }, options);
  var map = new google.maps.Map(document.getElementById($(this).attr('map__google')), options);

  // Code cut from this example as not relevant
};






$(function(){
    $('.team-acco__item').on('click' ,   e => { 
     
         const $this = $(e.currentTarget);
 
         $this.toggleClass("team-acco__item_active").siblings().removeClass("team-acco__item_active");
   });
   
 });
  
 


 // full page scroll 
 $(document).ready(function() {
	$('.maincontent').fullpage({
        scrollingSpeed: 1300,
        //menu: '#menu',
        //anchors:['hero', 'best', 'burger', 'team', 'burger__menu', 'reviews', 'order', 'map'],
        responsiveHeight: 600,
        navigation: true,
        navigationPosition: 'right',
        

    });
    
});


//burger menu 
$(function(){

  $('.menu-acco__item').on('click'
  ,   e =>{

      const $this = $(e.currentTarget);
      e.preventDefault()

      $this.toggleClass("menu-acco__item-active").siblings().removeClass("menu-acco__item-active");  

  });
});

//one page scroll мой пейдж скролл
/*
const display = $('.maincontent');
const sections = $('.section');

let inScroll = false;

const mobileDetect = new mobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const switchMenuActiveClass = sectionEq => {
   $('.fixed-menu__item').eq(sectionEq).addClass('active')
      .siblings().removeClass('active');
}


const performTransition = sectionEq => {
  if (inScroll) return
  inScroll = true

  const position = (sectionEq * -100) + '%';

  display.css({
    'transform' : 'translate(0, ${position})',
    '-webkit-transform' : 'translate(0, ${position})'
  })

  sections.eq(sectionEq).addClass('active')
    siblings().removeClass('active');

    setTimeout(() => {
      inScroll = false;
      switchMenuActiveClass(sectionEq);
    }, 1300);
}

  const difineSections = sections => {
    const activeSection = sections.filter('.active');
    return {
      activeSection: activeSection,
      nextSection: activeSection.next(),
      prevSection: activeSection.prev()
    }
  }

  const scrollToSection = derection => {
    const section = difineSections(sections)

    if (isScroll) return;

    if (direction === 'up' && section.nextSection.length) {
      performTransition(section.nextSection.index())
    }

    if (direction === 'down' && section.prevSection.length) {
      performTransition(section.prevSection.index())
    }
  }

$('.wrapper').on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    let direction = (deltaY > 0)
      ? 'up'
      : 'down'

    scrollToSection(direction);
  },
  touchmove: e => (e.preventDefault())
});

$(document).on('keydown', e => {
  const section = difineSections(sections);

  if (inScroll) return 

  switch (e.keyCode) {
    case 40: //up
      if (!section.nextSection.length) return;
      performTransition(section.nextSection.index());
      break;

      case 38: //down
      if (!section.prevSection.length) return;
      performTransition(section.prevSection.index());
      break;
  }
});

if (isMobile) {
  $(window).swipe({
    swipe:function (event, direction, distance, duration, fingerCount, fingerData) {
      console.log(direction);
      scrollToSection(direction);
    }
  })
}

$('[data-scroll-to]').on('click touchstart', e => {
  e.preventDefault();
  const $this = $(e.currentTarget);
  const sectionIndex = parseInt($this.attr('data-scroll-to'));

  performTransition(sectionIndex);
});
*/



//slick slider 
$('.sl').slick();




/*
//Finish full page 
document.addEventListener('DOMContentLoaded', (event) => {
  const skrllr = new Skrllr('main', {
    transitionTime: 1100,
    easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
    updateURL: true,
    menu: document.querySelector('.pagination'),
    beforeTransition: (index, nextIndex, next) => before(index, nextIndex, next),
    afterTransition: (index, nextIndex, next) => after(index, nextIndex, next),
  })

  function before (index, nextIndex, next) {
    console.log('Before transition');
    console.log(index);
    console.log(nextIndex);
    console.log(next);
  }

  function after (index, nextIndex, next) {
    console.log('After transition');
    console.log(index);
    console.log(nextIndex);
    console.log(next);
  }
}, false)
    
*/

//humburger__menu
$( document ).ready(function() {

  $( ".cross" ).hide();
  //$( ".nav" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".nav" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".nav" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  });
  });
  
  });


// Modal Window
// modal window section reviews

$(function(){

  let btn = $('.order-link__reviws'),
      modal = $('.modal-window')
      item = $('.modal-windiw__item'),
      close = $('.modal-window__box-closeImg');
   // закрытие по нажатию на крест 
  close.on('click', e =>{
      modal.removeClass('first'),
      modal.removeClass('second'),
      modal.removeClass('third'),
      modal.removeClass('fourth'),
      modal.removeClass('five'),
      modal.removeClass('sixth'),
      modal.removeClass('seventh'),
      modal.removeClass('eighth');
      $.fn.fullpage.setAllowScrolling(true);  // возобновление прокрутки мышью
      $.fn.fullpage.setKeyboardScrolling(true, 'down'); // возобновление скролла клавишей "вниз"
      $.fn.fullpage.setKeyboardScrolling(true, 'up'); // возобновление скролла клавишей "вверх"
  })

  btn.eq(0).on("click", e =>{
      e.preventDefault

      modal.toggleClass("first"),
      $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
      $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
      $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
  })
  btn.eq(1).on("click", e =>{
      e.preventDefault

      modal.toggleClass("second"),
      $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
      $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
      $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
  })
  btn.eq(2).on("click", e =>{
      e.preventDefault

      modal.toggleClass("third"),
      $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
      $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
      $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
  })
  btn.eq(3).on("click", e =>{
      e.preventDefault

      modal.toggleClass("fourth"),
      $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
      $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
      $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
  })
  btn.eq(4).on("click", e =>{
      e.preventDefault

      modal.toggleClass("five"),
      $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
      $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
      $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
  })
  btn.eq(5).on("click", e =>{
      e.preventDefault

      modal.toggleClass("sixth"),
      $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
      $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
      $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
  })
  btn.eq(6).on("click", e =>{
      e.preventDefault

      modal.toggleClass("seventh"),
      $.fn.fullpage.setAllowScrolling(false), // запрет прокрутки мышью
      $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
      $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
  })
  btn.eq(7).on("click", e =>{
      e.preventDefault

      modal.toggleClass("eighth"),
      $.fn.fullpage.setAllowScrolling(false),    // запрет прокрутки мышью
      $.fn.fullpage.setKeyboardScrolling(false, 'down'); // запрет скролла клавишей "вниз"
      $.fn.fullpage.setKeyboardScrolling(false, 'up'); // запрет скролла клавишей "вверх"
  })

})



//PHP Server 
console.log('in main.js'); //проверяет что подключен
console.log($); // что дейквери подключен

//обработка события
var submitForm = function (ev) {
    ev.preventDefault();
    // console.log(ev);

    var form = $(ev.target);
        

    //универсальная функция обработки формы 
    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</div>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
        jQuery('#form__elem')[0].reset();
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#form__elem').on('submit', submitForm); //взял именно эту форму on-это обработчик событий ) именно на submit - вешае обработчик (не .click!!!) мы не кликаем на кнопку а отправляем форму




/*
//мой аккардеон

var acc = document.getElementsByClassName("accordion");

  var i;

  for(i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle(".team-acco__item_active");

      var panel = this.nextElementSibling;

      if(panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }

      else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }
  */

// modal oreder
$(function(){
  let btn = $('.order__inpu'),
      modal = $('.order__modal'),
      close = $('.close__modal--btn');

      btn.eq(0).on('click', e =>{
          e.preventDefault
          modal.addClass('order__modal--active');
          
      })
      close.on('click', e =>{
          e.preventDefault
          modal.removeClass('order__modal--active');
          
      })

})

//modal order sucsses 

$('.form__elem').on('click', function(){
  $('.success').css('display','none');
})
