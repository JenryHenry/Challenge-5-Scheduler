// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButtons = $(".saveBtn");
var textArea = $("");
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveButtons.on("click", function (event) {
    var btn = $(event.target);
    // determine the textarea name from data attributes
    var selectHour = btn.data().hour;
    console.log(btn);
    // get a handle on the textarea using a name query selector
    var textVal = $("textarea[name=" + selectHour + "]").val();
    // save the value of the textarea to local storage using the same name.
    localStorage.setItem(selectHour, textVal);
    console.log(selectHour);
    // console.log(selHour);
    // key name will be hour-#
  });
  // set the textarea values
  for (var hour = 9; hour <= 17; hour++) {
    var selHour = "hour-" + hour;
    var textValue = localStorage.getItem(selHour);
    $("textarea[name=" + selHour + "]").val(textValue);
  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  //
  // TODO: Add code to display the current date in the header of the page.
});

//     PSEUDO CODE
//  Click Events:
// I need to add a click listener for the save buttons.
// The listener should be able to retrieve the user input from the textarea field that the save button corresponds to.
// Use DOM traversal to get the ID of the save button's parent element, and then go to the textarea child of that element.
// Get the typed user input of the textarea and store that in local storage.
// Set the textarea value to be that input by retrieving it from local storage.
//  Color Coding:
// I need to compare the id of each timeblock div tag to the current hour.
// Use dayjs().hour() to get the current hour.
// If the current hour matches the hour on a timeblock, then that timeblock will be given the "present" class.
// If the hour on a timeblock is less than the current hour, then that timeblock will be given the "past" class.
// If the hour on a timeblock is greater than the current hour, then that timeblock will be given the "future" class.
//  Current date in header:
// Use dayjs() to get the current date, and then store the value in a variable. Create an element from that variable and append it to the header.
