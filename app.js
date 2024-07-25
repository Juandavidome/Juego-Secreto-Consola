//Variables
let numerouUsuario = 0;
let intentos =0;
let maximosIntentos = 5;
alert (`Bienvenido, cuentas con ${maximosIntentos} intentos para ganar.`);
let rango = parseInt(prompt(`Ingresa el numero con el que deseas que empiece el rango del juego:`));
let rango2 = parseInt(prompt(`Ingresa el numero con el que deseas que finalice el rango del juego:`));
let numeroSecreto = Math.floor(Math.random()*rango2)+rango;
console.log(numeroSecreto);
while(numerouUsuario != numeroSecreto)
{
    intentos ++;
     numerouUsuario = parseInt(prompt(`Indica un numero del ${rango} al ${rango2} que deseas saber si es el indicado:`));

    //Mensaje de consola
    console.log(typeof(numerouUsuario));

    /*
    Condicional
    */
    if(numerouUsuario == numeroSecreto)
    {
        //Se cumple
        alert (`El numero es correcto es:  ${numerouUsuario} lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'veces'}`);
    }
    else
    {
        if(numerouUsuario > numeroSecreto)
            {
                alert ('El numero que se espera es menor');
            }
        else
            {
                alert ('El numero que se espera es mayor');
            }
    }
    //Salir del bucle forzadamente despues de 3 intentos
    if(intentos == maximosIntentos)
        {
            alert('Llegaste al limite de intentos.');
            break;
        }
}