var im1 = document.getElementById("img1");
var im2 = document.getElementById("img2");
var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;
console.log(p1);
console.log(p2);
main(p1, im1);
main(p2, im2);
if (p1 > p2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player_1 Wins..!";
} else if (p2 > p1) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player_2 Wins..!";
} else {
    document.getElementsByTagName("h1")[0].innerHTML = "DRAW..!";
}

function main(n, l) {
    switch (n) {
        case 1:
            l.src = "images/dice1.png";
            break;
        case 2:
            l.src = "images/dice2.png";
            break;
        case 3:
            l.src = "images/dice3.png";
            break;
        case 4:
            l.src = "images/dice4.png";
            break;
        case 5:
            l.src = "images/dice5.png";
            break;
        case 6:
            l.src = "images/dice6.png";
            break;
        default:
            break;
    }
}