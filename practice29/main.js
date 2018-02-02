

function doMath(num1,num2, operator){

    switch(operator){
        case '+':
            var result = num1 + num2;
            break;
        case '-':
            result = num1 + num2;
            break;
        case 'x'|| '*' || 'X':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    return result
}