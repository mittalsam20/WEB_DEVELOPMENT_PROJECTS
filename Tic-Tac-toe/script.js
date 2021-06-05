const human = 'O';
const computer = 'X';
var human_combo = [];
const wincombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

mark();

function mark() {
    for (i = 0; i < 9; i++) {
        document.querySelectorAll(".box")[i].addEventListener("click", function() {
            // document.querySelectorAll(".box")[i].innerHTML = human;
            this.innerHTML = human;
            if (!human_combo.includes(Number(this.id))) {
                human_combo.push(Number(this.id));
                console.log(human_combo);
            }
            if (human_combo.length > 2)
                checker(human_combo);
        });
    }
}

function checker(player) {
    console.log(player)
    var result = false;
    for (win_outer = 0; win_outer < 9; win_outer++) {
        result = wincombo[win_outer].every(curr => player.includes(curr));
        if (result) {
            console.log("you win")
            winingcombo = wincombo[win_outer];
            console.log(winingcombo);
            break;
        }
    }
}