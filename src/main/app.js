let selectedStation;

function onSelect(e) {
    selectedStation = e.target.value;
    // window.location.href = "./src/station/" + e.target.value + ".html";
    document.getElementById("stationList").classList.add("hidden");
    document.getElementById("backbtn").classList.remove("hidden");
    document.getElementById(selectedStation).classList.remove("hidden");
    e.target.value = '';
}

function backToHome() {
    // window.location.href = "../../index.html";
    document.getElementById("backbtn").classList.add("hidden");
    document.getElementById(selectedStation).classList.add("hidden");
    document.getElementById("stationList").classList.remove("hidden");

}