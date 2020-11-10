// Problem: No user interaction causes no change to application
// Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;
var mouseDown = false;

// On mouse events on the canvas 
  // Draw lines

// When New Color button is pressed, display color selector

$(".controls").on("click", "li", function(){
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    color = $(this).css("background-color");
});

// When a color is selected, change the border color to white and unselect previous color.
// when the color is selected, change the color of the box.

$("#revealColorSelect").click(function(){
  //Show color selector or hide it  
  changeColor();
  $("#colorSelect").toggle();
});

function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color","rgb("+ r +", " + g + ", " + b + ")" );
}

// When slider changes 

$("input[type=range]").change(changeColor);                   


// When add color is pressed 

$("#addNewColor").click(function(){
  var $newColor = $('<li></li>');
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click();
});


// On Mouse events on the canvas
  // Draw lines

$canvas.mousedown(function (e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if (mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
    mouseDown = false;
}).mouseleave(function(){
    $canvas.mouseup();
});










