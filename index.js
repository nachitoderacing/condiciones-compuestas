
let usuario = prompt('ingresar usuario')
let contaseña = prompt ('igreasr contraseña')
if ((usuario == 'Noe Garcia')&&(contraseña == '123456')) {
    alert ('puedes ingresar')
} else {
    alert ('no puedes ingresar')
}
// 2
let notaexamen = prompt('ingresa tu nota en el examen')
let tp = prompt('ingresa tu nota de los trabajos practicos')
let asistencia = prompt ('fuiste todos los dias')
if ((notaexamen >= 8) && (tp >= 6) || (asistencia ==true)) {
     alert ('felicidades aprobaste') 
} else {
    alert ('desaprobaste')
}