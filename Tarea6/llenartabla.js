    llenartabla();
function llenartabla() {
    var tbody = document.querySelector('#tper tbody');
    tbody.innerHTML = '';

    var nom = JSON.parse(localStorage.getItem('p_nombre')),
        apelli = JSON.parse(localStorage.getItem('p_apellido')),
        ntelefono = JSON.parse(localStorage.getItem('p_telefono'));

    var Ncatnom = nom.length;
    for (var i = 0; i < Ncatnom; i++) {
        var fila = document.createElement('tr');

        var celdanom = document.createElement('td');
        var celdappe = document.createElement('td');
        var celdatel = document.createElement('td');

        var nodotextoNombre = document.createTextNode(nom[i]);
        var nodotextoApellido = document.createTextNode(apelli[i]);
        var nodotextotelefono = document.createTextNode(ntelefono[i]);

        celdanom.appendChild(nodotextoNombre);
        celdappe.appendChild(nodotextoApellido)
        celdatel.appendChild(nodotextotelefono)

        fila.appendChild(celdanom);
        fila.appendChild(celdappe);
        fila.appendChild(celdatel);

        tbody.appendChild(fila);
    }


}