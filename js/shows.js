function arrayToTable(tableData) {
    var table = $('<table></table>');
    $(tableData).each(function (i, rowData) {
        var row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            row.append($('<td>' + cellData + '</td>'));
        });
        table.append(row);
    });
    return table;
}

$.ajax({
    type: "GET",
    url: "archive.csv",
    success: function (data) {
        $('#shows-past').append(arrayToTable(Papa.parse(data).data));
        // console.log(JSON.parse(arrayToTable(Papa.parse(data).data)));
    }
});

$.ajax({
    type: "GET",
    url: "upcoming.csv",
    success: function (data) {
        $('#shows-upcoming').append(arrayToTable(Papa.parse(data).data));
        // console.log(JSON.parse(arrayToTable(Papa.parse(data).data)));
    }
});