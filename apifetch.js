let mostrar = document.querySelector("#boton");

let informacion = document.getElementById("contenido");


mostrar.addEventListener('click', () => {

    fetch('dato.json')
        .then(Response => Response.json())
        .then(Data => {

            //Para "limpiar la tabla" -  inicializa en cero el inner.
            informacion.innerHTML = ""


            for (let index of Data) {

                informacion.innerHTML += `
                <tr>
                    <th scope="row">${index.id}</th>
                    <td>${index.nombre}</td>
                    <td>${index.edad}</td>
                    <td>${index.país}</td>
                    <td>${index.correo}</td>
                    <td>${index.celular}</td>
                <tr>`

            }
        })
}
)