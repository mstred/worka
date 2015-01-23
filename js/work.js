var out;

var work = function() {
    for (var i = 0; i < 100; i++) {
        out = Math.pow(out, i);
        console.log(out + " " + i);
        postMessage(out);
    }
};

work();