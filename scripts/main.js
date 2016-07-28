$(document).ready(function () {

    CountDownTimer('07/30/2016 8:24 PM', 'countdown');

    function CountDownTimer(dt, id) {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            /*            if (distance < 0) {

                            clearInterval(timer);
                            document.getElementById(id).innerHTML = 'EXPIRED!';

                            return;
                        }*/
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            $('#days p').text((days).pad());
            $('#hours > p').text((hours).pad());
            $('#minutes > p').text((minutes).pad());
            $('#seconds > p').text((seconds).pad());

            if (days === 0 && hours === 0 && minutes === 0) {
                if (seconds <= 50) {
                    document.getElementById("hello").innerHTML = "displaying new thing 1";
                }

                if (seconds <= 45) {
                    document.getElementById("hello2").innerHTML = "displaying new thing 22"
                }
            }
        }

        /* Adds a leading 0 to number */
        Number.prototype.pad = function (size) {
            var s = String(this);
            while (s.length < (size || 2)) {
                s = "0" + s;
            }
            return s;
        }

        timer = setInterval(showRemaining, 1000);
    }
});