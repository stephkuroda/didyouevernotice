function GetValue()
{
    var myarray= new Array("¯\_(ツ)_/¯ Everyone needs a hobby.","Your mom.","...but if you try sometime, you might find you get what you need.", "A ship is safe in harbor, but that's not what ships are built for.", "My favorite dog's name was Scruffy.", "Well, Doc - it all started when I was just six years old...", "For sale: baby shoes, never worn.", "I live alone.", "D D E-flat F F E-flat D C B-flat B-flat", "My children have stopped talking to me.", "They said the most attractive thing about a person is their sense of humor. They also said women were witches. Thus, armadillos.", "Rose are grey, violets are grey, tulips are grey, because I am a dog. (Norm Macdonald)", "Love.");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    /* alert(random); */
    document.getElementById("newAnswer").innerHTML=random;
}

setInterval(function(){
    $(".logo").fadeOut();
},1500);

setInterval(function(){
    $(".reveal").fadeIn();
},2000);



