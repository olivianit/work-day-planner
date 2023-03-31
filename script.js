// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(".saveBtn").on("click", function() {
  let value = $(this).siblings(".description").val();
  let time = $(this).parent().attr('id');

  localStorage.setItem(time, value);

  $(".notification").addClass("show");
  setTimeout(showNotification, 1500);
});

function showNotification() {
  $(".notification").removeClass("show");
}

function updateBlocks() {
  let currentHour = dayjs().hour();
  console.log(currentHour);

  $(".time-block").each(function() {
    let blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(blockHour);

    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else if (blockHour > currentHour) {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future");
    }
  });
}

updateBlocks();

$('#hour-5 .description').val(localStorage.getItem('hour-5'));
$('#hour-6 .description').val(localStorage.getItem('hour-6'));
$('#hour-7 .description').val(localStorage.getItem('hour-7'));
$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
$('#hour-18 .description').val(localStorage.getItem('hour-18'));
$('#hour-19 .description').val(localStorage.getItem('hour-19'));

// Code that will display the current date in the header of the page
$('#currentDay').text(dayjs().format('ddd, MMM D, YYYY'));
