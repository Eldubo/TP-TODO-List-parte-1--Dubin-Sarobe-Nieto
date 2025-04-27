//DUDAS
//Linea 168 - if (tarea[i].completada) { //No está definida
//Linea 58 - No tacha las tareas ya realizadas (tema del control de formato creo yo) 
//Línea 195 - no encuentra el inputIndicado (No hay forma de que no exista)

document.addEventListener("DOMContentLoaded", () => mostrarTareas());
//localStorage.clear();
function aniadirTarea() {
   let textoTarea = document.getElementById("ingresoUsuario").value.trim();

   if (textoTarea !== "") {
      let cantTareasLS = parseInt(localStorage.getItem('length')) || 0;

      const tarea = {
         texto: textoTarea,
         creadaMomento: new Date().toISOString(),
         completada: false, 
         completadaMomento: null, 
         checkeado: false
      };

      localStorage.setItem((cantTareasLS+1), JSON.stringify(tarea)); //La primer tarea va a tener 1 como "id"
      localStorage.setItem('length', cantTareasLS + 1);
      document.getElementById("ingresoUsuario").value = "";
      mostrarTareas();
   } else {
      alert("Ingrese algo en el campo para guardar la tarea");
   }
}
// querySelector('input[type="checkbox"]').addEventListener('click', function() {
   //let checkbox = querySelector('input[type="checkbox"]'); //Como asignar que sea la que se acaba de chequear
   //Luego de identificarlo hay que obtener el nro en el local storage - Cómo? - y chequearlo 
//}


function mostrarTareas(filtro = "todas") {
   //Se duplica la tarea que está seleccionada y se complet+o --> una vez está completada y en la otra no (a pesar de que el checkbox está tildado)
   let ul = document.getElementById("UL");
   ul.innerHTML = "";
   let cantTareasLS = parseInt(localStorage.getItem('length')) || 0;

   for (let i = 1; i <= cantTareasLS; i++) {
      let tareaJSON = localStorage.getItem(i);
      if (!tareaJSON) continue; //Puede ser q no esté la tarea pq se completó y se borró, así que está bien la verificación


      let tarea = JSON.parse(tareaJSON);

      if (
         (filtro === "completadas" && !tarea.completada) ||
         (filtro === "pendientes" && tarea.completada)
      ) continue;

      let li = document.createElement("li");
      let miInput = document.createElement("input");
      miInput.type = "checkbox";
      miInput.checked = tarea.checkeado;
      miInput.style.textDecoration = "line-through"; //No lo hace
      miInput.setAttribute("id", i);
      /*miInput.onclick = function() {
         alert('Se hizo click en el checkbox');
         const parentElement = this.parentElement; //Es el li
         console.log("parentElement"+parentElement);
         let tareaLS =  JSON.parse(localStorage.getItem(miInput.id)); //El input tiene asignado el id, debería tenerlo el li?
         console.log('tareaLS' + tareaLS);
         tareaLS.chequeado = miInput.checked;
         console.log('tareaLS.checkeado: ' + tareaLS.checkeado); 
         localStorage.setItem(miInput.id, JSON.stringify(tareaLS));
         console.log('Estado actualizado:', tareaLS.checkeado ? 'Chequeada' : 'SinChequear');

     }; */
     
 miInput.addEventListener('click', function() {

   let tareaLS = JSON.parse(localStorage.getItem(miInput.id)); // Convertir a objeto

   if (!tareaLS) return; // Verificar que exista

   // Actualizar el estado de completada

   tareaLS.checkeado = miInput.checked;

   // Guardar los cambios en localStorage

   localStorage.setItem(miInput.id, JSON.stringify(tareaLS));

   console.log('Estado actualizado:', tareaLS.checkeado ? 'Chequeado' : 'SinChequear');

});

      let texto = document.createTextNode(
         ` ${tarea.texto} (creada: ${new Date(tarea.creadaMomento).toLocaleString()})`
      );

      li.appendChild(miInput);
      li.appendChild(texto);
      ul.appendChild(li);
   }
}


