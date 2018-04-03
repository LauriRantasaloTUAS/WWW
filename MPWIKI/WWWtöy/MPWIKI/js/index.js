const harleyKlikkaus = () => {
    document.getElementById("harleyButton").onclick = function () {
        location.href = "harley.html";
    };
};

const hondaKlikkaus = () => {
    document.getElementById("hondaButton").onclick = function () {
        location.href = "honda.html";
    };
};

const suzukiKlikkaus = () => {
    document.getElementById("suzukiButton").onclick = function () {
        location.href = "suzuki.html";
    };
};

const triumphKlikkaus = () => {
    document.getElementById("triumphButton").onclick = function () {
        location.href = "triumph.html";
    };
};

window.addEventListener("load", function() {
  harleyKlikkaus();
  hondaKlikkaus();
  suzukiKlikkaus();
  triumphKlikkaus();
});
