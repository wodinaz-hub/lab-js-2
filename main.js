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

openTab("teachers", "st");