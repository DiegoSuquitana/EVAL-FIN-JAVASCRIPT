var valor1 = 0;
var valor2 = 0;
var valorA = 0;
var valorNum = "";
var valorOpe = "";

var cont = 0;
var ban = 0;
var ban2 = 0;
var operacion;
var igual = "";

var resultado = 0;

var res = 0;
var tot = "";
    

function limpiar(){
    display.textContent = "";
}
function resetear(){
    display.textContent = "0";
    valor1 = 0;
    valor2 = 0;
    valorA = 0;
    valorNum = "";
    valorOpe = "";

    cont = 0;
    ban = 0;
    operacion = "";
    igual = "";
    res = 0;
    tot = "";
}

function OperacionCadenas(){
    var j = 0;
    for (var i=0; i < valorNum.length; i++) {
        alert("i: " + i);
        alert("valorNum: " + valorNum[i]);
            
        alert("j: " + j);
        
            alert("valorOpe: " + valorOpe[j]);
            if(i==0 && j==0){
                alert("if");
                switch(valorOpe[j]){
                    case "+":
                        res = parseFloat(valorNum[i]) + parseFloat(valorNum[i+1]);
                        alert("res: " + res);
                        i++;
                        j++;
                        break;
                    case "-":
                        res = parseFloat(valorNum[i]) - parseFloat(valorNum[i+1]);
                        alert("res: " + res);
                        i++;
                        j++;
                        break;
                    case "*":
                        res = parseFloat(valorNum[i]) * parseFloat(valorNum[i+1]);
                        alert("res: " + res);
                        i++;
                        j++;
                        break;
                    case "/":
                        res = parseFloat(valorNum[i]) / parsefloat(valorNum[i+1]);
                        alert("res: " + res);
                        i++;
                        j++;
                        break;
                }
            }else{
                alert("else");
                switch(valorOpe[j]){
                    case "+":
                        res = res + parseFloat(valorNum[i]);
                        alert("res: " + res);
                        j++;
                        break;
                    case "-":
                        res = res - parseFloat(valorNum[i]);
                        alert("res: " + res);
                        j++;
                        break;
                    case "*":
                        res = res * parseFloat(valorNum[i]);
                        alert("res: " + res);
                        j++;
                        break;
                    case "/":
                        res = res / parseFloat(valorNum[i]);
                        alert("res: " + res);
                        j++;
                        break;
                }
            }        
     }
}
function resolver(){  
    
    alert("ingreso de cont: " + cont);
    alert("ingreso de ban: " + ban);

    
        if(cont > 0 && ban == 1){ 
            alert("cont");
            switch(operacion){
                case "+":
                    res = parseFloat(res) + valor2;
                    break;
                case "-":
                    res = parseFloat(res) - valor2;
                    break;
                case "*":
                    res = parseFloat(res) * valor2;
                    break;
                case "/":
                    res = parseFloat(res) / valor2;
                    break;
            }
        }
        
    
    if(ban > 1 && cont == 0){
        alert("ban");
        valorNum += display.textContent;
        OperacionCadenas();
        /*
        //alert("res: "+ res);
        valor2 = parseFloat(display.textContent); 
        switch(operacion){
            case "+":
                res = valorA + valor2;
                break;
            case "-":
                res = valorA - valor2;
                break;
            case "*":
                res = valorA * valor2;
                break;
            case "/":
                res = valorA / valor2;
                break;
        }
        //ban = 0;
        //cont = 0;*/
    }
    alert("cont+1: " + cont + 1);
    var acum = cont + 1;
    alert("acum: " + acum);
    alert("ban: " + ban);
    alert("ban: " + ban + " es igual a acum: " + acum);
    if(acum == ban){
        //else{
            alert("operaciones");
            valor2 = parseFloat(display.textContent);
            switch(operacion){
                case "+":
                    res = valor1 + valor2;
                    break;
                case "-":
                    res = valor1 - valor2;
                    break;
                case "*":
                    res = valor1 * valor2;
                    break;
                case "/":
                    res = valor1 / valor2;
                    break;
            }
            cont = 0;        
        }
    
    //resetear();
//validacion de resultado en el display 8 caracteres
    res = res.toString();
    if(res.length < 7){
        display.textContent = res;
    }
    else{
        for(i=0 ; i < 8 ; i++){
            tot += res[i];
        }
        display.textContent = tot;
        res = tot;
    }
    
}
function validaPunto(ingPunto){
//validaciones al dar click en el punto(.)
    if(display.textContent == 0){
        display.textContent = '0.';
        punto.disabled = "true";
    }
    else
    { 
        if(display.textContent == "."){
            display.textContent = '0.';
            punto.disabled = "true";
        }
        else
        { 
            if(display.textContent.indexOf(".") == -1)
            {
                display.textContent += ingPunto;
            }
                
        }        
    }
}
function validaIngreso(ingreso){
 //eliminar el 0 que se encuentra por defecto en el display  
    if(display.textContent == "0"){
        display.textContent = ingreso;
    }
    else{
        display.textContent += ingreso;
    }
}
function validaSigno(){
//validacion para el signo
    if(display.textContent == 0){
        display.textContent = 0;
    }
    else{
        num=Number(display.textContent);
        num = -num;
        x = String(num);
        display.textContent = x;
    }
}

