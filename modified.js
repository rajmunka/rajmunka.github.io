function A()
{
    
    
    var person = prompt("Please enter your name:", "raj");   
    var image = prompt("Please enter your image:", "nature.jpg");
    var propic = prompt("Please enter your profile pic:", "url(people.jpg)");
    var card = $("#mycard")
    var parent = $(".row-cards")
    
    var clone = card.clone().attr("id","newcard")
    //var clone1 = clone.attr("font","person")
    parent.append(clone)
    $("#newcard .text-default").text(person);
   // $("#newcard .rounded").html(propic);
    //$("#newcard .avatar").val(image)
   // var clone1 = clone;
 // $("img").css("src",image)
 $(clone).find("img").attr("src",image);
 $("#newcard .avatar").css("background-image",propic)
}
    









    