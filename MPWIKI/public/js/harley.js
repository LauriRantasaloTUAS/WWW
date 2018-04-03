const wikiKlikkaus = () => {
    document.getElementById("wikiButton").onclick = function () {
        location.href = "/";

    };
};

// const middleWikiKlikkaus = () => {
//   document.body.onclick = function (e) {
// if (e && (e.which == 1 || e.button == 1 )) {
//   window.open("/")
// }
// }
//   };

window.addEventListener("load", function() {
  wikiKlikkaus();
  // middleWikiKlikkaus();
});
