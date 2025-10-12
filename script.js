function changeLanguage(lang) {
    window.location.href = `./index_${lang}.html`;
}

function thanks() {
    window.alert("Thank you very much!")
}

function toggleColorTheme() {
    var elem = document.body;
    elem.classList.toggle("darkmode");
}

function show(id) {
    var elem = document.getElementById(id);
    var target = elem.getElementsByClassName("step-detail")[0];
    target.classList.toggle("show-detail");
}