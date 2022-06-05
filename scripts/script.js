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

    if (num1 >= 0) {
        var aux = num1 % 2 === 0 ? 'par' : 'impar'

        document.getElementById("resultado").innerHTML = aux;
    }
    else {
        document.getElementById("resultado").innerHTML = Math.abs(num1) ;
    }

    
}

function at5(){

    var num1 = parseFloat(document.getElementById("n1").value);
    
    if (num1%2 == 0){
        document.getElementById("r1").innerHTML = "É divisivel por 2";
    }
    else{
        document.getElementById("r1").innerHTML = "Nao é divisivel por 2"
    }
    if(num1%3 == 0){
        document.getElementById("r2").innerHTML = "É divisivel por 3"
    }
    else{
        document.getElementById("r2").innerHTML = "Nao é divisivel por 3"
    }


}

function at6(){

    var num1 = parseFloat(document.getElementById("n1").value);
    
    if (num1%2 == 0){
        document.getElementById("r1").innerHTML = "É divisivel por 2";
    }
    else{
        document.getElementById("r1").innerHTML = "Nao é divisivel por 2"
    }
    if(num1%7 == 0){
        document.getElementById("r2").innerHTML = "É divisivel por 7"
    }
    else{
        document.getElementById("r2").innerHTML = "Nao é divisivel por 7"
    }


}

function at7(){

    var num1 = parseFloat(document.getElementById("n1").value);
    var diaDaSemana;
    
    switch(num1){
        case 1:
            diaDaSemana = "Domingo";
        break
        case 2:
            diaDaSemana = "Segunda-Feira";
        break
        case 3:
            diaDaSemana = "Terca-Feira"; 
            break
        case 4:
            diaDaSemana = "Quarta-Feira"; 
            break
        case 5:
            diaDaSemana = "Quinta-Feira"; 
            break
        case 6:
            diaDaSemana = "Sexta-Feira"; 
            break
        case 7:
            diaDaSemana = "Sabado"; 
    }
    document.getElementById("r1").innerHTML = diaDaSemana;
    

}

function at8(){    
    
    var soma = 0;
  for (var i = 0; i <= 20; i+=2) {
    if (i % 2 == 0) {
      soma += i;
      document.getElementById("r1").innerHTML = soma;  
    }
  }
  return soma; 
    
}

function at9(){

    var num1 = parseFloat(document.getElementById("n1").value);
    var aux = '';

    for (i = 0; i < 11; i++){
        if(num1 > 0){
            aux += num1 + "x" + i + " = " + num1 * i + "<br/>"
            document.getElementById("r1").innerHTML = aux;
        }        
        else
        document.getElementById("r1").innerHTML = "Insira um número válido"
    }
}


function at10(){

    var num1 = parseFloat(document.getElementById("n1").value);
    var aux = '';

    for (i = 0; i  11; i++){
        if(num1 > 0){
            aux += num1 + "x" + i + " = " + num1 * i + "<br/>"
            document.getElementById("r1").innerHTML = aux;
        }        
        else
        document.getElementById("r1").innerHTML = "Insira um número válido"
    }
}

}