document.addEventListener("DOMContentLoaded", mostrarTareas);

function añadirTarea() {
   let textoTarea = document.getElementById("ingresoUsuario").value.trim();

   if (textoTarea !== "") {
      let cantTareasLS = parseInt(localStorage.getItem('length')) || 0;

      const tarea = {
         texto: textoTarea,
         creadaMomento: new Date().toISOString(),
         completada: false, 
         completadaMomento : null
      };
      console.log(tarea);
      localStorage.setItem('value',cantTareasLS, JSON.stringify(tarea));
      console.log(localStorage.getItem(cantTareasLS));
      document.getElementById("ingresoUsuario").value = "";
      mostrarTareas();
   } else {
      alert("Ingrese algo en el campo para guardar la tarea");
   }
}


function mostrarTareas(filtro = "todas") {
   let ul = document.getElementById("UL");
   ul.innerHTML = "";

   let cantTareasLS = parseInt(localStorage.getItem('length')) || 0;

   if(cantTaresLS){
      for (let i = 0; i < cantTareasLS; i++) {
         let tarea = JSON.parse(localStorage.getItem(i));
         // if (!tareaJSON) continue;
   
   
         if (
            (filtro === "completadas" && !tarea.completada) ||
            (filtro === "pendientes" && tarea.completada)
         ) continue;
   
         let li = document.createElement("li");
         let miInput = document.createElement("input");
         miInput.type = "checkbox";
         miInput.checked = !!tarea.completada;
   
         let texto = document.createTextNode(" " + tarea.texto + ` (creada: ${new Date(tarea.creada).toLocaleString()})`);
   
         li.appendChild(miInput);
         li.appendChild(texto);
         ul.appendChild(li);
      }
   }
   
}

function marcarComoCompletadas (){
         let cantTareasCompletadas = 0;
         const tareasSeleccionadas = identificarTareasSeleccionadas();

         if(tareasSeleccionadas > 0){
            for(i=0;i<tareasSeleccionadas.length;i++){
         
               
                  cantTareasCompletadas++;
                  elementosLi[tareasSeleccionadas[i]].style.textDecoration = "line-through";        
                  elementosLi[tareasSeleccionadas[i]].completadaMomento = new Date().toISOString();
                  elementosLi[tareasSeleccionadas[i]].completada = true;
            }
            cantTareasCompletadas != 0 && alert(cantTareasCompletadas + "tareas se marcaron como completadas");
            
         }else{
            alert("No hay tareas seleccionadas");
         }
         
}

function identificarTareasSeleccionadas() {
   let ul = document.getElementById('UL');
   let elementosLi = ul.getElementsByTagName('li');
   let tareasSeleccionadas = [];
   if(elementosLi != 0){
      for (let i = 0; i < elementosLi.length; i++) {
         let checkbox = elementosLi[i].querySelector('input[type="checkbox"]');
         if (checkbox && checkbox.checked) {
            tareasSeleccionadas.push(i);
         }
      }
   }
  function identificarTareasCompletadas(){ //Hacer
   let ul = document.getElementById('UL');
   let elementosLi = ul.getElementsByTagName('li');
   let tareasCompletadas = [];
   if(elementosLi != 0){
      for (let i = 0; i < elementosLi.length; i++) {
         let checkbox = elementosLi[i].querySelector('input[type="checkbox"]');
         if (checkbox && checkbox.checked) {
            tareasCompletadas.push(i);
         }
      }
   }
   return tareasCompletadas;
  } 

   console.log("Tareas seleccionadas:", tareasCompletadas);
   return tareasCompletadas;
}

function eliminarTareas() {
      let tareasSeleccionadas = identificarTareasSeleccionadas();


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
   const tareasCompletadas = identificarTareasCompletadas(); //Terminar fc
}
function tareaMasRapida() {
   let cantTareasLS = parseInt(localStorage.getItem("length")) || 0;
   let tareaRapida = null;
   let menorDuracion = Infinity;

   for (let i = 0; i < cantTareasLS; i++) {
      let tareaJSON = localStorage.getItem(i);
      if (!tareaJSON) continue;

      let tarea = JSON.parse(tareaJSON);
      if (tarea.completada) {
         let creada = new Date(tarea.creada).getTime();
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