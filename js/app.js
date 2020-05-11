var valor1;
var valor2;
var operacion;

function limpiar(){
    display.textContent = "";
}
function resetear(){
    display.textContent = "0";
    valor1 = 0;
    valor2 = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(valor1) + parseFloat(valor2);
            break;
        case "-":
            res = parseFloat(valor1) - parseFloat(valor2);
            break;
        case "*":
            res = parseFloat(valor1) * parseFloat(valor2);
            break;
        case "/":
            res = parseFloat(valor1) / parseFloat(valor2);
            break;
    }
    resetear();
    display.textContent = res;
}
function validaPunto(ingreso){
    if(ingreso == "."){
        valor1 = '0.';
        
    }else if(ingreso.indexOf('.') == "."){
        alert(".  " +valor1);
        valor1 += '.';
        alert(valor1);
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

var calculadora = {
    init: function(){
        document.onkeypress = this.eventoTamano;
        //variables
        var display = document.getElementById('display');
        var suma = document.getElementById('mas');
        var resta = document.getElementById('menos');
        var multiplicacion = document.getElementById('por');
        var division = document.getElementById('dividido');
        var igual = document.getElementById('igual');
        var punto = document.getElementById('punto');
        var signo = document.getElementById('signo');
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

        //eventos
        uno.onclick = function(e){
            validaIngreso(1);
        }
        dos.onclick = function(e){
            validaIngreso(2);
        }
        tres.onclick = function(e){
            validaIngreso(3);
        }
        cuatro.onclick = function(e){
            validaIngreso(4);
        }
        cinco.onclick = function(e){
            validaIngreso(5);
        }
        seis.onclick = function(e){
            validaIngreso(6);
        }
        siete.onclick = function(e){
            validaIngreso(7);
        }
        ocho.onclick = function(e){
            validaIngreso(8);
        }
        nueve.onclick = function(e){
            validaIngreso(9);
        }
        cero.onclick = function(e){
            validaIngreso(0);
        }
        punto.onclick = function(e){
            //display.textContent = display.textContent + ".";
            validaPunto(".");
        }

        on.onclick = function(e){
            resetear();
        }
        suma.onclick = function(e){
            valor1 = display.textContent;
            operacion = "+";
            limpiar();
        }
        resta.onclick = function(e){
            valor1 = display.textContent;
            operacion = "-";
            limpiar();
        }
        multiplicacion.onclick = function(e){
            valor1 = display.textContent;
            operacion = "*";
            limpiar();
        }
        division.onclick = function(e){
            valor1 = display.textContent;
            operacion = "/";
            limpiar();
        }
        igual.onclick = function(e){
            valor2 = display.textContent;
            resolver();
        }

    },

    eventoTamano: function(event){
        if (event.which==48) {
            alert("aumentos");
            elemento.style.width = "20%";
            document.querySelectorAll("[class^='fondo']")[0].style.fontSize = "xx-large";
            
        }else if (event.which==57) {
            alert("reducir");
            elemento.style.width = "18%"
            document.querySelectorAll("[class^='fondo']")[0].style.fontSize = "small";
            
        }
      },
}

calculadora.init();