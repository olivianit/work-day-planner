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
    