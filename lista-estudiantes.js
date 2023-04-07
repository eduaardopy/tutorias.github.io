const estudiantes = JSON.parse(localStorage.getItem('data'));
console.log(estudiantes); // Verifica el valor almacenado en el localStorage
console.log(typeof estudiantes); // Verifica el tipo de dato del valor almacenado

if(Array.isArray(estudiantes)) {
  const tabla = document.getElementById('tabla-estudiantes');

  data.estudiantes.forEach((estudiante) => {
    const fila = document.createElement('tr');
    const nombre = document.createElement('td');
    nombre.textContent = estudiante.nombre;
    const nControl = document.createElement('td');
    nControl.textContent = estudiante.nControl;
    fila.appendChild(nombre);
    fila.appendChild(nControl);
    tabla.appendChild(fila);
  });
} else {
  console.error('El valor almacenado en localStorage no es un array');
}
