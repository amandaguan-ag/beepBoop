// business logic
function count(numInput){
    let numberArray = []
    for (let i = 0; i <= numInput; i ++){
      if (i.toString().includes("3")){
        numberArray.push("Won't you be my neighbor?");
      } else if (i.toString().includes("2")) {
        numberArray.push("Boop!");
      } else if (i.toString().includes("1")){
        numberArray.push("Beep!");
      } else {
        numberArray.push(i);
      }
    };
    return numberArray.join(", ");//0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?
    // return numberArray//0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?
}
  
//UI logic
window.addEventListener("load", function(){
    let form = document.querySelector("form")
    resetBtn.style.display = "none";
    form.addEventListener("submit", function(event){
      event.preventDefault();
      resetBtn.removeAttribute("style");
      const numInput = document.getElementById("numInput").value;
      const output = document.getElementById("output")
      output.append(count(numInput));
    });
});