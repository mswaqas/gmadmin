
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
})

var infowindow;
var map;
var red_icon =  'http://maps.google.com/mapfiles/ms/icons/red-dot.png' ;
var purple_icon =  'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';     
var myOptions = {
    zoom: 13,
    center: new google.maps.LatLng(25.276987,55.296249),
    mapTypeId: 'roadmap'
};
map = new google.maps.Map(document.getElementById('map'), myOptions);

/**
 * Global marker object that holds all markers.
 * @type {Object.<string, google.maps.LatLng>}
 */
var markers = {};

/**
 * Concatenates given lat and lng with an underscore and returns it.
 * This id will be used as a key of marker to cache the marker in markers object.
 * @param {!number} lat Latitude.
 * @param {!number} lng Longitude.
 * @return {string} Concatenated marker id.
 */
var getMarkerUniqueId= function(lat, lng) {
    return lat + '_' + lng;
};

/**
 * Creates an instance of google.maps.LatLng by given lat and lng values and returns it.
 * This function can be useful for getting new coordinates quickly.
 * @param {!number} lat Latitude.
 * @param {!number} lng Longitude.
 * @return {google.maps.LatLng} An instance of google.maps.LatLng object
 */
var getLatLng = function(lat, lng) {
    return new google.maps.LatLng(lat, lng);
};

/**
 * Binds click event to given map and invokes a callback that appends a new marker to clicked location.
 */
var addMarker = google.maps.event.addListener(map, 'click', function(e) {
    var lat = e.latLng.lat(); // lat of clicked point
    var lng = e.latLng.lng(); // lng of clicked point
    var markerId = getMarkerUniqueId(lat, lng); // an that will be used to cache this marker in markers object.
    var marker = new google.maps.Marker({
        position: getLatLng(lat, lng),
        map: map,
        animation: google.maps.Animation.DROP,
        id: 'marker_' + markerId,
        html: "    <div id='info_"+markerId+"'>\n" +
        "        <table class=\"map1\">\n" +
        "            <tr>\n" +
        "                <td><input type='text' class='form-control' id='manual_description' placeholder='Description' />\n" +
        "            <button type='submit' onclick='saveData("+lat+","+lng+")' style='font-size: 12px;margin-top: 10px;' class='btn btn-primary'>Submit</button></td></tr>\n" +
        "        </table>\n" +
        "    </div>"
    });
    markers[markerId] = marker; // cache marker in markers object
    bindMarkerEvents(marker); // bind right click event to marker
    bindMarkerinfo(marker); // bind infowindow with click event to marker
});


 //* Binds  click event to given marker and invokes a callback function that will remove the marker from map.
 
var bindMarkerinfo = function(marker) {
    google.maps.event.addListener(marker, "click", function (point) {
        var markerId = getMarkerUniqueId(point.latLng.lat(), point.latLng.lng()); // get marker id by using clicked point's coordinate
        var marker = markers[markerId]; // find marker
        infowindow = new google.maps.InfoWindow();
        infowindow.setContent(marker.html);
        infowindow.open(map, marker);
        // removeMarker(marker, markerId); // remove it
    });
};


// * Binds right click event to given marker and invokes a callback function that will remove the marker from map.

var bindMarkerEvents = function(marker) {
    google.maps.event.addListener(marker, "rightclick", function (point) {
        var markerId = getMarkerUniqueId(point.latLng.lat(), point.latLng.lng()); // get marker id by using clicked point's coordinate
        var marker = markers[markerId]; // find marker
        removeMarker(marker, markerId); // remove it
    });
};


 //* Removes given marker from map.

var removeMarker = function(marker, markerId) {
    marker.setMap(null); // set markers setMap to null to remove it from map
    delete markers[markerId]; // delete marker instance from markers object
};

toastr.options.showMethod = 'slideDown';
toastr.options.hideMethod = 'slideUp';
toastr.options.closeMethod = 'slideUp';
toastr.options.closeButton = true;

/////// save Address
function saveData(lat,lng) {
    var description = document.getElementById('manual_description').value;
    if (description != null || description !='') {
        $.ajax({
            type:'POST',
            url:'AddLocation',
            data:{lat:lat, lng:lng, description:description},
            success:function(locations){
                //return data;
                toastr.success('Location Create Successfully !!', 'Success', {timeOut: 3000});
                infowindow.close();
                setTimeout(function(){ window.location.reload(); }, 4000);
               
            }
        });
    }
}

$(document).ready(function(){
    
    $.ajax({
        type:'POST',
        url:'CheckUser',
        success:function(res){
            if (res == 0)
            {
                $('.modal').modal('show');
            }
        }
    });
});

$(document).on('click','#got_it',function(){
    $.ajax({
        type:'POST',
        url:'UpdateUser',
        success:function(res){
            $('.modal').modal("hide");
        }
    });
});