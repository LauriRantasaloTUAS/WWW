const harleyKlikkaus = (req, res) => {
    document.getElementById("harleyButton").onclick = function () {
        location.href = "harley";
    };
};

const hondaKlikkaus = () => {
    document.getElementById("hondaButton").onclick = function () {
        location.href = "honda";
    };
};

const suzukiKlikkaus = () => {
    document.getElementById("suzukiButton").onclick = function () {
        location.href = "suzuki";
    };
};

const triumphKlikkaus = () => {
    document.getElementById("triumphButton").onclick = function () {
        location.href = "triumph";
    };
};

window.addEventListener("load", function() {
  harleyKlikkaus();
  hondaKlikkaus();
  suzukiKlikkaus();
  triumphKlikkaus();
});
