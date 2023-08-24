$(document).ready(function () {

    // Parent and children
    $('#myList').parent().css({"color": "red", "border": "2px solid red"});
    $('#myList').children('li').addClass('highlight-x');
  
  // Siblings and filtering

  // Select the element with the class "selected"
  var selectedElement = $('.selected');

  // Add a class to the selected element's siblings
  selectedElement.siblings().addClass('highlighted-x');

  // Filtering
  $("p").filter(".sibling").css("background-color", "brown");
});