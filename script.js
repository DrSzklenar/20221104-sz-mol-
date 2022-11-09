let input = document.getElementById('input');


let operators = ['+','-','*','/'];

let count = 0;

let vegosszeg;

let operatorlocation;


function number(number) {
    input.value += number;
}

function equate() {
    if (!input.value == "") {
        input.value = eval(input.value);
    }
    //count = 0;
    //operators = [];
}

function torles() {
    input.value = "";
    console.log("ive been cleared");
    //count = 0;
    //operators = [];
}

function backspace() {
    input.value = input.value.substring(0, input.value.length - 1); 
}

function tizedes() {
    if (input.value != "" && !input.value.includes('.')) {
        input.value += "."
    }
    
}

function addOperator(operator) {
    //csak akkor addol operátort ta nem üres és..
    // if (input.value != "") {
    //     //ha az input értékében nincs benne az operator amit éppen nyomsz
    //     if (!input.value.includes(operator)) {
    //         if (!operators.includes(operator)) {
    //             operators.push(operator);
    //         }
    //         count++;
    //         if(operators.length == 1)
    //         {
    //             input.value += operator;
                
    //         }
    //         else if (operators.includes(operator)) {
    //             input.value = input.value.substring(0, input.value.length - 1);
    //             input.value += operator;
                
    //         }
            
    //     }
    //     console.log(count);
    //     console.log(operators); 
    // }

    if (input.value != "") {
        if (input.value.includes(operators[0]) || input.value.includes(operators[1]) || input.value.includes(operators[2]) || input.value.includes(operators[3])) {
            input.value = input.value.substring(0, operatorlocation - 1);
            input.value += operator;
        }
        else{
            input.value += operator;
            operatorlocation = input.value.length;
        }
    }
}