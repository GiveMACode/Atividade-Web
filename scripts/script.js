function at1() {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);

    if (num1 > num2) {
        document.getElementById("result").innerHTML = num2 + "  e  " + num1;
    }
    else {
        document.getElementById("result").innerHTML = num1 + "  e  " + num2;
    }

}

function at2() {

    var altura = parseFloat(document.getElementById("altura").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;

    let resultM = (72.7 * altura) - 58
    let arredondadoM = parseFloat(resultM.toFixed(2));

    let resultF = (62.1 * altura) - 44.7
    let arredondadoF = parseFloat(resultF.toFixed(2));


    //document.getElementById('resultado').innerHTML = (imc);


    if (gender == 'feminino') {
        document.getElementById("resultado").innerHTML = arredondadoF
        console.log(arredondadoF)
    }
    else if (gender == 'masculino') {
        document.getElementById("resultado").innerHTML = arredondadoM
    }

}

function at3() {

    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var num3 = parseFloat(document.getElementById("n3").value);

    var menornumero = num1;

    if (num2 < menornumero) {
        menornumero = num2;
    }
    if (num3 < menornumero) {
        menornumero = num3;
    }

    document.getElementById("resultado").innerHTML = menornumero;


}

function at4() {

    var num1 = parseFloat(document.getElementById("n1").value);
    var total;

    if (num1 >= 0) {
        var aux = num1 % 2 === 0 ? 'par' : 'impar'

        document.getElementById("resultado").innerHTML = aux;
    }
    else {
        document.getElementById("resultado").innerHTML = Math.abs(num1) ;
    }

    
}
