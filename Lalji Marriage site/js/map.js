$.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&region=in&key=AIzaSyAWQG4Hz2GnvMEs3WKAETWIGXp4urcsUNo&async=2&callback=MapApiLoaded", function () {});
function MapApiLoaded() {
//$(document).ready(function() {
    /** Google Map **/
    function init_map() {
        var locations = [
			//<p>Near Shivnagar Gate</p> <p>Sudama Chowk</p> Krishna Park, Mota Varachha, Surat, Gujarat 395006
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">To. Doliya </p><p>Ta. Rajula, Dist. Amreli</p><p>Gujarat 365555</p>  </div>  </div>', 20.960631, 70.925523, 1],
            ['<div class="scrollFix"><div class="col-md-12"><h4 class="title">To. Doliya </p><p>Ta. Rajula, Dist. Amreli</p><p>Gujarat 365555</p>  </div>  </div>', 20.960631, 70.925523, 1]
        ];
        var myOptions = {
            scrollwheel: false,
            zoom: 18,
            center: new google.maps.LatLng(21.700258, 71.482349),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                icon: 'img/map_pin.png'
            });

        }
        infowindow = new google.maps.InfoWindow({
            content: ''
        });

    }
    google.maps.event.addDomListener(window, 'load', init_map);
//});
}
21.700258, 71.482349