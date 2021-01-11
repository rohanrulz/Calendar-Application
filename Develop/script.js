$(document).ready(function() {


function timeblockcolorupdater {

    var currenttimeinhours = moment().hours();

    $(".time-block").each(function() {
        var timeblockhour = parseInt($(this).attr("id").split("-")[1]);
  
        
        if (timeblockhour < currenttimeinhours) {
          $(this).addClass("past");
        } 
        else if (timeblockhour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }

    timeblockcolorupdator();






    

}













}