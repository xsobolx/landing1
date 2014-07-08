
var landingMap;

function init () {
    var myGeocode = document.getElementById("geocode").innerHTML;
    ymaps.geocode(myGeocode, {results:1}).then(function(res)
    {
        var firstGeoObject = res.geoObjects.get(0),
        landingMap = new ymaps.Map("map",
            {
                center: firstGeoObject.geometry.getCoordinates(),
                zoom: 15
            });
        var balloonBody = document.getElementById("address").innerHTML;
        landingMap.balloon.open(firstGeoObject.geometry.getCoordinates(),
            {
                contentHeader: 'Контакты',
                contentBody: balloonBody
            });

    });



}

// Дождёмся загрузки API и готовности DOM.

ymaps.ready(init);
$(document).ready(function(){
  $('li > a').click(function(){
    this.parent.addClass('active');
  })
});