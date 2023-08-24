$(document).ready(function () {
    $('#loadButton').click(function () {

        $.ajax({
            url: './assets/data.json',
            dataType: 'json',
            
            success: function (data) {

                var html = '<ul>';

                $.each(data, function (index, item) {
                    html += '<li>' + item.name + '</li>';
                });

                html += '</ul>';

                $('#result').html(html);
            }


        });

    });
});