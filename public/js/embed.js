$(function initializeOptions(){
  $.each(hotels, function(key,value){
      var option = $('<option />').text(value.id).text(value.name);
      $("#hotel-choices").append(option);
  });

  $.each(restaurants, function(key,value){
      var option = $('<option />').text(value.id).text(value.name);
      $("#restaurant-choices").append(option);
  });

  $.each(activities, function(key,value){
      var option = $('<option />').text(value.id).text(value.name);
      $("#activity-choices").append(option);
  });

  var markers = [];

  $(".plus-hotel").on('click', function() {
    var currHotelChoice = $("#hotel-choices option:selected").text()
    $("#currHotel").text(currHotelChoice);

    for(let i = 0; i < hotels.length; i++) {
      if (currHotelChoice === hotels[i].name) {

        var marker = drawMarker('hotel', hotels[i].place.location);
        markers.push(marker);
        setAllMap(map);
      }
    }
    // drawMarker('hotel', [40.75, -74.017624]);
  });

  $(".plus-restaurant").on('click', function() {

    var xButton = '<button class="btn btn-xs btn-danger remove btn-circle">x</button>';
    var restChoice = $("#restaurant-choices option:selected").text()

    $("#currRestaurant").append("<br>"+restChoice).append(xButton);
  });

  $(".plus-activity").on('click', function() {

    var xButton = '<button class="btn btn-xs btn-danger remove btn-circle">x</button>';
    var activityChoice = $("#activity-choices option:selected").text()
    $("#currActivity").append("<br>"+activityChoice).append(xButton);
  });
});

//GOOGLE MAP API KEY: AIzaSyD6dqm9EmaazEB3d_zwGoVRm1GDzX1iSyM
