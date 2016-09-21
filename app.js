var userName;
$(document).ready(function(){
  $.get("https://spacewolvesserver.herokuapp.com/").then(function (data){
    for (var i = 0; i < data.length; i++) {
      console.log(data);
      $('ul').append('<li>' + data[i]["username"] + " " + data[i]["score"] + '</li>');
    };
  });
});

setTimeout(function(){
  $('.sign').fadeOut("slow");
  $('.loading').fadeOut("slow");
  $('.leaderBoard').fadeOut("slow");
}, 8000);
