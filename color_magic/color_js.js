x = Math.floor(Math.random() * 16777215).toString(16);
document.querySelector("h1").innerHTML = x;
document.body.style.backgroundColor = "#" + x;