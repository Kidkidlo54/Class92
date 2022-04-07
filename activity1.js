score=0




function Update(){
    score+=1
    document.getElementById("score").innerHTML="score: "+score
}
function Save(){
    localStorage.setItem("score", score)
}
function nextSlide(){
    window.location="activity_2.html"
}