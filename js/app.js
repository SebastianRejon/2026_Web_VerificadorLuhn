const btnValdiar=document.getElementById("validate-btn").addEventListener("click",extraerDatos);
const numeros=document.getElementById("cardNumber");
//
function validarLuhn(cadena){
    if (cadena.length<16){
        return false;
    }
    // valido si es cadena alfanumerica unicamente
    if (/^\d+$/.test(cadena)){
        let numeros=[];
        let sum=0;
        for (i=0;i<cadena.length; i++){
            numeros.push(parseInt(cadena[i]));
        }
        // itero haciendo la comprobacion de las posiciones pares
        for (i=0;i<numeros.length; i++){
            if (i%2===0){
                if (numeros[i]*2>9){
                        sum=sum+numeros[i]*2-9;
                    }else{
                        sum=sum+numeros[i]*2
                    }
                }else{
                    sum=sum+numeros[i];
                }  
            }
            return sum%10===0;
        }
        return false;
    }
//
function extraerDatos(){
    // extraigo los string de los inputs y mando a validador
    const mensaje=document.getElementById("result");
    const datos=document.querySelectorAll("input");
    let cadena="";
    datos.forEach(input => {
        cadena+=input.value;
    });
    // proceso y actualizo con resultado
    if (validarLuhn(cadena)){
        mensaje.textContent="Tarjeta Valida";
    }else{
        mensaje.textContent="Número Tarjeta Erroneo!";
    }
    // refresco de pantalla para limpiar
    setTimeout(function(){
        location.reload();
    },3000);
}
