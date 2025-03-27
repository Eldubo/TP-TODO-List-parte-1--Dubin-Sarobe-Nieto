function añadirTarea(){
   let textoTarea = document.getElementById("ingresoUsuario").value;
   console.log(textoTarea);
   if(textoTarea != ""){
      localStorage.setItem("Tarea1", textoTarea);
      mostrarTareas();
   }else{
      alert("Ingrese algo en el campo para guardar la tarea");
   }
    
}
function mostrarTareas() {
   document.getElementById("UL").appendChild(li);
   let cantTareasLS = localStorage.getItem('length');
   for(i = 0; i<cantTareasLS; i++)
   {
      let tarea = localStorage.getItem('value'+i);

      const miInput = document.createElement('input');
      miInput = miInput.setAttribute('type', 'checkbox');
      miInput.appendChild(tarea);

      var li = document.createElement("li");
      var t = document.createTextNode(textoTarea);
      li.appendChild(t);
      divLista.appendChild(li);
      // Cómo mostrar la tarea? Ya la tengo guardada en tarea y tengo el item en la lista creado


         //document.getElementById("myCheckBox").checked = true
   }
}
