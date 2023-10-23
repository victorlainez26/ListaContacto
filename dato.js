
let listaContactos;

listaContactos = [
    {NombreApellido: "Mario Lopez"}, 
    {NombreApellido: "Juan Perez"},
    {NombreApellido: "Hugo Correa"}

]

function IngresarContacto(){

    let nuevoContacto = {NombreApellido: "Manuel Torres"}

    listaContactos.push(nuevoContacto)

    
}

IngresarContacto()

console.log(listaContactos)

listaContactos.pop()

console.log(listaContactos)
















