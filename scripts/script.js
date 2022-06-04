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
