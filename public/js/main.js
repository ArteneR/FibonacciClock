$(document).ready(function() {

    var TESTING_MODE = 0;

    var date = new Date();

    var hours = date.getHours() % 12;
    var minutes = date.getMinutes();

    alert("Time is: " + hours + ":" + minutes);

    colorHours(hours);
    colorMinutes(Math.floor(minutes/5));

    /* TESTING: */

    if (TESTING_MODE == 1) {
            hours = 1;
            // Color the hours
            while (hours <= 12) {
                    colorHours(hours);

                    minutes = 0;
                    while (minutes < 12) {
                            // Color the minutes
                            colorMinutes(minutes);

                            alert(hours + ":" + minutes);
                            minutes++;
                    }

                    $(".blocks").css("background-color", "#DED29E");

                    hours++;

            }
    }

});


function colorHours(hours) {

        if (Math.floor(hours/5) >= 1) {
                // hour >= 5

                $(".blocks").css("background-color", "#DED29E");



                $("#block-5").css("background-color", "red");

                var rem_hours = hours - 5;

                if (Math.floor(rem_hours/5) == 1) {
                        // hour >= 10

                        $("#block-2").css("background-color", "red");
                        $("#block-3").css("background-color", "red");

                        rem_hours = rem_hours - 5;

                        // hour == 10, 11 or 12

                        if (rem_hours >= 1) {
                            // hour == 11 or 12
                            $("#block-1a").css("background-color", "red");
                        }
                        if (rem_hours == 2) {
                            // hour == 12
                            $("#block-1b").css("background-color", "red");
                        }
                }
                else {
                        // hour >= 5 && hour < 10

                        if (Math.floor(rem_hours/3) == 1) {
                                // hour >= 8

                                $("#block-3").css("background-color", "red");

                                rem_hours = rem_hours - 3;

                                // hour == 8 or 9

                                if (rem_hours == 1) {
                                    // hour == 9
                                    $("#block-1a").css("background-color", "red");
                                }
                        }
                        else {
                            // hour >= 5 && hour < 8

                            // hour == 5, 6 or 7

                            if (rem_hours >= 1) {
                                // hour == 6 or 7
                                $("#block-1a").css("background-color", "red");
                            }
                            if (rem_hours == 2) {
                                // hour == 7
                                $("#block-1b").css("background-color", "red");
                            }
                        }
                }
        }
        else {
                // hours < 5

                if (Math.floor(hours/2) >= 1) {
                        // hour == 2, 3 or 4
                        $("#block-2").css("background-color", "red");

                        var rem_hours = hours - 2;

                        if (rem_hours >= 1) {
                            // hour == 3 or 4
                            $("#block-1a").css("background-color", "red");
                        }
                        if (rem_hours == 2) {
                            // hour == 4
                            $("#block-1b").css("background-color", "red");
                        }

                }
                else {
                    // hour == 1
                    $("#block-1a").css("background-color", "red");
                }
        }

}





