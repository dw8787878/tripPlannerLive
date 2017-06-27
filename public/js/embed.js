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



  $(".plus-hotel").on('click', function() {
    var currHotelChoice = $("#hotel-choices option:selected").text()
    $("#currHotel").text(currHotelChoice);
  });

  $(".plus-restaurant").on('click', function() {
    var restChoice = $("#restaurant-choices option:selected").text()
    $("#currRestaurant").text(restChoice);
  });

  $(".plus-activity").on('click', function() {
    alert('it works activity');
  });
});
