$.ajaxSetup({
  headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

function map_load(){
  var infowindow;
  var map;
  var red_icon =  'http://maps.google.com/mapfiles/ms/icons/red-dot.png' ;
  var purple_icon =  'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';     
  var myOptions = {
      zoom: 12,
      center: new google.maps.LatLng(25.276987,55.296249),
      mapTypeId: 'roadmap'
  };
  map = new google.maps.Map(document.getElementById('map2'), myOptions);

  $.ajax({
    dataType:'json',
    type:'POST',
    url:'GetLocations',
    success:function(locations){
      //return data;
      console.log(locations);
      get_location(locations);
    }
  });

  function get_location(locations){
     
    var i ; var confirmed = 0;
    for (i = 0; i < locations.length; i++) {
      
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
            map: map,
            icon :   locations[i]['location_status'] == '1' ?  red_icon  : purple_icon
        });
        infowindow = new google.maps.InfoWindow({content:locations[i]['description']});
        infowindow.open(map, marker);
    } 
  }
}
$(document).ready(function(){
  map_load();  
});

$(document).on('change','.actions',function(){

  let add_id = $(this).attr('id');
  let action = $(this).val();
  if (action != 'Edit'){
    $.ajax({
      dataType:'json',
      type:'POST',
      url:'UpdateLocations',
      data:{add_id:add_id, action:action},
      success:function(data){
        map_load();
        $("#address_list tbody").html('');
        let table_data;
        for (i = 0; i < data.length; i++) {
          table_data += '<tr><td>'+data[i]['id']+'</td>\n'+
                '<td>'+data[i]['description']+'</td>\n'+
                '<td>';
                    if(data[i]['location_status'] == 1){
                      table_data += '<a href="#" class="label label-success">Active</a>';
                    }
                    
                    if(data[i]['location_status'] == 0){
                      table_data += '<span class="label label-danger">Disabled</span>';
                    }
                    
                table_data += '</td><td>'+
                  '<select class="form-control actions" id="'+data[i]['id']+'" style="width: 100px;">'+
                    '<option selected="" disabled="">Select</option>';
                    if(data[i]['location_status'] == 0){
                      table_data +='<option>Active</option>';
                    }
                    if(data[i]['location_status'] == 1){
                    table_data += '<option>Disabled</option>';
                    }
                    table_data +='<option>Edit</option><option>Delete</option></select></td></tr>';
        
        }
        
        //console.log(table_data);
        $("#address_list tbody").html(table_data);

      }
    });
  }
  else{

    window.location.href = 'https://gmadmin.alot.ae/public/AddressEdit/'+add_id;

  }
});