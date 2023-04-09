$(document).ready(function () {
    const degree = 6;
    const hr = $(".clock__hour");
    const min = $(".clock__minute");
    const sec = $(".clock__second");

    setInterval(() => {
        const date = new Date();
        const ss = date.getSeconds() * degree + 180;
        const mm = (date.getMinutes() + (1 / 60) * date.getSeconds()) * degree + 180;
        const hh = (date.getHours() + (1 / 60) * date.getMinutes()) * degree * 5 + 180;

        hr.css('transform', `rotateZ(${hh}deg)`);
        min.css('transform', `rotateZ(${mm}deg)`);
        sec.css('transform', `rotateZ(${ss}deg)`);

    });


    function addPixel(color, startPos) {
        $('.backDrop').prepend(
            "<div class='pixel' " +
            "style='background-color: rgba(" +
            color[0] + ", " +
            color[1] + ", " +
            color[2] + ", " +
            "0.65); " +
            "top: " + startPos[1] + "px; " +
            "left: " + startPos[0] + "px;" +
            "box-shadow: 0px 0px 3px 3px rgba(" +
            (color[0] - 5) + ", " +
            (color[1] - 5) + ", " +
            (color[2] - 5) + ", " +
            "0.55); " +
            "'></div>"
        );
    };

    function randNum(min, max) {
        return Math.floor(
            Math.random() * (max - min) + min
        );
    };

    function letFly() {
        setInterval(function () {

            let angle = randNum(0, 361),
                dist = randNum(100, 450),
                wWidth = $(window).width(),
                wHeight = $(window).height(),
                toX = Math.cos(angle * Math.PI / 180) * dist,
                toY = Math.sin(angle * Math.PI / 180) * (dist / 1.5),
                color = [
                    randNum(0, 255),
                    randNum(0, 240),
                    randNum(0, 255)
                ],

                startPos = [
                    randNum(0, wWidth),
                    randNum(0, wHeight)
                ];

            addPixel(color, startPos);

            $('.pixel:first').show(750).velocity({
                'left': '+=' + toX + 'px',
                'top': '+=' + toY + 'px'
            }, 6000, function () {
                $(this).hide(1000, function () {
                    $(this).remove();
                });
            })
        }, 400);
    };



    letFly();


})

