$(document).ready(function () {
    // Data attributes
    
    // $('#myElement').data('key', 'value');
    // var value = $('#myElement').data('key');

    // Select the element with the ID "myElement"
    var $element = $('#myElement');

    // Access the data attributes using the .data() method
    var userId = $element.data('user-id');
    var username = $element.data('username');
    var age = $element.data('age');

    // Display the data in an alert
    $element.click(function () {
        alert("User ID: " + userId + "\nUsername: " + username + "\nAge: " + age);
    });


    // Getting and setting attributes
    var href = $('a').attr('href');

    $('img').attr('alt', 'New Alt Text');
});