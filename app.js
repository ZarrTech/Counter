let count = 0
let value = document.getElementById("value")
let buttons = document.querySelectorAll(".btn")

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        const styles = e.currentTarget.classList
        if(styles.contains("decrease")){
            count --
        }else if(styles.contains("increase")){
            count ++
        }else{
            count = 0
        }
        
        if(count > 0){
         value.style.color = "green"
        }if(count <0){
         value.style.color = "red"
        }if(count === 0){
            value.style.color = "#222"
        }
        value.textContent = count
    })
})



