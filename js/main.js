$('.burger').click(function(event){
    $('.burger,.info_block').toggleClass('active');
});

$(document).ready(function() {
    $('.icon_back_block').click(function(event) {
        $('.burger, .info_block').removeClass('active');
        $('icon_back_block').removeClass('active')
    });
});


// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 55.74303813644981, lng: 37.58454627585226 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }