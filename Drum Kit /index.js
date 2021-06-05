for (i = 0; i < document.getElementsByClassName("drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        detector(this.innerHTML);
    });
}
document.addEventListener("keydown", function(event) {
    detector(event.key);
});

function detector(x) {
    switch (x) {
        case 'w':
            console.log(x);
            w = new Audio("sounds/crash.mp3");
            w.play();
            break;
        case 'a':
            a = new Audio("sounds/tom-1.mp3");
            a.play();
            break;
        case 's':
            s = new Audio("sounds/kick-bass.mp3");
            s.play();
            break;
        case 'd':
            d = new Audio("sounds/snare.mp3");
            d.play();
            break;
        case 'j':
            j = new Audio("sounds/tom-3.mp3");
            j.play();
            break;
        case 'k':
            k = new Audio("sounds/tom-4.mp3");
            k.play();
            break;
        case 'l':
            l = new Audio("sounds/tom-2.mp3");
            l.play();
            break;
        default:
    }
}