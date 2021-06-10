var queryString = location.search;
var queryStringObj = new URLSearchParams(queryString);
var categoria = queryStringObj.get('categoria');
var id = queryStringObj.get('id');

function alerta() {
    var opcion = confirm("¿Seguro que desea eliminar el producto?");
    if (opcion == true) {
     //   console.log(id)
     window.location.href = `/productos/destroy/${id}`;

	} 
}