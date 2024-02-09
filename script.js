function addRow() {
    // Check if the table already has 5 rows
    var table = document.getElementById("infoTable").getElementsByTagName('tbody')[0];
    if (table.rows.length >= 5) {
        alert("Maximum rows reached!");
        return; // Exit the function if maximum rows reached
    }

    var id = document.getElementById("id").value.substring(0, 5);
    var name = document.getElementById("Name").value.substring(0, 5);
    var birthday = document.getElementById("birthday").value.substring(0, 5);
    var location = document.getElementById("Location").value.substring(0, 5);
    var department = document.getElementById("Department").value.substring(0, 5);
    var yearLevel = document.getElementById("YearLevel").value.substring(0, 5);

    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = birthday;
    cell4.innerHTML = location;
    cell5.innerHTML = department;
    cell6.innerHTML = yearLevel;

    // Reset the form after adding the row
    document.getElementById("myForm").reset();
}
