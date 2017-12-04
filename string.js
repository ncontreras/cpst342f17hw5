var main = function () {
    "use strict";

    //sample adapted from textbook
    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".userPrompt input").val() !== "") {
            $new_comment = $("<p>").text($(".userPrompt input").val());
            $(".userResponse").append($new_comment);
            $(".userPrompt input").val("");

            $(document).ready(function(){

            	let $promise = $.get('https://ellypost.com/courses/453/ajax-lab/actions.php', {'word-count': parseInt($(".userPrompt input").val(""))});
            	$promise
            		.done(function(r){
            			console.log("The promise was successful", r);
            			$("#response").text(JSON.parse(r));
            		})

            		.fail(function(err){
            			console.error("The promise was not succesful", err);
            			$("#response").text("The request was not succesful");
            		})
			});
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
