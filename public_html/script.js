$("document").ready(function() {

    $('#accord').accordion({header: "h4"});
    //Sets an accordion onto the header of an h4

    $('#accord').css("opacity", "0.5");
    //Sets the accordions opacity to 0.5

    $("button").css("opacity", "0.7");
    //Sets the button's opacity to 0.7

    $("#tabs").tabs();
    $("#tabs").draggable();
    $("#tabs").resizable();
    $("#sortMe").sortable();
    //Customizes the tab system

    $('a.nudge').hover(function() { //mouse in
        $(this).animate({paddingLeft: '20px'}, 400);
    }, function() { //mouse out
        $(this).animate({paddingLeft: 0}, 400);
    });
    //Link nudging system
    

    $("#bio").css("color", "white");
    //Sets the text color to white

    $("div:first").css("border", "3px solid blue");
    //Creates a 3 pixel, solid, blue border around all divs

    $(".uppercase").css("text-transform", "uppercase");
    //Sets an uppercase class

    $(".uppercase").css("text-size", "38px");
    //Creates the text size of the uppercase class

    $(".uppercase").css("border", "3px solid black");
    //Sets a 3 pixel, solid, black border around all uppercases

    $(".uppercase").css("color", "whitesmoke");
    //Sets the uppercase color to "whitesmoke

    $(".bleh").css("color", "'whitesmoke");
    //Sets the text color in class "bleh" to "whitesmoke"

    $(".front").css("color", "cyan");
    //Puts no border around the front class
    
    $(".back").css("color", "cyan");
    //Puts no border around the back class

    $("#jq").css("color", "white");
    //Sets the text color in the jq id to white

    $("body").css("text-align", "center");
    //Aligns all text to the center of the site

    $(".flip-container").css("text-align", "center");
    //Aligns all text in the flip-container class to the center of the site

    $('p:first').css("color", "whitesmoke");
    //Sets the text color of the first paragraph to "whitesmoke"

    $("div :nth-child(3)").css("color", "clear");
    //Sets the text color of the 3rd child of the div to clear

    $("body").css("background-image", "url(http://i0.kym-cdn.com/photos/images/original/000/120/151/space_core_wallpaper_2_by_deathonabun-d3eta23.jpg)");
    //Sets the background-image within the body to SPAAAACE

    $("body").css("background-size", "cover");
    //Allows the background to cover the webpage within the body

    $("#fragment-1").css("border", "none");
    //Puts no border around the id fragment-1

    $("#fragment-2").css("border", "none");
    //Puts no border around the id fragment-2

    $("#fragment-3").css("border", "none");
    //Puts no border around the id fragment-3

    $("#jq").bind('click', alertButtonClick);
    //Starts the "alertButtonClick" function when the id "jq" is clicked

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    //This line makes it so that when your mouse hovers over the h1 the "mouseOverMe" function starts

    $("h3").css("color", "white");
    //This sets the h3 text color to white

    $("h6").css("color", "white");
    //This sets the h6 text color to white

    $("#logo").css("opacity", "0.7");
    //This sets my logo to 0.7

    $("#replaceWHtml").css("color", "white");
    $("#replaceWText").css("color", "white");
    $("#addAPara").css("color", "white");
    $("#removeAPara").css("color", "white");
    //Sets all of these id's colors to text

    $("#replaceWHtml").bind('click', replaceWHtml);
    $("#replaceWText").bind('click', replaceWText);
    $("#addAPara").bind('click', addAPara);
    $("#removeAPara").bind('click', removeAPara);
    //Binds a click to each function

    $('#fadeLogo').bind('click', fadeTheImage);
    $('#fullOpacity').bind('click', fullOpacityImage);
    //Once these buttons are clicked their binded functions are called

});

function alertButtonClick() {
    $("#jq").html("You Clicked This");
}
//This function gives an alert

function mouseOverMe() {
    $("h1").html("MouseOn");
    $("div: first").html("Secret Tunnel");
}
//This function changes the text of the h1 to "Mouse On" and the first div to "Secret Tunnel" when the mouse hovers over them.
function mouseOutMe() {
    $("h1").html("JQuery Ex Page");
}
//Once the mouse cursor moves out of this area this function activates setting the h1 to "JQuery Ex Page"

function replaceWHtml() {
    $('#h3Tag').html('<h6>Now I am an h6</h6>');
}
//This function replaces the h3Tag to an h6 with the text "Now I am an h6"

function replaceWText() {
    $('#h3Tag').text('Now I am just text');
}
//This function repaces the h3Tag to the text "Now I am just text"

function addAPara() {
    $('#randPara').append('<p>Another Paragraph</p>');
}
//Appends the #randPara into a paragraph "Another Paragraph"

function removeAPara() {
    $('#randPara p:last').remove();
}
//Removes the last paragraph of randPara

function fadeTheImage() {
    $('#logo').fadeOut(2500);
}
//Sets the fadeOut of the image

function fullOpacityImage() {
    $('#logo').fadeTo(2500, 1);
}
//Sets the fullOpacity animation of the image