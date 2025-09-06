function onSelect(e) {
    console.log("ON select called: " + e.target.value);
    window.location.href = "../station/" + e.target.value + ".html";
}

function backToHome() {
    window.location.href = "./index.html";
}