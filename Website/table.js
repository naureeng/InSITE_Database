// Javascript for Child Row in table

$(document).ready(function () {
    var table = $('#example').DataTable({});

    // Add event listener for opening and closing details
    $('#example').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
             format(row.child);
            tr.addClass('shown');
        }
    });

    function format(callback) {
        $.ajax({
        url:'/echo/js/?js=[{ \"name\": \"test1\", \"value\": \"val1\" }, {\"name\": \"test2\", \"value\": \"val2\"}]',
        dataType: "json",
        complete: function (response) {
            var data = JSON.parse(response.responseText);
            console.log(data);
                var thead = '',  tbody = '';
                for (var key in data[0]) {
                    thead += '<th>' + key + '</th>';
                }
                $.each(data, function (i, d) {
                    tbody += '<tr><td>' + d.name + '</td><td>' + d.value + '</td></tr>';
                });
            console.log('<table>' + thead + tbody + '</table>');
            callback($('<table>' + thead + tbody + '</table>')).show();
        },
        error: function () {
            $('#output').html('Bummer: there was an error!');
        }
    });
    }
});
