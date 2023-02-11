// business logic
function count(numInput, nameInput){
    let numberArray = []
    for (let i = 0; i <= numInput; i ++){
      if (i.toString().includes("3")){
        numberArray.push(`Won't you be my neighbor, ${nameInput}?`);
      } else if (i.toString().includes("2")) {
        numberArray.push("Boop!");
      } else if (i.toString().includes("1")){
        numberArray.push("Beep!");
      } else {
        numberArray.push(i);
      }
    };
    return numberArray.join(", ");
}
  
//UI logic
window.addEventListener("load", function(){
    let form = document.querySelector("form")
    resetBtn.style.display = "none";
    form.addEventListener("submit", function(event){
      event.preventDefault();
      resetBtn.removeAttribute("style");
      const numInput = document.getElementById("numInput").value;
      const nameInput = document.getElementById("name").value;
      const output = document.getElementById("output")
      output.append(count(numInput,nameInput));
    });
    resetBtn.addEventListener("click", function(){
        const input = document.querySelector("input");
        output.innerText = null;
        input.value = null;
        resetBtn.style.display = "none";
      })
});