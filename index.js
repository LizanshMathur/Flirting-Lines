function tryit(){
  fetch('lines.txt')

  .then(function(response) { 
    return response.text();

  }).then(function(data)  {
  	$("#demo").html(data);
  })
}

$(".btn").click(function(){
  tryit();

});