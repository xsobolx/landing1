var LandingMap;

function init () {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  LandingMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [55.50576, 36.027698], // Москва
    zoom: 16,
    controls: ['fullscreenControl', 'zoomControl']
  });
var balloonBody = document.getElementById("address").innerHTML;
    LandingMap.balloon.open(LandingMap.getCenter(),
        {
            contentHeader: 'Контакты',
            contentBody: balloonBody
        });

}


// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

$(document).ready(function(){
  $('li > a').click(function(){
    this.parent.addClass('active');
  })
});