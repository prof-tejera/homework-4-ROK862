let operatorList = [];
let numberList = [];

module.exports.AddOperator = (operator) => {
    operatorList.push(operator);
    console.log(operator);
}

module.exports.AddNumber = (number) => {
    numberList.push(number);
    console.log(number);
}

module.exports.UpdateNumber = (number) => {
    numberList[numberList.length-1] = number;
}

module.exports.Clear = () => {
    operatorList = [];
    numberList = [];
}

module.exports.GetPrintValue = () => {
    let opsIndex = 0;
    let evalString = "";

    console.log(numberList);

    if (numberList.length > 0)
    numberList.forEach((n)=>{
        if (!isNaN(n)) {
            const opsVal = (operatorList.length > opsIndex) ? (operatorList[opsIndex]) : null;
            evalString += (opsVal) ? (opsVal === 'sq' || opsVal === 'qb') ? `${opsVal}(${n}) ` : `${n} ${opsVal} ` : `${n} `;
            opsIndex++;
        }
    });
    return evalString;
}
