//koppla med section,hiding shapes /////////
var circle1 = document.getElementById("circle1");
    circle1.style.visibility="hidden";
var circle2 = document.getElementById("circle2");
    circle2.style.visibility="hidden";
var square1 = document.getElementById("square1");
    square1.style.visibility="hidden";
var square2 = document.getElementById("square2")
    square2.style.visibility="hidden";
    //*emoji code copy from codepoint---*for HTML Add the &#x characters, remove the U+1 from the beginning of the codepoint.
    //for CSS  remove the U+ from the unicode endpoint and add the \0 (slash zero) characters just before it.
    //for JavaScript replace---U+ with 0x (zero and x)--write as--String.fromCodePoint(#)..
    var x= String.fromCodePoint(0x1F914);
    var y= String.fromCodePoint(0x2B07);
    var z= String.fromCodePoint(0x1F4A0);
//functioning of button and after click showing shapes to guess answer.
function myFunction() {
    document.getElementById("btn").innerHTML= alert("Which shape you can make with these geometric figures below ?" + x);
    document.getElementById("demo").innerHTML= z + "Write your answer below" + y + z ; 
    circle1.style.visibility="visible"; 
    circle2.style.visibility="visible";
    square1.style.visibility="visible";
    square2.style.visibility="visible"; 
};
//koppla med form-game1
//functioning that after showing shapes asking for answer and checking its right or wrong.
document.getElementById("game1");
function mygame1() {
    var val = document.getElementById("guess").value;
    if (val=== "truck"){
        alert("hey! you are right" + String.fromCodePoint(0x1F38A)); 
        image1.style.display="block";
        image2.style.display="block";
        image3.style.display="block";  //if answer is right it will show alert message and will display right answer image.
        image4.style.display="block";
        goodJob.style.display="block";
    } else {
        alert("try once again") + myResult();//if answer is wrong it will show alert message and will not display right answer image. 
    }  
};
// making final figure in css but defining animation name here  to shapes tobe displayed.
var image1 = document.getElementById("rund1");
    image1.style.WebkitAnimationName="mymove";
var image2 =document.getElementById("rund2");
    image2.style.WebkitAnimationName="mymove1";
var image3 =document.getElementById("sqr1");
    image3.style.WebkitAnimationName="mymove3";
var image4 =document.getElementById("sqr2");
    image4.style.WebkitAnimationName="mymove4";
var myGame= document.getElementsByClassName('.image-making');
var goodJob= document.getElementById('greatjob');
// making final figure animation from shapes displayed none as they will be displayed when answer is correct.
function myResult(){
      image1.style.display="none";
      image2.style.display="none";
      image3.style.display="none";
      image4.style.display="none";
      goodJob.style.display="none";
};
myResult();




////////j-query///////////////
$ (function () {
    //header images
    $('.img1').css('border','3px dotted red');
    $('.img2').css('border','3px dotted yellow');
    $('.img3').css('border','3px dotted lime').css('float','right');
    //section h3
    $('#demo').css('text-align','center').css('font-style','italic').css('background-color','red')
    .css('margin','0rem');
    $('#btn').css('text-align','center').css('font-style','italic').css('background-color','#ff751a');
    //container geometric shapes
    $("#circle1").css('border','.5rem solid black').css('color', 'white');
    $("#circle2").css('border','.5rem solid black').css('color', 'white');
    $("#square1").css('border','.5rem solid black').css('color', 'white');
    $("#square2").css('border','.5rem solid black').css('color', 'white');
    //adding colour changingfunction on hover pointer to both buttons and input box
    $("#guess").hover(function mygame1(){
        $(this).css( 'background-color','yellow');},function mygame1(){
        $(this).css("background-color", "pink")
        });
    $("button").hover(function mygame1(){
        $(this).css( 'background-color','yellow')},function mygame1(){
        $(this).css("background-color", "pink")
        });
    });
    

    

   







