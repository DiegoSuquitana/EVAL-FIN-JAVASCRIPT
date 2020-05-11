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
function validaPunto(){
    if(valor1 == 0){
        alert(valor1);
        valor1 = '0.';
        alert(valor1);
        
    }else if(valor1.indexOf('.') == -1){
        alert(valor1);
        valor1 += '.';
        alert(valor1);
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
            display.textContent = display.textContent + "1";
        }
        dos.onclick = function(e){
            display.textContent = display.textContent + "2";
        }
        tres.onclick = function(e){
            display.textContent = display.textContent + "3";
        }
        cuatro.onclick = function(e){
            display.textContent = display.textContent + "4";
        }
        cinco.onclick = function(e){
            display.textContent = display.textContent + "5";
        }
        seis.onclick = function(e){
            display.textContent = display.textContent + "6";
        }
        siete.onclick = function(e){
            display.textContent = display.textContent + "7";
        }
        ocho.onclick = function(e){
            display.textContent = display.textContent + "8";
        }
        nueve.onclick = function(e){
            display.textContent = display.textContent + "9";
        }
        cero.onclick = function(e){
            display.textContent = display.textContent + "0";
        }
        punto.onclick = function(e){
            validaPunto();
            display.textContent = display.textContent + ".";
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