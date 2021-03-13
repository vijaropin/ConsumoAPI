
var request = new XMLHttpRequest(); /* Nuevo requerimiento de informacion al servidor para guardar en la variable request*/
request.open('GET','https://rickandmortyapi.com/api/character', true);/*Utilizamnos los Metodos Open. GET, para solicitar y/o abrir la Url, con respuesta TRUE, para que se cumpla la funcion de manera asincrona */
request.onload = function (){ /* para llamar la función de JavaScript una vez sea cargada la página*/
    var data = JSON.parse(this.response); /* Creamos la variable data, para traer almacenar la respuesta en Formato Json*/ 
    var tamano = data['results'].length;/* Creando variable tamaño, para saber la totalidad de posiciones en nuestro arreglo */



    let html = ''; /* creamos la variable html, vacia para crearla dinamica, o adaptable a los cambios de la informacion*/
    var genero = '';/* creamos nuestra variable genero, Vacia, dinamica y complementarla en la variable sobre la informacion que corresponde a la clave*/
    




    if(request.status >= 200 && request.status < 400){ /*Codigos de estado, mayor a 200 hasta 400 y esta cargando pagina y buscando la informacion */



        for (let index = 0; index < tamano ; index++) {/*Recorre la longitud de la cadena del objeto */ 
            if(data['results'][index]['gender'] == 'Male'){ /*Utilizamos la funcion If, para convertir (traducir) la informacion del arreglo, especificando clave, valor*/
                genero = 'Hombre';
            }else{
                genero = 'Hombre';
            }

            /*Especificaciones del formato index, para organizar la informacion de los arreglos*/
            html += "<article class='character m-1 p-1'>" +
                        "<header><h2>" + data['results'][index]['name'] + "</h2></header>" +
                        "<img src='" + data['results'][index]['image'] + "'>" +
                        "<div class='info-character'>" +
                            "<p> <b>Genero:</b> " + genero + "</p>" +
                            "<p> <b>Especie:</b> " + data['results'][index]['species'] + "</p>" +
                        "</div>" +
                    "</article>" ;
        }
        document.getElementById('personajes').innerHTML = html; /*Se imprimen los personajes en la section id="personajes* del html*/
    }else{
        alert('Error de pagina codigo: ' + request.status);/* en caso contrario Arroja el codigo de estado o error (entre 200 y 400)*/
    }
}
request.send();   /*finaliza la solicitud de respuesta*/