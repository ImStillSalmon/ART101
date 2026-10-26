let count = 0;
let buttonCreature = {
    name: "Crazy Rock",
    species: "Earth Creature",
    favoriteThing: "dirt",
    moods: ["happy", "scared", "stoney", "hopeless", "terrified", "excited"]
};
$("#needy-button").click(function () {

    count = count + 1;
    
    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    
    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite thing is " + buttonCreature.favoriteThing + ".</p>";

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);



    $("#output").html(message);
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});
