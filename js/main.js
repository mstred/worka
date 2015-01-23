var w;
var txt;

$("#start").click(function() {

    w = (typeof(w) == "undefined") ? new Worker("js/work.js") : w;

    txt = $("#hello-text").text();

    w.onmessage = function(evt) {
        $("#hello-text").text(txt + ", part " + evt.data);
    };

    w.onerror = function(err) {
        console.log(err);
    };

    w.postMessage({msg: "hello"});
});

$("#stop").click(function() {
    w.terminate();
    w = undefined;
});