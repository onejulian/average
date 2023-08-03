function addInput() {
    var inputGroup = document.createElement("div");
    inputGroup.className = "input-group";

    var input = document.createElement("input");
    input.type = "number";
    input.className = "number-input form-input w-full p-4 border border-gray-300 rounded";
    input.placeholder = "Ingresa un número";
    input.addEventListener('input', calculateAverage);
    
    var button = document.createElement("button");
    button.textContent = "Eliminar";
    button.className = "button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2";
    button.addEventListener('click', function() {
        this.parentElement.remove();
        calculateAverage();
    });
    
    inputGroup.appendChild(input);
    inputGroup.appendChild(button);
    document.getElementById('inputList').appendChild(inputGroup);
    document.getElementById('inputList').scrollTop = document.getElementById('inputList').scrollHeight;
    button.focus();
    input.focus();

}

function calculateAverage() {
    var inputs = document.getElementsByClassName('number-input');
    var sum = 0;
    var count = 0;
    for(var i = 0; i < inputs.length; i++) {
        var value = Number(inputs[i].value);
        if (!isNaN(value) && inputs[i].value !== '') {
            sum += value;
            count++;
        }
    }

    var average = sum / count;
    if (isNaN(average) || count === 1){
        document.getElementById('average').textContent = "Ingresa al menos dos números";
        document.getElementById('total').textContent = "";
        document.getElementById('count').textContent = "";
        return;
    } else {
        document.getElementById('average').textContent = "Promedio = " + average;
        document.getElementById('total').textContent = "Suma total: " + sum;
        document.getElementById('count').textContent = "Número de valores: " + count;

    }
}

calculateAverage();
