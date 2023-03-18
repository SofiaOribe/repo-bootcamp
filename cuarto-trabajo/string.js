let nombre = "Sofia";
let apellido = "Oribe";

let estudiante = nombre.concat(" ", apellido);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let cantLetras = estudiante.length;

let primeraLetraN = nombre.charAt(0);

let ultimaLetraA = apellido[apellido.length - 1];

let eliminarEspacio = estudiante.replace(/ /g, '');

let existe = estudiante.includes(nombre);
