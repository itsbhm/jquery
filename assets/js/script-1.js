$(document).ready(function () {
    
    // Select by element name
    $('p').hide();

    // Select by ID
    $('#myDiv').addClass('bg-info');

    // Select by class
    $('.btn-primary').click(function () {
        
        // alert("Button Clicked!");

        $('#myDiv').removeClass('bg-info').addClass('bg-warning');
        
        // $('#myDiv').addClass('bg-warning');
    });



    $('#hideContent').click(function () {
        $('p').hide();

    });

    $('#showContent').click(function () {
        $('p').show();

    });


});
