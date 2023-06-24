# Work-Day-Scheduler
Work Day Schedular Challenge 

### week 5 challenge

## Description

Develop an interactive webpage for a Work Day Schedular

Schedular to display the current date at the top of the page 

In the Body of the Page, the Hours from 9am to 5pm are displayed as individual rows

For each hour displayed, each row is assigned a class based on the current time subsequently coloring the background grey, green or red

There is a section of each hour where the user can input an appointment. 

Once the user clicks the relevant saved button assigned to the each hour, the text input (appointment) is saved in local storage

Saving in local storage ensure that if the page is reloaded, the text input for each hour is still rendered


## Installation

Click the link to access the Quiz

[Work-Day-Schedular](https://jarrodbb.github.io/Work-Day-Scheduler/)

[Github](https://github.com/jarrodbb/Work-Day-Scheduler)

Source code. The code index.html is the working code file
[index.html](https://github.com/jarrodbb/Work-Day-Scheduler/blob/main/index.html)

JavaScript code.
[scipt.js](https://github.com/jarrodbb/Work-Day-Scheduler/tree/main/assets/js)

CSS code
[style.css](https://github.com/jarrodbb/Work-Day-Scheduler/tree/main/assets/css)




## Usage

When the Work Day Schedular is loaded, the current date is formatted and displayed using dayjs

By including click listeners and using event delegation, the save button allows the user to save an input for each hour.

When the save button is clicked, there is a pop up informing the user the "Appointment has been added to Local storage"

For e.g At 11am the user can input "Meeting with the boss." This will then be saved to local storage with the Key "hour-11".

The Key for each input is determined using DOM traversal to obtain a specific Id assigned to each hour row.

Ensuring the correct Key is used is an essential details that guarantees each input is rendered to the correct position when the page loads

A function is run when the page loads. This gets each input from local storage and renders them to the relevant hours.

The background color of each Text Input container is assigned based on the current time and the div Id "hour-i". The hour integer is split from the Id and compared to the current hour from dayjs.
Depending if the hour integer is the same, before or after the hour from dayjs, a specific class is assigned. This renders a background colour of grey = hour-i < dayjs().format('H'), red = hour-i = dayjs().format('H'), green = hour-i > dayjs().format('H').

For e.g if the current time was 2pm, hours 9am-1pm would have a background of grey, hour 2pm would have a background of red and hours 3pm-5pm would be green.

Once an appointment is inputed to the schedule and saved, it will still remain when the page is refreshed. 


### Work Day Schedular.


#### Current Date formatted and displayed

#### Background colors update based on current time. As of writing this the current time is 2:17pm. Therefore the background color is Red

#### Meeting/Event is able to be inputed for each hour

#### Clicking the save button sends the input to local storage

#### Pop up after saving each appointment  

#### Appointment added to local storage with "hour-15" Key

#### Refreshing the page renders the appointment in the correct location 


## Credits

N/A

## License

Refer to license in the repo




