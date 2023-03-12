const tasks = document.querySelectorAll(".description");
let currentDayTime = dayjs().format('MMMM D, YYYY h:mm A');
let task = localStorage.getItem("task")
task = tasks.textContent

$("#currentDay").html(currentDayTime)

$(document).ready(function() {
  $(".btn").on("click", function() {
    let task = $(this).siblings(".description").val();
    let timeSubmitted = $(this).parent().attr("id");
    localStorage.setItem(timeSubmitted, task)
  })
})

function keepTime() {
  let timeNow = dayjs().hour();

  $(".time-block").each(function() {
    let timeBlock = parseInt($(this).attr("id").split("hour-")[1]);
    
    if (timeBlock < timeNow) {
      $(this).removeClass("present")
      $(this).removeClass("future")
      $(this).addClass("past")
    }

    else if (timeBlock == timeNow) {
      $(this).removeClass("past")
      $(this).removeClass("future")
      $(this).addClass("present")
    }

    else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    }

    console.log(timeBlock); 
  })
}

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

keepTime()