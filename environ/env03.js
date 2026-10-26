let environmentTitle = "Alone on the Waters";

let environmentElements = ["Dark", "Wet", "Cold", "Quiet"];

let mainEntity = {
    name: "The Depths",
    mood: "suspicious",
    SharkCount: "four",
    isMoving: true,
    favoriteElement: environmentElements[1],
    tips : ["Its very cold, you should bundle up and stay warm.",
            "There are at least 4 sharks in the water, swimming would be a death sentence.",
            "Maybe those the water is more shallow by those rocks?",
            "Figure it out yourself stop bothering me!"]
};
$("help-button").click(function () {

    count = count + 1;
    
    
    if (count < 4) {
     let arrayPosition = count - 1;
    }
    let currentTip = mainEntity.tips[arrayPosition];
    
    let message = "<p>Tip Number " + count + "</p>";
    message = message + currentTip 
    
    console.log(count);
    console.log(arrayPosition);
    console.log(currentTip);



    $("#output").html(message);
    console.log(count);
    console.log(arrayPosition);
    console.log(currentTip);
});
$("SOS-button").click(function () {

    count2 = count2 + 1;
    
    

    message2 = message2 + "<p>you have called for help " + count2 + " times.</p>";

    console.log(count2);

    $("#output2").html(message2);
    console.log(count2);

});
$("Info-button").click(function () {
   count3 = count3 + 1;
   if (count3 < 4) {
     let arrayPosition = count3 - 1;
    }
    let currentFeel = environmentElements[arrayPosition];
   message3 = message3 + "<p>you are in " + mainEntity.name + ".</p>";
   message3 = message3 + "<p>you are feeling " + mainEntity.mood + ".</p>";
   message3 = message3 + "<p> it is" + currentFeel + ".</p>";
   $("#output3").html(message3);
    console.log(count3);
    console.log(arrayPosition);
    console.log(currentTip);
});

