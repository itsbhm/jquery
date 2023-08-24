$(document).ready(function () {
    $('#myForm').submit(function(event) {
        event.preventDefault();
        
        // Form validation and submission logic
        var formData = $(this).serialize(); // Serialize form data
        
        // For this example, let's just log the serialized data
        console.log("Form data:", formData);
        
        // You can also use $.ajax() or $.post() to send the data to the server
        
    });
});
