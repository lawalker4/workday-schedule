//Current day and time
var currentDay = document.getElementById("currentDay");
setInterval(function(){
  currentDay.textContent= moment().format('MM/DD/YYYY hh:mm:ss a')
},1000)

//Hour by hour
var Input;
var hourSpan;

var miltaryTime = [9,10,11,12,13,14,15,16,17];
var standarTime = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm","4pm","5pm"];
display()

function display(){
  for (var i = 0; i < standarTime.length; i++){
    var timeBlock=document.getElementById(standarTime[i])
    var currentTime=moment().hour()
    if (currentTime === miltaryTime[i]){
      timeBlock.classList.add("present")
    
    }else if (currentTime > miltaryTime[i]){
      timeBlock.classList.add("past")
    }else {
      timeBlock.classList.add("future")
    }
    var text=localStorage.getItem(standarTime[i])
    timeBlock.value=text
  }
}
   

var saveBtn = document.querySelectorAll(".saveBtn")
  for (var i = 0; i < saveBtn.length; i++){
    saveBtn[i].addEventListener("click",function (){
    var dataId= this.getAttribute("data-id")
    var text= document.getElementById(dataId)  
    localStorage.setItem(dataId, text.value)
    }) 
  }







