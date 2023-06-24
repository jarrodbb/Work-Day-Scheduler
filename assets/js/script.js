// variable created to link HTML
var timeDisplayEl = $('#currentDay');
var scheduleDisplayEL = $('#scheduleDisplay')
var locationOfPopUpEl = $('#popUpDisplayDiv')
var timeBlockEL = $('.time-block');

//the hour of the current time is created as a variable to be used when assigning the correct class
var currentTime = dayjs().format('H')

//for loop created to assign past, present or future classes to each time
for (var i=0; i< timeBlockEL.length; i++ ) {

  //classes first removed to ensure the correct class is assigned 
  $(timeBlockEL[i]).removeClass('present', 'past', 'future')
  
   //jQuery to select the id
  var hourId = $(timeBlockEL)[i].id
  // id is then split as only the hr is required
  var splitId = hourId.split("-")
  //parseInt is used to create an interger to compare with
  var iDInt = parseInt(splitId[1])
  //if statement is run to assign the correct class based on the time displayed 
  if (iDInt == currentTime) {
    $(timeBlockEL[i]).addClass('present')
  } else if (iDInt < currentTime) {
    $(timeBlockEL[i]).addClass('past')
  } else {
    $(timeBlockEL[i]).addClass('future')
  }

  //for loop also grabs any saved event in the local storage that mateches the id and appends it the the relevant hour
  var meeting = JSON.parse(localStorage.getItem(hourId))
      timeBlockEL[i].children[1].innerText = meeting
  
}

// function using dayjs to display the current date in the header 
function displayTime () {
  var today = dayjs().format('dddd, MMMM D, YYYY')
  timeDisplayEl.text(today);
}

//displayTime function is run
displayTime()

//function to handle the click on the save button
function saveButton () {
  //jQUery to select the closet div
  scheduleBodySelector = $(this).closest('div');
  //DOM traversal used with select the right child and sibling
  scheduleInput = scheduleBodySelector.children().eq(1)
  //input saved and trimmed 
  input = scheduleInput.val().trim()
  //id selected
  keyInput = scheduleBodySelector.attr('id')

  // save input to local storage with key = hour-x
  function saveHourlyEvent() {
    //save to local storage
    localStorage.setItem(keyInput, JSON.stringify(input));
    
   //timeout function to display pop up
    setTimeout( function(){
      //jQuery used to create element 
      //elements split to be able to assign the correct styling
      var popUpTextEl = $('<h6>Appointment Added to </h6> ')
      var popUpLocalStorageTextEl =$('<h6 class="save-to-storage">local storage </h6> <i class="fas fa-check comfirm-tick"></i>')
      // variables combined 
      var popUpEl = $.merge(popUpTextEl, popUpLocalStorageTextEl).addClass('.pop-up')
      //popUpEL appende to locationOfPopUpEl
      locationOfPopUpEl.append(popUpEl);  
    }, 100);
      //function to run after 1sec to empty what was displayed. this ensure it is only rendered when the save button is selected
      setTimeout( function(){    
      locationOfPopUpEl.empty()
    }, 1000);
  
  }
  
  //runs the function to save to local storage 
  saveHourlyEvent()

}

//event listener on Save button. Event delegation is used. Parent selected and then the button is selected. 
//Ensures only the .btn triggers the click
scheduleDisplayEL.on('click', '.btn', saveButton);



