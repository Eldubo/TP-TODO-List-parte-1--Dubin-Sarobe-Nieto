
document.addEventListener("DOMContentLoaded", () => mostrarTareas());


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

      localStorage.setItem(cantTareasLS, JSON.stringify(tarea));
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
   let ul = document.getElementById("UL");
   ul.innerHTML = "";
   let cantTareasLS = parseInt(localStorage.getItem('length')) || 0;

   for (let i = 0; i < cantTareasLS; i++) {
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
      miInput.checked = tarea.completada;
      miInput.setAttribute("id", i);

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
async function marcarComoCompletadas (){
         let cantTareasCompletadas = 0;
         const tareasSeleccionadasEnLi = identificarTareasSeleccionadas(); //--> Entra pq sale el console.log de elementosLi y el  console.log(tareasLS); , pero acá el valor de tareas es undefined

         if(tareasSeleccionadas > 0){
            for(i=0;i<tareasSeleccionadas.length;i++){
         
               
                  cantTareasCompletadas++;
                  elementosLi[tareasSeleccionadasEnLi[i]].style.textDecoration = "line-through";        
                  localStorage.getItem(tareasSeleccionadasEnLi[i]).completadaMomento = new Date().toISOString();
                  localStorage.getItem(tareasSeleccionadasEnLi[i]).completada = true;
            }
            cantTareasCompletadas != 0 && alert(cantTareasCompletadas + "tareas se marcaron como completadas");
            
         }else{
            alert("No hay tareas seleccionadas");
         }
         
}


let checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);
//Hacer referencia al elemento padre - querySelector('input[type="checkbox"]') no está bien

//!!!!!!!!!!!!!!!!!
//Checkboxes cuando se inicia es vacío y dsp no se cambia --> Debería ir todo adentro de una función para que se active cuando pasa x cosa y ahí seleccione los checkboxes


checkboxes.forEach(checkbox => {
   checkboxes.addEventListener('change', function() {
      console.log('Entra al eventListener');
         if(checkbox.checked){
            const parentElement = this.parentElement;
            console.log(parentElement);
            localStorage.getItem('');
         }
         const parentElement = this.parentElement;//Toma el elemento padre, que debería ser el li (o es el input?)
         const id = parentElement.id; //Toma el id del li, que coincide con el nombre en el Local Storage  
         
         localStorage.getItem(id);
      
      
    console.log(tarea.checkeado);
 })
})

 


 function identificarTareasSeleccionadas() { //Usar el addEventListener y que liste los checkboxes seleccionados c/ vez que cambian 
   let ul = document.getElementById('UL');
   let elementosLi = ul.getElementsByTagName('li');
   let cantElementosLi = elementosLi.length;

   console.log("1ero de elementosLi "+elementosLi[0]);  //object HTMLCollection


   let tareasLS = parseInt(localStorage.getItem("length")) || 0;
   
   let tareasSeleccionadas = [];

   console.log(tareasLS); //Tira bien
   
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
      }/*
      for(let i = 0; i < tareasLS; i++){
         tareaLS = localStorage.getItem(i);
         console.log(tareaLS);

         if(elementosLi[i].checked){//Estoy preguntando si el elemento del li esta chequeado --> tal vez habria q hacer referencia al input primero
            tareaLS[i].checkequedo = true;
            tareasSeleccionadas.push(i);
            console.log(tareaLS);

         }
      }
      */

   
   console.log("Tareas seleccionadas:", tareasSeleccionadas);
      return tareasSeleccionadas;
   }
  function identificarTareasCompletadas(){ 
   let ul = document.getElementById('UL');
   let elementosLi = ul.getElementsByTagName('li');
   let cantTareasLS = parseInt(localStorage.getItem("length")) || 0;
   let tareasCompletadas = [];

   if(tareasLS != 0){
   for (let i = 0; i < cantTareasLS; i++) {
      let tareaJSON = localStorage.getItem(i);
      if (!tareaJSON) continue; //Puede ser q no esté la tarea pq se completó y se borró, así que está bien la verificación
      let tarea = JSON.parse(tareaJSON);

      if (tarea[i].completada) {
         tareasCompletadas.push(i);
      }
   }
  
   
   console.log("Tareas completadas:", tareasCompletadas);
      return tareasCompletadas;
  } 
  }
function eliminarTareas() {
      let tareasSeleccionadas = identificarTareasSeleccionadas();
      let cantTareasEliminadas = 0

      if(tareasSeleccionadas > 0){
         for(i=0;i<tareasSeleccionadas.length;i++){
            console.log(tareasSeleccionadas[i]);
            localStorage.removeItem(tareasSeleccionadas[i]);
               cantTareasEliminadas++;
         }
         cantTareasCompletadas != 0 && alert(cantTareasCompletadas + "tareas se marcaron como completadas");
         
      }else{
         alert("No hay tareas seleccionadas");
      }

}
function eliminarTareasCompletadas(){
   const tareasCompletadas = identificarTareasCompletadas(); 
   for(let i = 0; i < tareasCompletadas; i++){
      localStorage.removeItem(tareasCompletadas[i]);
   }
}
function tareaMasRapida() {
   let cantTareasLS = parseInt(localStorage.getItem("length")) || 0;
   let tareaRapida = null;
   let menorDuracion = Infinity;

   for (let i = 0; i < cantTareasLS; i++) {
      let tareaJSON = localStorage.getItem(i);
      if (!tareaJSON) continue;

      let tarea = JSON.parse(tareaJSON);
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