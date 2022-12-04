$(document).ready(function(){
    $(".img").click(function(){
        $(".img").hide();
        $(".what-showing2").show();
    });
    $(".what-showing2").click(function(){
        $(".what-showing2").hide();
        $(".img").show();
    });
      
    $(".DM").click(function(){
        $(".DM").hide();
        $(".what-showing3").show();
    });
    $(".what-showing3").click(function(){
        $(".what-showing3").hide();
        $(".DM").show();
    });

    $(".PM").click(function(){
        $(".PM").hide();
        $(".what-showing4").show();
    });
    $(".what-showing4").click(function(){
        $(".what-showing4").hide();
        $(".PM").show();
    });
});

$(document).ready(function(){
    $("#work4").mouseenter(function(){
        $("#work4").fadeOut();
        $("#work04").fadeIn();
    });
    $("#work04").mouseleave(function(){
        $("#work04").fadeOut();
        $("#work4").fadeIn();
    });
    $("#work3").mouseenter(function(){
        $("#work3").fadeOut();
        $("#work03").fadeIn();
    });
    $("#work03").mouseleave(function(){
        $("#work03").fadeOut();
        $("#work3").fadeIn();
    });
    $("#work2").mouseenter(function(){
        $("#work2").fadeOut();
        $("#work02").fadeIn();
    });
    $("#work02").mouseleave(function(){
        $("#work02").fadeOut();
        $("#work2").fadeIn();
    });
    $("#work1").mouseenter(function(){
        $("#work1").fadeOut();
        $("#work01").fadeIn();
    });
    $("#work01").mouseleave(function(){
        $("#work01").fadeOut();
        $("#work1").fadeIn();
    });
    
});

$(document).ready(function(){
    $("#work5").mouseenter(function(){
        $("#work5").fadeOut();
        $("#work05").fadeIn();
    });
    $("#work05").mouseleave(function(){
        $("#work05").fadeOut();
        $("#work5").fadeIn();
    });
    $("#work6").mouseenter(function(){
        $("#work6").fadeOut();
        $("#work06").fadeIn();
    });
    $("#work06").mouseleave(function(){
        $("#work06").fadeOut();
        $("#work6").fadeIn();
    });
    $("#work7").mouseenter(function(){
        $("#work7").fadeOut();
        $("#work07").fadeIn();
    });
    $("#work07").mouseleave(function(){
        $("#work07").fadeOut();
        $("#work7").fadeIn();
    });
    $("#work8").mouseenter(function(){
        $("#work8").fadeOut();
        $("#work08").fadeIn();
    });
    $("#work08").mouseleave(function(){
        $("#work08").fadeOut();
        $("#work8").fadeIn();
    });
    
});

function myFunction(work){
var work = document.getElementById("name").value;
if (work !== null){
    alert(work + " we have received your message. Thank you for reaching out to us.")
    };
    return work;
};



// js for oders 

window.onscroll = function(){myFunction()};
var navbar =(document.getElementById("navbar"))
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}

$(".deliver").click(function () {
  prompt("Enter your name")
  alert("Delivery cost is ksh200") 
});
function sum(){
  var name = prompt("Entre your location");
  input = prompt("Do you want it delivered ?")
  if (input === null ) {
    return alert("Would you like to change the oder ?.") ; 
  }
  var x =parseInt(document.getElementById("size").value);
  var y =parseInt(document.getElementById("crust").value);
  var z =parseInt(document.getElementById("topping").value);
  var w =parseInt(document.getElementById("no.").value);
  var sum = (x + y + z)*w;
  alert("Your total amout is " + sum); 
  alert("Thank you for shopping with us the delivary fee is 200 to your location in " + name + " the pleasure is ours")
}