var calculadora = {
    init: function(){
        
        //variables
        var display = document.getElementById('display');
        var suma = document.getElementById('mas');
        var resta = document.getElementById('menos');
        var multiplicacion = document.getElementById('por');
        var division = document.getElementById('dividido');
        var igual = document.getElementById('igual');
        var punto = document.getElementById('punto');
        var signo = document.getElementById('sign');
        var on = document.getElementById('on');
        var uno = document.getElementById("1");
        var dos = document.getElementById('2');
        var tres = document.getElementById('3');
        var cuatro = document.getElementById('4');
        var cinco = document.getElementById('5');
        var seis = document.getElementById('6');
        var siete = document.getElementById('7');
        var ocho = document.getElementById('8');
        var nueve = document.getElementById('9');
        var cero = document.getElementById('0');

        //eventos de click 
        var tecla = document.querySelectorAll('.tecla');
        for(var i=0; i< tecla.length ; i++){
            tecla[i].addEventListener('mousedown',function(){this.style.transform="scale(95%)"})
        }
        for(var i=0 ; i < tecla.length ; i++){
            tecla[i].addEventListener('mouseup',function(){this.style.transform="scale(100%)"})
        }
        
        //eventos
        uno.onclick = function(e){  
            //validacion de caracteres en el display 
                if(display.textContent.length < 8){
                    validaIngreso(1);   
                }
        }
        
        dos.onclick = function(e){
                if(display.textContent.length < 8){
                    validaIngreso(2);    
                }
        }
        tres.onclick = function(e){
                if(display.textContent.length < 8){
                    validaIngreso(3);        
                }
        }
        cuatro.onclick = function(e){
                if(display.textContent.length < 8){
                    validaIngreso(4);        
                }
        }
        cinco.onclick = function(e){
                if(display.textContent.length < 8){
                    validaIngreso(5);        
                }
        }
        seis.onclick = function(e){
                if(display.textContent.length < 8){
                    validaIngreso(6);        
                }
        }
        siete.onclick = function(e){
                if(display.textContent.length < 8){
                    validaIngreso(7);        
                }
        }
        ocho.onclick = function(e){
                if(display.textContent.length < 8){
                    validaIngreso(8);        
                }
        }
        nueve.onclick = function(e){
                if(display.textContent.length < 8){
                    validaIngreso(9);        
                }
        }
        cero.onclick = function(e){
                if(display.textContent.length < 8){
                    validaIngreso(0);        
                }
        }
        punto.onclick = function(e){
                if(display.textContent.length < 8){
                    validaPunto(".");       
                }
        }
        on.onclick = function(e){
            resetear();
        }
        signo.onclick = function(e){
            validaSigno();
        }
        suma.onclick = function(e){
            valor1 = parseFloat(display.textContent);
            operacion = "+";
            limpiar();
            ban ++;
            valorA = valor1 + valorA;
            //alert("ban: " + ban);
            valorNum += valor1;
            valorOpe += operacion;
            alert("valorNum: " + valorNum);
            alert("valorOpe: " + valorOpe);
        }
        resta.onclick = function(e){
            valor1 = parseFloat(display.textContent);
            operacion = "-";
            limpiar();
            
            if(ban >= 1){
                valorA = valorA - valor1;
                ban ++;
            }
            else{
                valorA = valor1 - valorA;
                ban ++;
            }
            valorNum += valor1;
            valorOpe += operacion;
            alert("valorNum: " + valorNum);
            alert("valorOpe: " + valorOpe);
        }
        multiplicacion.onclick = function(e){
            valor1 = parseFloat(display.textContent);
            operacion = "*";
            limpiar();
            if(ban >= 1){
                valorA = valorA * valor1;
                ban ++;
            }
            else{
                valorA = valor1 * 1;
                ban ++;
            }
            valorNum += valor1;
            valorOpe += operacion;
            alert("valorNum: " + valorNum);
            alert("valorOpe: " + valorOpe);
        }
        division.onclick = function(e){
            valor1 = parseFloat(display.textContent);
            operacion = "/";
            limpiar();
            if(ban >= 1){
                valorA = valorA / valor1;
                ban ++;
            }
            else{
                valorA = valor1 / 1;
                ban ++;
            }
            valorNum += valor1;
            valorOpe += operacion;
            alert("valorNum: " + valorNum);
            alert("valorOpe: " + valorOpe);
        }
        igual.onclick = function(e){
            
            resolver();
            //alert("cont : " + cont);
            cont ++;
            //alert("cont : " + cont);
           
        }

    },

}

calculadora.init();