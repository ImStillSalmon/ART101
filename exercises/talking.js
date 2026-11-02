    // A says
let messagesA = ["How are u doing", "Sorry to hear that", "What color would u like  it to be", "Pick one"];
let counterA = 0
// B says
let messagesB = ["Terrible", "Color of the background sucks", "Not this one",];
let counterB = 0

// when A is clicked
// A speaks when counterA = counterB
$("#character-a").click(function () {

   
    if (counterA == counterB) {
        $("#chat").append("<p>jake: " + messagesA[counterA] + "</p>");

        counterA = counterA + 1;
    }
    if (counterB>2) { $("#answers").css("display", "flex"); counterB=10000}
});

// when B is clicked
// B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>finn: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;

    }
});
$("#answer-green").click(function () {
    $("body").css("background-color","rgb(42, 220, 10)" )
     $("#chat").append("<p>finn: " + "Wow" + "</p>");
     $("#answers").css("display", "none");
     
    
})
$("#answer-pink").click(function () {
    $("body").css("background-color","rgb(238, 39, 208)" )
     $("#chat").append("<p>finn: " + "Wow" + "</p>");
    $("#answers").css("display", "none");
})