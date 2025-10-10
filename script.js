function changeLanguage(lang) {
    window.location.href = `./index_${lang}.html`;
}

function thanks() {
    window.alert("Thank you very much!")
}

function toggleColorTheme() {
    var ele = document.body;
    ele.classList.toggle("darkmode");
}