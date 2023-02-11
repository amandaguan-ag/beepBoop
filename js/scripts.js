// Utility logic
// business logic
function count(numInput){
    let numberArray = []
    for (let i = 0; i <= numInput; i ++){
      if (i.toString().includes("3")){
        numberArray.push("Won't you be my neighbor?");
      } else if (i.toString().includes("2")) {
        numberArray.push("Boop!");
    //   } else if (i.toString().includes("1")){
    //     numberArray.push("Beep!");
      } else {
        numberArray.push(i);
      }
    };
    console.log(numberArray);//return numberArray;
  }
  
// UI logic
// window.addEventListener("load", function(){
//     let form = document.querySelector("form")
//     resetBtn.style.display = "none";
//     form.addEventListener("submit", function(event){
//       event.preventDefault();
//       resetBtn.removeAttribute("style");
//       const numInput = document.getElementById("numInput").value;
//       const output = document.getElementById("output")
//       output.append(count(numInput));
//     });
// });