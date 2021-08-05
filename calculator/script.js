let operationContentInput = document.getElementById('operationContent');
let calculateInput = document.getElementById('calculate');
let resultInput = document.getElementById('result');
let clear = document.getElementById('clear');

let calculate = (operationCarrierFunction) => {
	return new Function(`return ${operationCarrierFunction}`)();
}

calculateInput.addEventListener('click', event => {

	let operation = operationContentInput.value;

	for (var i = 0; i < operation.length; i++) {
		operation = operation.replace(")(", ")*(");
	}

	for(var j = 0; j < 10; j++){
		for (var i = 0; i < operation.length; i++) {
			operation = operation.replace(")" + j, ")*" + j);
		}
		for (var i = 0; i < operation.length; i++) {
			operation = operation.replace(j + "(", j + "*(");
		}
	}

	resultInput.innerText = calculate(operation);
});

let Clear = (yeni) => {
	return new Function(`return ${yeni}`)();
}

clear.addEventListener('click', event => {
	resultInput.innerText = Clear("0");
	operationContentInput.value = "";
});
