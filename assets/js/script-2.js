$(document).ready(function() {
    
    // Changing text
    $('#myText').text('New Text');

    // Modifying attributes
    jQuery('img').attr('src', 'https://placehold.co/400x100/EEE/31343C.jpg');
    // $('img').attr('src', 'https://placehold.co/400x100/EEE/31343C.jpg');

    
    // Manipulating CSS
    $('#myDiv').css('color', 'red');

    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('selected');
    });

    
    // Fading and sliding
    // $('#myP').fadeOut();
    // $('#myP').slideUp();

    // Custom animation
    $('#myP').animate({
         opacity: 0.5,
         width: '50%'
        }
        , 1000);

});