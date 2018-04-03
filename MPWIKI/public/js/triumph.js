const wikiKlikkaus = () => {
    document.getElementById("wikiButton").onclick = function () {
        location.href = "/";
    };
};
window.addEventListener("load", function() {
  wikiKlikkaus();
});
