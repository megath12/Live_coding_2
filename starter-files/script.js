// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */


/* En este reto reforzaras tus conocimientos en JavaScript, realizando una llamadas a un API básico, disparando eventos y mostrando los resultados al usuario.

1.- Construye una función fetchAnswer que realice una petición al API https://yesno.wtf/api.
2.- Muestra la respuesta del API en el HTML, en el div con id answer.
3.- Agrega la función fetchAnswer a un eventListener, para que sea disparado cuando se de click al botón.
4.- Limpia la pregunta y la respuesta despues de 5 segundos.
 */


fetch("https://yesno.wtf/api")
.then(res=>res.json())
.then(data=>{console.log(data.answer)})
const ele=document.getElementById("answer");
ele.innerHTML=data.answer;
const boton=document.querySelector("button"); 

boton.addEventListener("click",()=>{

    
    const ele=document.getElementById("answer");
    ele.innerHTML=data.answer
})