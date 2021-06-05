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
        case 'AC':
        case 'Delete':
            mem = ""
            apvalue = "";
            break;
        case 'Backspace':
            mem = mem.slice(0, mem.length - 1)
            apvalue = "";
            break;
        case '=':
        case 'Enter':
            result(mem);
            apvalue = ""
            break;
        case 'result':
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

function result(st) {
    left = right = 0;
    for (k = 0; k < st.length; k++) {
        if (st[k] == '/') {
            for (j = k + 1; j < st.length + 1; j++) {
                if (st[j] == '+' || st[j] == '-' || st[j] == 'x' || st[j] == '/') {
                    break;
                } else {
                    right++;
                    num1 = st.slice(k + 1, k + right);
                }
            }
            right = 0;
            for (l = k - 1; l >= 0; l--) {
                if (st[j] == '+' || st[l] == '-' || st[l] == 'x' || st[l] == '/') {
                    break;
                } else {
                    left++;
                    num2 = st.slice(k - left, k);
                }
            }
            left = 0;
            var r = Number(num2) / Number(num1);
            console.log(r)
            mem = "";
            apvalue = r;
            update("result")
        }
    }
}