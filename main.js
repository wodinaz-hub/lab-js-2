function openTab(tabId, buttonId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = "none";
    });
    document.querySelectorAll('.tabs button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabId).style.display = "block";
    document.getElementById(buttonId).classList.add("active");
}

function addRow(rowId){
    const inputRow = document.getElementById(rowId);
    const inputs = inputRow.querySelectorAll("input");

    let cells = "";

    inputs.forEach(input => {
        cells += `<td>${input.value}</td>`;
        input.value = "";
    });

    cells += "<td></td>"

    const newRow = document.createElement("tr");
    newRow.innerHTML = cells;

    inputRow.before(newRow);
}

openTab("teachers", "st");