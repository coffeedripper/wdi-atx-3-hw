i = 1;

// START BUTTON

function disable() {
    document.getElementById("start").setAttribute("disabled", "disabled");
}

function enable() {
    document.getElementById("start").removeAttribute("disabled");
}

function clockCount() {
    $("#timer").text("Time Elapsed: " + i);
    console.log(i);
    i++;
    disable(start);
}

$("#start").click(function() {
    time = setInterval(clockCount, 1000);
});

// PAUSE BUTTON

function pause() {
    enable();
    clearInterval(time);
    $("#timer").text("Time Elapsed: " + i);
}

$("#pause").click(function() {
    pause();
});

// RESET BUTTON;

function reset() {
    pause();
    enable();
    i = 0;
    $("#timer").text("Stop Watch");
}

$("#reset").click(function() {
    reset();
});
