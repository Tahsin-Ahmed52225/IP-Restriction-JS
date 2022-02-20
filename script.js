$(function () {
    $.ajax({
        url: 'https://api.my-ip.io/ip.json',
        method: 'GET'
    })
        .done(function (data) {
            $('#ip').text(data.ip);
            if (data.ip == '203.76.222.138') {
                $('#status').addClass('btn-success');
                $('#status').addClass('btn-primary');
            } else {
                $('#status').addClass('btn-danger');
                $('#status').addClass('btn-primary');
            }

        })
        .fail(function () {
            // Handle failure
        });
});
