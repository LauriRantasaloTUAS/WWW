const wikiKlikkaus = () => {
    document.getElementById("wikiButton").onclick = function () {
        location.href = "index.html";
    };
};
window.addEventListener("load", function() {
  wikiKlikkaus();
});
