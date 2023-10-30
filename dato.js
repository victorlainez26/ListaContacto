
let listaContactos;

listaContactos = [
    {
        id: "0801199518131" ,
        nombres:"Victor Alejandro",
        apellidos: "Lainez Vasquez",
        telefono: 89891920,
        ubicaciones:{ 
            ciudad: "Tegucigalpa",
            direccion: "Col.Miraflores"}
        
    }

]

function IngresarContacto(id,nombres,apellidos,telefono,ubicaciones){

    let nuevo = { 
        id:id,
        nombres:nombres,
        apellidos:apellidos,
        telefono:telefono,
        ubicaciones:{ 
            ciudad:ciudad,
            direccion: direccion}
    }

    listaContactos.push(nuevo)
}

IngresarContacto()

console.log(listaContactos)

listaContactos.pop()

console.log(listaContactos)


















