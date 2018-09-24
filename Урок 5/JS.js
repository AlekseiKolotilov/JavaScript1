//УРОК 5
//задание №1
var line = ['', '1', '2', '3', '4', '5', '6', '7', '8'];
var column = ['','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var table = document.createElement("table");

for (var i = 1; i <= 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j <= 9; j++) {
        var td = document.createElement('td');
        if (i == 1){
            td.className = "line";
            td.innerHTML = line[length++];
        }
        else if (j == 1){
            td.className = "column";
            td.innerHTML = column[i-1];
        }
        else if (i%2 == j%2 &&  i!=1) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
};
document.body.appendChild(table);


