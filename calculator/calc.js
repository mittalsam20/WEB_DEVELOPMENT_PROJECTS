for (i = 0; i < document.getElementsByClassName("btn").length; i++) {
    mem = "";
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        update(this.innerHTML);
    });
}

document.addEventListener("keydown", function() {
    update(event.key);
});


function update(latest) {

    switch (latest) {
        case '9':
            apvalue = 9;
            break;
        case '8':
            apvalue = 8;
            break;
        case '7':
            apvalue = 7;
            break;
        case '6':
            apvalue = 6;
            break;
        case '5':
            apvalue = 5;
            break;
        case '4':
            apvalue = 4;
            break;
        case '3':
            apvalue = 3;
            break;
        case '2':
            apvalue = 2;
            break;
        case '1':
            apvalue = 1;
            break;
        case '0':
            apvalue = 0;
            break;
        case '+':
            apvalue = "+";
            break;
        case '-':
            apvalue = "-";
            break;
        case '*':
            apvalue = "x";
            break;
        case '/':
            apvalue = "/";
            break;
        case '=':
            operads(mem);
            break;
        default:
            console.log("s");

    }
    // document.querySelector("input").setAttribute("value", x);
    document.querySelector("input").value = mem + "" + apvalue;
    mem = document.querySelector("input").value;

}

function operads(st) {
    for (k = 0; k < st.length; k++) {
        if (st[k] == '+') {
            arr = st.split('+', 2);
            console.log(arr);
        }
        // else if mem[k] == '-';
    }
}