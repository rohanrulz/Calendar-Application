$(document).ready(function() {

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    function timeblockcolorupdater() {

      var currenttimeinhours = moment().hours();

      $(".time-block").each(function() {
          var timeblocktime = parseInt($(this).attr("id").split("-")[1]);

          
          if (timeblocktime < currenttimeinhours) {
            $(this).addClass("past");
          } 
          else if (timeblocktime === currenttimeinhours) {
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

    timeblockcolorupdater();

    setInterval(timeblockcolorupdater, 30000);

   
      $(".saveBtn").on("click", function() {
      var eventtext = $(this).siblings(".description").val();
      var eventid = $(this).parent().attr("id");
      
      localStorage.setItem(eventid, eventtext);
    
      });



  $(".description").val(localStorage.getItem("clock-9"));
  $(".description").val(localStorage.getItem("clock-10"));
  $(".description").val(localStorage.getItem("clock-11"));
  $(".description").val(localStorage.getItem("clock-12"));
  $(".description").val(localStorage.getItem("clock-13"));
  $(".description").val(localStorage.getItem("clock-14"));
  $(".description").val(localStorage.getItem("clock-15"));
  $(".description").val(localStorage.getItem("clock-16"));
  $(".description").val(localStorage.getItem("clock-17"));

  
});
















