alert("test");

const message = document.querySelector(".welcome-msg");

message.addEventListener("click", () => {
  message.innerHTML = "Have a good time!";
})
