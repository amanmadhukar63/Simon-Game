// Sound Generation
var originalArray = [];
var clickArray = [];
$(".btn").click(function (e) {
    // console.log(e.target);
    $(e.target).addClass("pressed");
    if ($(".btn").hasClass("blue pressed")) {
        let blue = new Audio("sounds/blue.mp3");
        blue.play();
        clickArray.push("1");
    }
    else if ($(".btn").hasClass("green pressed")) {
        let green = new Audio("sounds/green.mp3");
        green.play();
        clickArray.push("2");
    }
    else if ($(".btn").hasClass("red pressed")) {
        let red = new Audio("sounds/red.mp3");
        red.play();
        clickArray.push("3");
    }
    else if ($(".btn").hasClass("yellow pressed")) {
        let yellow = new Audio("sounds/yellow.mp3");
        yellow.play();
        clickArray.push("4");
    }
    setTimeout(function () {
        $(".btn").removeClass("pressed")
    }, 100);
});
// ******************************************
var initial = 0;
$(".start").click(function (e) {
    initial++;
    if (initial == 1) {



        // Game Logic
        var i;
        yeWala();
        function yeWala() {
            clickArray = [];
            i = -1;
            var level = ("Level " + (originalArray.length + 1));
            $("h1").text(level);
            var number = Math.floor(Math.random() * 4 + 1);
            switch (number) {
                case 1:
                    originalArray.push("1");
                    $(".blue").addClass("press");
                    setTimeout(function () {
                        $(".blue").removeClass("press");
                    }, 300);
                    break;
                case 2:
                    originalArray.push("2");
                    $(".green").addClass("press");
                    setTimeout(function () {
                        $(".green").removeClass("press");
                    }, 300);
                    break;
                case 3:
                    originalArray.push("3");
                    $(".red").addClass("press");
                    setTimeout(function () {
                        $(".red").removeClass("press");
                    }, 300);
                    break;
                case 4:
                    originalArray.push("4");
                    $(".yellow").addClass("press");
                    setTimeout(function () {
                        $(".yellow").removeClass("press");
                    }, 300);
                    break;
            }
        }
        $(".btn").click(function () {
            i++;
            // console.log(i);
            if (clickArray[i] == originalArray[i]) {
                if (i + 1 == originalArray.length) {
                    return yeWala();
                }
            }
            else {
                var wrong = new Audio("sounds/wrong.mp3");
                wrong.play();
                $("body").addClass("game-over");
                setTimeout(function () {
                    $("body").removeClass("game-over");
                }, 100);
                $("h1").text("Game Over");
                $(".start").text("Restart");
                $(".start").click(function () {
                    // location.reload();
                    if ($("h1").text() == "Game Over") {
                        originalArray = [];
                        clickArray = [];
                        yeWala();
                    }
                })
            }
        })





    }
})