$(".hide-button").click(function() {
  $("img").hide();
})

$('.show-button').click(function() {
  $('img').show();
})
$('.update-img-button').click(function() {
  $('img').attr("src", "https://i.pinimg.com/originals/86/2e/32/862e322efc34712d4bbe503707bf7994.jpg");
})
$(".message-button").click(function(){
    let val = $(".input").val();
	    $(".message").append(val);
})

$('.name-button').click(function() {
   let val = $(".input").val();
  $("h1").text(val);
})
$('.original').click(function() {
  $('img').attr("src", "https://ih1.redbubble.net/image.153656513.6605/flat,800x800,075,f.jpg");
  $('img').show();
  
})
                     