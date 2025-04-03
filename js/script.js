document.addEventListener("DOMContentLoaded", mostrarTareas);

function añadirTarea(){
   let textoTarea = document.getElementById("ingresoUsuario").value.trim();

   if (textoTarea !== "") {
      let cantTareasLS = parseInt(localStorage.getItem('length')) || 0;
      
      // Guardar la tarea con una clave única
      localStorage.setItem('value' + cantTareasLS, textoTarea);
      localStorage.setItem('length', cantTareasLS + 1);

      document.getElementById("ingresoUsuario").value = "";
      mostrarTareas();
   } else {
      alert("Ingrese algo en el campo para guardar la tarea");
   }
}

function mostrarTareas() {
   let ul = document.getElementById("UL");
   ul.innerHTML = "";

   let cantTareasLS = parseInt(localStorage.getItem('length')) || 0;

   if (cantTareasLS > 0) {
   for (let i = 0; i < cantTareasLS; i++) {
      let tarea = localStorage.getItem('value' + i);
      

         let li = document.createElement("li");

         let miInput = document.createElement('input');
         miInput.setAttribute('type', 'checkbox');

         let texto = document.createTextNode(" " + tarea);

         li.appendChild(miInput);
         li.appendChild(texto);

         ul.appendChild(li);
      }
   }
}
function marcarComoCompletadas (){
         

         
         ul=document.getElementById('UL');
         elementosLi=el.getElementsByTagName('li');
         
         let cantTareasCompletadas = 0;
         for(i=0;i<elementosLi.length;i++){
         
      if(elementosLi[i].parentNode==ul && elementosLi[i].checked = true) //Hay q agregar algo q haga referencia a que es un input? (o sea, no referirse directo a el elemento en la lista, sino al input- Qué habría que agregar)
        {
         cantTareasCompletadas++;
         elementosLi.style.textDecoration = "line-through";        
         
      }
      if(cantTareasCompletadas == 0) ?? alert("No hay tareas seleccionadas");
      alert(cantTareasCompletadas + "tareas se marcaron como completadas");
      }else{
         alert("Aún no hay tareas");
      }
}

function identificarTareasSeleccionadas(){
   /* let cantTareasLS = parseInt(localStorage.getItem('length')) || 0;
   if (cantTareasLS > 0) {
   for (let i = 0; i < cantTareasLS; i++) {
      let tarea = localStorage.getItem('value' + i);   }
      
      No me interesa si hay tareas en el LS, sino que me interesa si hay cargadas en la ul
      */ 
      ul=document.getElementById('UL');
      elementosLi=el.getElementsByTagName('li');
      
      let tareasCompletadas = [];
      for(i=0;i<elementosLi.length;i++){
      tareasComplatadas.add(i);
   if(elementosLi[i].parentNode==ul && elementosLi[i].checked = true) //Hay q agregar algo q haga referencia a que es un input? (o sea, no referirse directo a el elemento en la lista, sino al input- Qué habría que agregar)
     {
      }
}

function eliminarTareas() {
   let ul = document.getElementById("UL");
   let cantTareasLS = parseInt(localStorage.getItem('length')) || 0;
   if (cantTareasLS > 0) {

   }else{
      alert("Aún no hay tareas");
   }
   localStorage.clear();
   localStorage.setItem('length', 0);
   ul.innerHTML = "";
}
