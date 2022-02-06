const portafolio = [];

class Accion {
  constructor(accion) {
    this.nombre = accion.nombre;
    this.costo = accion.costo;
    this.precio = accion.precio;
    this.rendimiento = (((this.precio / this.costo) - 1)*100).toFixed(2)+"%";
  }
}

let entrada = prompt("Quieres agregar una acción a tu portafolio? (Si o No)");

while (entrada === "Si") {
  let nuevoNombre = prompt("Ingresa el nombre de la acción");
  let nuevoCosto = parseInt(prompt("Ingresa a cuanto la compraste"));
  let nuevoPrecio = parseInt(prompt("A que valor cerró el día de hoy?"));
  let accionNueva = new Accion({nombre: nuevoNombre,costo: nuevoCosto,precio: nuevoPrecio});
  portafolio.push(accionNueva);
  entrada = prompt("Quieres agregar una nueva acción a tu portafolio? (Si o No)");
}
console.log(portafolio);