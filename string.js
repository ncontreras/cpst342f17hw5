var main = function () {
    "use strict";

    //sample adapted from textbook
    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".userPrompt input").val() !== "") {
            $new_comment = $("<p>").text($(".userPrompt input").val());
            $(".userResponse").append($new_comment);
            $(".userPrompt input").val("");
        }
    };

    $(".userPrompt button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".userPrompt input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
