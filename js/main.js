let movieTitle = document.getElementById("movieTitle")
let imageUrl = document.getElementById("imageUrl")
let rating = document.getElementById("rating")
let addTaskbtn = document.getElementById("addTaskbtn")
let noTasks = document.getElementById("noTasks")
let allTasks = document.getElementById("allTasks")
let model = document.getElementById("model")
let showModelBtn = document.getElementById("showModelBtn")

let addTaskFunction = ()=> {
    taskData = movieTitle.value;
   
   if (taskData.trim() == "" || movieTitle.value.length < 4 || movieTitle.value.length > 20 || imageUrl.value.trim() == "" ||rating.value > 10|| rating.value < 1 ){
    alert("Enter Valid Data")
   } else{
      noTasks.classList.add('none')
      allTasks.innerHTML += `
      <div class= 'alert alert-info'>
      <div class="col-md-6">
      <img  src="${imageUrl.value}" width="100">
    </div>
         ${taskData}
         <i class="removeBtn fa-regular fa-trash-can"></i>
         <div class="col-md-6">
          <hp id="rate">${rating.value}/10</p>
      </div>
    
      `
     
      movieTitle.value = ""
      imageUrl.value = ""
      rating.value = ""
      showModelBtnFunction()

   }
}


addTaskbtn.addEventListener('click' ,  addTaskFunction)


document.addEventListener('click' , function(e) {
   if (e.target.classList.contains('removeBtn')){
      e.target.parentElement.remove();
      checkNoTasksShow()
   }
})


let checkNoTasksShow = () => {
   if (allTasks.childElementCount == 0){
      noTasks.classList.remove('none')
   } 
}


let showModelBtnFunction=()=>{
    model.classList.toggle('block')
}

showModelBtn.addEventListener('click' , showModelBtnFunction )
