var table = document.getElementById('dataTable');
var json = []; // First row needs to be headers 
var headers =[];
for (var i = 0; i < table.rows.length; i++) {
  headers[i] = table.rows.cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}

// Go through cells 
for (var i = 1; i < table.rows.length; i++) {
  var tableRow = table.rows[i];
  var rowData = {};
  for (var j = 0; j < tableRow.cells.length; j++) {
    rowData[headers[j]] = tableRow.cells[j].innerHTML;
  }

  json.push(rowData);
}

console.log(json);