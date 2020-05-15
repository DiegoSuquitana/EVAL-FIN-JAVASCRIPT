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
    var tot = "";
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
    //resetear();
//validacion de resultado en el display 8 caracteres
    res = res.toString();
    if(res.length < 7){
        display.textContent=res;
    }
    else{
        for(i=0 ; i < 8 ; i++){
            tot += res[i];
        }
        display.textContent = tot;
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
        document.onclick = this.eventoTamano;
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
        uno.onmousedown = function(){uno.style.transform = "scale(95%)"}            
        uno.onmouseup = function(){uno.style.transform = "scale(100%)"}
        dos.onmousedown = function(){dos.style.transform = "scale(95%)"}            
        dos.onmouseup = function(){dos.style.transform = "scale(100%)"}
        //eventos
        uno.onclick = function(e){  
            //uno.onmousedown = function(){uno.style.transform = "scale(95%)"} 
            //validacion de caracteres en el disp 
           // uno.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(1);        
                }
            //})
            //uno.onmouseup = function(){uno.style.transform = "scale(100%)"}
        }
        
        dos.onclick = function(e){
            //dos.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(2);        
                }
            //})
        }
        tres.onclick = function(e){
            //tres.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(3);        
                }
            //})
        }
        cuatro.onclick = function(e){
            //cuatro.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(4);        
                }
            //})
        }
        cinco.onclick = function(e){
            //cinco.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(5);        
                }
            //})
        }
        seis.onclick = function(e){
            //seis.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(6);        
                }
            //})
        }
        siete.onclick = function(e){
            //siete.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(7);        
                }
            //})
        }
        ocho.onclick = function(e){
            //ocho.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(8);        
                }
            //})
        }
        nueve.onclick = function(e){
            //nueve.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(9);        
                }
            //})
        }
        cero.onclick = function(e){
            //cero.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaIngreso(0);        
                }
            //})
        }
        punto.onclick = function(e){
            //punto.addEventListener("click",function(){
                if(display.textContent.length < 8){
                    validaPunto(".");       
                }
            //})
        }
        on.onclick = function(e){
            resetear();
        }
        signo.onclick = function(e){
            validaSigno();
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

    //eventos click 2
    eventoTamano: function(event){
        event.onmousedown = function(){uno.style.transform = "scale(95%)"}            
        event.onmouseup = function(){uno.style.transform = "scale(100%)"}

        //alert("evento tamano");
        //if (event.which in onmousedown) {
        //    alert("presion");
            onmousedown = function(){uno.style.transform = "scale(95%)"}; 
            //elemento.style.transform = "95%";
          //  document.querySelectorAll("[class^='teclado']")[0].style.fontSize = "xx-large";
            
        //}else if (event.onmouseup==true) {
        //    alert("soltar");
            elemento.style.transform = "100%"
            //document.querySelectorAll("[class^='teclado']")[0].style.fontSize = "small";
            
        //}
    },
}

calculadora.init();