/*

Uncaught (in promise) ReferenceError: tareasCompletadas is not defined
at identificarTareasSeleccionadas (script.js:136:41)
at marcarComoCompletadas (script.js:68:44)
at HTMLButtonElement.onclick (index.html:29:48)
identificarTareasSeleccionadas @ script.js:136
marcarComoCompletadas @ script.js:68
onclick @ index.html:29

*/


function identificarTareasSeleccionadas() { //Usar el addEventListener y que liste los checkboxes seleccionados c/ vez que cambian 
   let ul = document.getElementById('UL');
   let elementosLi = ul.getElementsByTagName('li');
   let cantElementosLi = elementosLi.length;

   console.log("1ero de elementosLi "+elementosLi[0]);  //object HTMLCollection


   let tareasLS = parseInt(localStorage.getItem("length")) || 0;
   
   let tareasSeleccionadas = [];

   console.log(tareasLS); //Tira bien
   /*
   if(tareasLS != 0){
      let tareaLS;
      console.log('Entra al if');
      let input;
      for(let i=0; i<cantElementosLi;i++){ //Es lo miso hacer de Li y de LS ya que van a tener la misma cant de tareas
         console.log('<Entra al for' +i);
         input = elementosLi[i].getElementsByTagName("input"); //object HTMLCollection
         console.log('input'+input);
         if(input.checked){ //Hay que hacer referencia a otra cosa aparte
            tareasSeleccionadas.push[i];
         }
      }
      }
  */
      for(let i = 1; i <= tareasLS; i++){
            let tareaJSON = localStorage.getItem(i);
            if (!tareaJSON) continue; //Puede ser q no esté la tarea pq se completó y se borró, así que está bien la verificación
            let tareaLS = JSON.parse(tareaJSON);

            console.log(tareaLS);

         if(tareaLS.checkeado){
            tareasSeleccionadas.push(i);
            console.log(tareaLS);

         }
      }
   
   console.log("Tareas seleccionadas:", tareasSeleccionadas);
      return tareasSeleccionadas;
   }
  function identificarTareasCompletadas(){ 
   let cantTareasLS = parseInt(localStorage.getItem("length")) || 0;
   let tareasCompletadas = [];

   if(cantTareasLS != 0){
   for (let i = 1; i <= cantTareasLS; i++) {
      let tareaJSON = localStorage.getItem(i);
      if (tareaJSON != undefined) continue; //Puede ser q no esté la tarea pq se completó y se borró, así que está bien la verificación
      if (!tareaJSON) continue; //Puede ser q no esté la tarea pq se completó y se borró, así que está bien que haya verificación
      //Hasta donde traba la acción?? Hasta el fin de ese ciclo?
      let tarea = JSON.parse(tareaJSON);

      if (tarea[i].completada) { //No está definida
         tareasCompletadas.push(i);
      }
   }
  
   
   console.log("Tareas completadas:", tareasCompletadas);
      return tareasCompletadas;
  } 
  }
 function marcarComoCompletadas (){
         let cantTareasCompletadas = 0;
         const tareasSeleccionadasEnLi = identificarTareasSeleccionadas(); //--> Entra pq sale el console.log de elementosLi y el  console.log(tareasLS); , pero acá el valor de tareas es undefined
         let ul = document.getElementById('UL');
         let elementosLi = ul.getElementsByTagName('li');
         let elementosInputDentroDeLi = document.querySelectorAll('li input');
         let nroDeTarea;

         if(tareasSeleccionadasEnLi.length > 0){
            for(i=0;i<tareasSeleccionadasEnLi.length;i++){
                  
                  nroDeTarea = tareasSeleccionadasEnLi[i]; //Tiene que coincidir con el id del input guardado en el li, no con la pos de ese li en el array de elementosLi
                  console.log('nroDeTarea ' + nroDeTarea );
                  let inputIndicado = Array.from(elementosInputDentroDeLi).find(input => input.id === nroDeTarea); //Esto devuelve undefined --> por qué???
                 
                     cantTareasCompletadas++;
                     console.log('Input seleccionado:'+ inputIndicado.id);
                     inputIndicado.parentElement.style.textDecoration = "line-through"; //No hace esto!!!!
                     let tareaLS = JSON.parse(localStorage.getItem(inputIndicado.id));
                     
                     //No toma ninguna de estas dos cosas
                     tareaLS.completadaMomento = new Date().toISOString();
                     tareaLS.completada = true;
   
                     localStorage.setItem(inputIndicado.id, JSON.stringify(tareaLS));
                     console.log('Estado actualizado:', tareaLS.completada ? 'Completada' : 'Pendiente'); 
                     console.log('Harario guardado:'+ tareaLS.completadaMomento);
                  
                  
            }
            cantTareasCompletadas != 0 && alert(cantTareasCompletadas + "tareas se marcaron como completadas");
            mostrarTareas();
         }else{
            alert("No hay tareas seleccionadas");
         }
         
}

