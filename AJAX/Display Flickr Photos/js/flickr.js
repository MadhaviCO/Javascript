  
$('button').click(function(){

  $('button').removeClass('selected');
  $(this).addClass('selected');
  var animalName = $(this).text();
  
  
  var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var flickrOptions = {
    tags: animalName,
    format: "json"
  };
  
  var displayPhotos = function(data){
    var photoHTML = '<ul>';
    
    $.each(data.items, function(i, item){
      var href = item.link;
      var imgsrc = item.media.m
      photoHTML += '<li class="grid-25 tablet-grid-50">';
      photoHTML += '<a href="' + href + '" class="image">';
      photoHTML += '<img src="' + imgsrc + '">';
      photoHTML += '</a>';
      photoHTML += '</li>';    
    });
    
    photoHTML += '</ul>';
    console.log(photoHTML);
    $('#photos').html(photoHTML);
  };
  
  $.getJSON(flickerAPI, flickrOptions, displayPhotos);
});