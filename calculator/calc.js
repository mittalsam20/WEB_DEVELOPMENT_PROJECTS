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
        case 'Delete':
        case 'AC':
            mem = ""
            apvalue = "";
            break;
        case 'Backspace':
            mem = mem.slice(0, mem.length - 1)
            apvalue = "";
            break;
        case '=':
            operads(mem);
            break;
        default:
            apvalue = "";
    }
    if (apvalue == '+' || apvalue == '-' || apvalue == 'x' || apvalue == '/') {
        if (mem[mem.length - 1] == apvalue) {
            apvalue = "";
        } else if (mem[mem.length - 1] == "+" || mem[mem.length - 1] == '-' || mem[mem.length - 1] == '/' || mem[mem.length - 1] == 'x') {
            mem = mem.slice(0, mem.length - 1)
        } else if (mem == "" && apvalue !== '-') {
            apvalue = "";
        }
    }
    document.getElementById("display").value = mem + "" + apvalue;
    mem = document.getElementById("display").value;

}

function operads(st) {
    for (k = 0; k < st.length; k++) {
        if (st[k] == '/') {
            for (j = st.indexOf("/"); j < st.indexOf("+"); j++) {
                f = st[j];
            }
            for (l = st.indexOf("/"); l > st.indexOf("+"); l--) {
                s = st[l];
            }
            r = s / l;
            document.getElementById("display").value = r;
        }





    }
}