/*
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);
//Hacer referencia al elemento padre - querySelector('input[type="checkbox"]') no está bien

//!!!!!!!!!!!!!!!!!
//Checkboxes cuando se inicia es vacío y dsp no se cambia --> Debería ir todo adentro de una función para que se active cuando pasa x cosa y ahí seleccione los checkboxes


checkboxes.forEach(checkbox => {
   checkboxes.addEventListener('change', function() {
      console.log('Entra al eventListener');
         if(checkbox.checked){
            const parentElement = this.parentElement; //Es el input o el li
            console.log(parentElement);
            let tareaLS = localStorage.getItem(parentElement.id); //En caso de que sea el li
            tareaLS.checkeado = true;
         }
         const parentElement = this.parentElement;//Toma el elemento padre, que debería ser el li (o es el input?)
         const id = parentElement.id; //Toma el id del li, que coincide con el nombre en el Local Storage  
         
         localStorage.getItem(id);
      
      
    console.log(tarea.checkeado);
 })
})

 */


function eliminarTareas() {
      let tareasSeleccionadas = identificarTareasSeleccionadas();
      let cantTareasEliminadas = 0;
      console.log('tareasSeleccionadas' + tareasSeleccionadas);
      if(tareasSeleccionadas.length > 0){
         for(i=0;i<tareasSeleccionadas.length;i++){
            console.log("Tarea seleccionada"+ tareasSeleccionadas[i]);
            localStorage.removeItem((tareasSeleccionadas[i]));
               cantTareasEliminadas++;
         }
         cantTareasEliminadas != 0 && alert(cantTareasEliminadas + "tareas se marcaron como eliminadas");
         mostrarTareas();
      }else{
         alert("No hay tareas seleccionadas");
      }

}
function eliminarTareasCompletadas(){
   const tareasCompletadas = identificarTareasCompletadas(); 
   if(tareasCompletadas.length > 0){
      for(let i = 0; i < tareasCompletadas; i++){
         localStorage.removeItem((tareasCompletadas[i]+1));
      }
      mostrarTareas();
   }else{
      console.log("No hay tareas completadas");
   }
   
}
function tareaMasRapida() {
   let cantTareasLS = parseInt(localStorage.getItem("length")) || 0;
   let tareaRapida = null;
   let menorDuracion = Infinity;

   for (let i = 1; i <= cantTareasLS; i++) {
      let tareaJSON = localStorage.getItem(i);
      if (!tareaJSON) continue;

      let tarea = JSON.parse(tareaJSON);
      //if (tarea.completada && tarea.completadaMomento) { --> completadaMomento guarda un Date, no un bool
         if (tarea.completada && tarea.completadaMomento) {
         let creada = new Date(tarea.creadaMomento).getTime();
         let finalizada = new Date(tarea.completadaMomento).getTime();
         let duracion = finalizada - creada;

         if (duracion < menorDuracion) {
            menorDuracion = duracion;
            tareaRapida = tarea;
         }
      }
   }

   if (tareaRapida) {
      alert(`Tarea más rápida: "${tareaRapida.texto}"\nDuración: ${(menorDuracion / 1000).toFixed(2)} segundos`);
   } else {
      alert("No hay tareas completadas todavía.");
   }
}