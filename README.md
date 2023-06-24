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

Source code. 
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
![Screenshot 2023-06-24 at 2 15 02 pm](https://github.com/jarrodbb/Work-Day-Scheduler/assets/132813348/884bc7e7-f371-4b31-bc8f-4c6e43e26e28)

#### Current Date formatted and displayed
![Screenshot 2023-06-24 at 2 15 17 pm](https://github.com/jarrodbb/Work-Day-Scheduler/assets/132813348/e349c860-302b-471e-bdcc-8a3431add3b5)

#### Background colors update based on current time. As of writing this the current time is 2:17pm. Therefore the background color is Red
![Screenshot 2023-06-24 at 2 16 36 pm](https://github.com/jarrodbb/Work-Day-Scheduler/assets/132813348/ae80e968-2df2-4c92-9eb7-beacfce964b3)

#### An appointment is able to be inputed for each hour
![Screenshot 2023-06-24 at 2 18 28 pm](https://github.com/jarrodbb/Work-Day-Scheduler/assets/132813348/f03a3c15-c98a-4b8d-85d4-349dd5bbddc2)

#### Clicking the save button sends the input to local storage
![Screenshot 2023-06-24 at 2 19 11 pm](https://github.com/jarrodbb/Work-Day-Scheduler/assets/132813348/2106cf02-cf96-40e0-b1a9-d8559f26b2de)

#### Pop up after saving each appointment  
![Screenshot 2023-06-24 at 2 22 53 pm](https://github.com/jarrodbb/Work-Day-Scheduler/assets/132813348/45d63ca9-3b93-48ae-a871-3ab13d691b80)

#### Appointment added to local storage with "hour-15" Key
![Screenshot 2023-06-24 at 2 23 40 pm](https://github.com/jarrodbb/Work-Day-Scheduler/assets/132813348/92a8ebea-407d-4bbe-b4fd-df13488f5e7a)

#### Refreshing the page renders the appointment in the correct location 
![Screenshot 2023-06-24 at 2 25 19 pm](https://github.com/jarrodbb/Work-Day-Scheduler/assets/132813348/c6c57050-8b82-4b04-96ec-b25c33aaa276)


## Credits

N/A

## License

Refer to license in the repo




