function addAvatar(event) {
    event.preventDefault();
    alert("Avatar to be added");
  }

$(document).ready(function(){
  var sel = $("#field_size");
  sel.data("prev",sel.val());
  sel.change(function(data){
      var jqThis = $(this);
      var prev = jqThis.data("prev");
      var now = sel.val();
      updatePlayerCount(prev,now);
      jqThis.data("prev",jqThis.val());
  });
  $(".reset").click(function(){
    updatePlayerCount("5","11");
  });
  $("img").dblclick(function(){
    var text = prompt("Confirmar este lugar?", "Nombre");
    $(this).next('span').remove();
    $(this).after('<span class="text-center">' + text +'</span>');
  });
  $("#randomPosBlack").click(function(){
    for( i = 0; i<=11; i++) {
      switch (i) {
        case (0):
          $("#img_container_" + i).animate({
            "right": "720px",
            "top": "300px",
          },
          "slow");
      };
    };
  });
  $("#randomPosWhite").click(function(){
    for( i = 12; i<=22; i++) {
      switch (i) {
        case (12):
          $("#img_container_" + i).animate({
            "right": "445px",
            "bottom": "150px",
          },
          "slow");
      };
    };
  });
  $(".animation").mouseover(function(){
    $(this).animate({
      height:'60px',
      width:'60px',
      overflow:'visible',
      opacity: '1'
    })
  });
  $(".animation").mouseout(function(){
    $(this).animate({
      height:'50px',
      width:'50px',
      opacity: '0.8'
    })
    $(this).stop(true,true);
  });
});


  
function updatePlayerCount(prev,now) {
  var prevNum = parseInt(prev.match(/\d+/g));
  var nowNum = parseInt(now.match(/\d+/g));
  var prevBlackInd = prevNum - 1;
  var prevWhiteInd = prevNum + 11;
  while (prevNum > nowNum) {
    $("#" + prevBlackInd).css("visibility", "hidden");
    $("#" + prevWhiteInd).css("visibility", "hidden");
    prevNum -= 1;
    prevBlackInd -= 1;
    prevWhiteInd -= 1;
  }
  while (prevNum <= nowNum) {
    $("#" + prevBlackInd).css("visibility", "visible");
    $("#" + prevWhiteInd).css("visibility", "visible");
    prevNum += 1;
    prevBlackInd += 1;
    prevWhiteInd += 1;
  }
}