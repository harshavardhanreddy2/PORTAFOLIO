let body1=document.querySelector('body');
let btn=document.getElementById('background');
let isBgColorGrey = true;
 function toggleBackgroundColor(){
  body1.style.backgroundColor = isBgColorGrey ? "white" : "#333";
  body1.style.color = isBgColorGrey ? "black" : "white";
  isBgColorGrey = !isBgColorGrey;
  }
btn.addEventListener("click", toggleBackgroundColor);
btn.addEventListener('click',btn=>{
  btn.classList.add("button-style");
}

);

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
});

function check(){
  let name = document.getElementById('name').value1().trim();
  let email = document.getElementById('email').value1().trim();
  let message = document.getElementById('message').value1().trim();
  if(name === "" || email === "" || message === ""){
    alert("Please fill in all fields.");
    return false;
  }else{
    return true;
  }
}
function send() {
  let send1 = document.querySelector(".sent").innerText;
  if (send1 === "send") {
    document.querySelector('.sent').innerText = "sent";
  } else {
    document.querySelector('.sent').innerText = "send";
  }
}
