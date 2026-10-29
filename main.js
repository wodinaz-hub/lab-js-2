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
    
}

function addTeacher() {
    const id = document.getElementById("teacher-id").value;
    const name = document.getElementById("teacher-name").value;
    const subject = document.getElementById("teacher-subject").value;
    const room = document.getElementById("teacher-room").value;
    const experience = document.getElementById("teacher-experience").value;

    const newRow = document.createElement("tr");

    newRow.innerHTML = `<td>${id}</td><td>${name}</td><td>${subject}</td><td>${room}</td><td>${experience}</td><td></td>`;

    const inputRow = document.getElementById("teacher-inputs");
    inputRow.before(newRow);

    document.getElementById("teacher-id").value = "";
    document.getElementById("teacher-name").value = "";
    document.getElementById("teacher-subject").value = "";
    document.getElementById("teacher-room").value = "";
    document.getElementById("teacher-experience").value = "";
}

openTab("teachers", "st");