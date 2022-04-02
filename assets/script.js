//Current day and time
const d = new Date("MM,DD,YYYY");
document.getElementById("demo").innerHTML = d;

var currentDate = moment().format('dddd') + "" + momet().format("YYYY, MM, DD");
var currentHour = moment().format('h:mm:ss a');

//Hour by hour
var inputhour9am = moment().hour("9am");
var inputhour10am = moment().hour("10am");
var inputhour11am = moment().hour("11am");
var inputhour12pm = moment().hour("12pm");
var inputhour1pm = moment().hour("1pm");
var inputhour2pm = moment().hour("2pm");
var inputhour3pm = moment().hour("3pm");
var inputhour4pm = moment().hour("4pm");

var Input;
var hourSpan;




var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };




