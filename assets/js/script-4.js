
// Date Picker Using jQuery UI
$(function () {
    $("#datepicker").datepicker();
});

// Simple Dialog using jQuery UI
$(document).ready(function() {
    // Initialize the dialog
    $("#dialog").dialog({
        autoOpen: false, // Dialog won't open automatically
        modal: true,    // Make the dialog modal
        buttons: {
            "Close": function() {
                $(this).dialog("close"); // Close the dialog when the "Close" button is clicked
            }
        }
    });

    // Open the dialog when the button is clicked
    $("#open-dialog").click(function() {
        $("#dialog").dialog("open");
    });
});