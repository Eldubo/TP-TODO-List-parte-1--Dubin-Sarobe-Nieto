# TP-TODO-List-parte-1--Dubin-Sarobe-Nieto

Todo list


Links sobre localStorage:

//https://developer.mozilla.org/es/docs/Web/API/Window/localStorage#ejemplo
//https://www.freecodecamp.org/espanol/news/como-usar-localstorage-en-javascript/ 
//https://es.stackoverflow.com/questions/440345/imprimir-todos-los-resultados-de-localstorage 
//https://es.javascript.info/localstorage 
//https://www.forosdelweb.com/f13/contar-cantidad-li-ul-587129/ 
//https://desarrolloweb.com/articulos/995.php --> uso de checkbox, como manipularlo desde js



https://es.stackoverflow.com/questions/240735/error-unexpected-token-h-in-json-at-position-0-at-json-parse-anonymous 

Tener en cuenta que de la manera en que lo estamos resolviendo si se eliminan tareas no van a cambiar su orden 


// https://es.stackoverflow.com/questions/22883 como-hacer-un-checked-al-padre-cuando-selecciono-al-hijo-en-un-checkbox-con-jqu 


// Selecciona todos los checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Añade un evento 'change' a cada checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    // Obtiene el elemento padre del checkbox seleccionado
    const parentElement = this.parentElement;

    // Añade un event listener al elemento padre
    parentElement.addEventListener('click', function() {
      console.log('El elemento padre ha sido clickeado.');
    });

    console.log('Checkbox seleccionado:', this);
    console.log('Elemento padre:', parentElement);
  });
});


// Propiedad slice para array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice 