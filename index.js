document.addEventListener("DOMContentLoaded", ()=>{
    button.addEventListener("click", advice)
    function advice(){
        let advice = document.getElementById("advice")
        let q = document.getElementById("q")
        fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(data => {
                advice.textContent += data.slip.id
                q.textContent = data.slip.advice
            })
        advice.textContent = "ADVICE #";
    }
    advice();
})