function colorMinutes(minutes) {

        //for each color different than red or blue, clear
        $(".blocks").each(function(index) {
                if ($(this).css("background-color") != "rgb(255, 0, 0)" && $(this).css("background-color") != "rgb(0, 0, 255)") {
                        $(this).css("background-color", "#DED29E");
                }
                else {
                        $(this).css("background-color", "red");
                }
        });


        if (Math.floor(minutes/5) >= 1) {
                // minute >= 5

                if ($("#block-5").css("background-color") == "rgb(255, 0, 0)") {
                    $("#block-5").css("background-color", "blue");
                }
                else {
                    $("#block-5").css("background-color", "green");
                }

                var rem_minutes = minutes - 5;

                if (Math.floor(rem_minutes/5) == 1) {
                        // minute >= 10

                        if ($("#block-2").css("background-color") == "rgb(255, 0, 0)") {
                            $("#block-2").css("background-color", "blue");
                        }
                        else {
                            $("#block-2").css("background-color", "green");
                        }


                        if ($("#block-3").css("background-color") == "rgb(255, 0, 0)") {
                            $("#block-3").css("background-color", "blue");
                        }
                        else {
                            $("#block-3").css("background-color", "green");
                        }

                        rem_minutes = rem_minutes - 5;

                        // minute == 10, 11 or 12

                        if (rem_minutes >= 1) {
                                // minute == 11 or 12

                                if ($("#block-1a").css("background-color") == "rgb(255, 0, 0)") {
                                    $("#block-1a").css("background-color", "blue");
                                }
                                else {
                                    $("#block-1a").css("background-color", "green");
                                }

                        }
                        if (rem_minutes == 2) {
                                // minute == 12

                                if ($("#block-1b").css("background-color") == "rgb(255, 0, 0)") {
                                    $("#block-1b").css("background-color", "blue");
                                }
                                else {
                                    $("#block-1b").css("background-color", "green");
                                }
                        }
                }
                else {
                        // minute >= 5 && minute < 10

                        if (Math.floor(rem_minutes/3) == 1) {
                                // minute >= 8

                                if ($("#block-3").css("background-color") == "rgb(255, 0, 0)") {
                                    $("#block-3").css("background-color", "blue");
                                }
                                else {
                                    $("#block-3").css("background-color", "green");
                                }

                                rem_minutes = rem_minutes - 3;

                                // minute == 8 or 9

                                if (rem_minutes == 1) {
                                        // minute == 9

                                        if ($("#block-1a").css("background-color") == "rgb(255, 0, 0)") {
                                            $("#block-1a").css("background-color", "blue");
                                        }
                                        else {
                                            $("#block-1a").css("background-color", "green");
                                        }
                                }
                        }
                        else {
                                // minute >= 5 && minute < 8

                                // minute == 5, 6 or 7

                                if (rem_minutes >= 1) {
                                        // minute == 6 or 7

                                        if ($("#block-1a").css("background-color") == "rgb(255, 0, 0)") {
                                            $("#block-1a").css("background-color", "blue");
                                        }
                                        else {
                                            $("#block-1a").css("background-color", "green");
                                        }
                                }
                                if (rem_minutes == 2) {
                                        // minute == 7

                                        if ($("#block-1b").css("background-color") == "rgb(255, 0, 0)") {
                                            $("#block-1b").css("background-color", "blue");
                                        }
                                        else {
                                            $("#block-1b").css("background-color", "green");
                                        }
                                }
                        }
                }
        }
        else {
                // minute < 5

                if (Math.floor(minutes/2) >= 1) {
                        // minute == 2, 3 or 4

                        if ($("#block-2").css("background-color") == "rgb(255, 0, 0)") {
                            $("#block-2").css("background-color", "blue");
                        }
                        else {
                            $("#block-2").css("background-color", "green");
                        }

                        var rem_minutes = minutes - 2;

                        if (rem_minutes >= 1) {
                                // minute == 3 or 4

                                if ($("#block-1a").css("background-color") == "rgb(255, 0, 0)") {
                                    $("#block-1a").css("background-color", "blue");
                                }
                                else {
                                    $("#block-1a").css("background-color", "green");
                                }
                        }
                        if (rem_minutes == 2) {
                                // minute == 4

                                if ($("#block-1b").css("background-color") == "rgb(255, 0, 0)") {
                                    $("#block-1b").css("background-color", "blue");
                                }
                                else {
                                    $("#block-1b").css("background-color", "green");
                                }
                        }

                }
                else {
                        // minute == 1

                        if (minutes == 1) {
                                if ($("#block-1a").css("background-color") == "rgb(255, 0, 0)") {
                                    $("#block-1a").css("background-color", "blue");
                                }
                                else {
                                    $("#block-1a").css("background-color", "green");
                                }
                        }
                }
        }

        }
