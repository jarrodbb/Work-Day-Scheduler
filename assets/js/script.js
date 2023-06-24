// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// add function to display time in hearder. Day, Month day(st/th)

var timeDisplayEl = $('#currentDay');
var scheduleDisplayEL = $('#scheduleDisplay')
var hourNine = $('#hour-9')
var saveBtn = $('#btn') //might not be required
var eventDescriptionEl = $('eventDescription')

var timeBlockEL = $('.time-block');

var currentTime = dayjs().format('H')

// var scheduleBodySelector = []
// var scheduleInput = []
// var input = ""

// var keyInput = ""

// var hourId = []
// var splitId = []

// var iDInt = []

//Add pop up and format - use icon tick add +++ two element so you can add formatting to the tick 
// one elment = inner html = added to local storage 
// 2nd element = inner html with icon - format 

for (var i=0; i< timeBlockEL.length; i++ ) {
  console.log($(timeBlockEL)[i].id)
  $(timeBlockEL[i]).removeClass('present', 'past', 'future')
  var hourId = $(timeBlockEL)[i].id
  console.log(hourId + "hour ID")

  var splitId = hourId.split("-")
  var iDInt = parseInt(splitId[1])
  console.log("testy" + iDInt)
  
  if (iDInt == currentTime) {
    console.log("present")
    $(timeBlockEL[i]).addClass('present')
  } else if (iDInt < currentTime) {
    console.log("past")
    $(timeBlockEL[i]).addClass('past')
  } else {
    console.log("future")
    $(timeBlockEL[i]).addClass('future')
  }

  var meeting = JSON.parse(localStorage.getItem(hourId))
      console.log(hourId)
      timeBlockEL[i].children[1].innerText = meeting
  
}

console.log(iDInt + "testing ID int")
console.log(scheduleDisplayEL)

function displayTime () {
  var today = dayjs().format('dddd, MMMM D, YYYY')
  console.log(today)
  timeDisplayEl.text(today);
}


displayTime()

// send text input to local storage
function saveButton () {
  
  scheduleBodySelector = $(this).closest('div');
  scheduleInput = scheduleBodySelector.children().eq(1)
  input = scheduleInput.val().trim()
  console.log(input + "test input")

  keyInput = scheduleBodySelector.attr('id')
  console.log(keyInput + "test keyinput")

  console.log(input)

  // save input to local storage with key = hour-x
  function saveHourlyEvent() {
    localStorage.setItem(keyInput, JSON.stringify(input));
  }
  
  saveHourlyEvent()

}

//event listener on Save button
scheduleDisplayEL.on('click', '.btn', saveButton);


console.log(currentTime)

// function allStorage() {

//   var listOfKeysLocalStorage = Object.keys(localStorage)
//       // keys = Object.keys(localStorage),
//       // i = 0, key;

//   // for (; key = keys[i]; i++) {
//   //   listOfKeysLocalStorage.push( key );
//   // }
//   // console.log(listOfKeysLocalStorage)
  
//   for (var i=0; i< timeBlockEL.length; i++ ) {
//     hourKey = $(timeBlockEL)[i].id
//     console.log(hourKey)
  
//     if (listOfKeysLocalStorage.includes(hourKey)) {
//       var meeting = JSON.parse(localStorage.getItem(hourKey))
//       console.log(hourKey)
//       timeBlockEL[i].children[1].innerText = meeting

//       console.log(timeBlockEL.children().eq())
//     } 
   
//   }
// }

// allStorage();

// pop up - render when saved - button 
