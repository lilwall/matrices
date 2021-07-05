
var t = new tablero(8, 8); 

function init() {

    console.log(t);

    document.getElementById('fecha').textContent =
            dayjs().format('YYYY-MM-DD, HH:mm:ss');

    construirTablero(t);
    actualizar();

    console.log('Aplicación inicializada..');
}

function construirTablero(t) {
    var refSeccion = document.getElementById('seccionTabla');
    if (refSeccion) {
        var tabla = document.createElement('TABLE');
        tabla.setAttribute('class', 'tablero');

        tabla.appendChild(document.createElement('THEAD'));
        var contenido = document.createElement('TBODY');
        contenido.setAttribute("id", "bolitas");
        var fila;
        for (let i = 0; i < t.m(); i++) {
            fila = document.createElement('TR');
            var celda;
            for (let j = 0; j < t.n(); j++) {
                celda = document.createElement('TD');
                var btn = document.createElement('BUTTON');
                btn.setAttribute('type', 'button');
                btn.setAttribute('class', 'btnTablero');
                btn.setAttribute('name', 'posicion');
                btn.setAttribute('valor_fila', i);
                btn.setAttribute('valor_columna', j);

                btn.addEventListener('click', (evt) => {
                    var f = evt.currentTarget.getAttribute('valor_fila');
                    var c = evt.currentTarget.getAttribute('valor_columna');
                    cambiarEstado(f, c);
                    actualizar();
                    cambiarColor(f, c);
                    console.log({f: f, c: c});
                });

                var img = document.createElement('IMG');
                img.setAttribute('id', 'bola');
                img.setAttribute('src', 'css/images/silver-ball (sm).png');
                btn.appendChild(img);

                celda.appendChild(btn);
                fila.appendChild(celda);
            }
            contenido.appendChild(fila);
        }
        tabla.appendChild(contenido);
        refSeccion.appendChild(tabla);
    }
}

function cambiarEstado(i, j) {
       t.estado[i][j] = !t.estado[i][j];
    if (t.estado[i][j]) {
        t.k++;       
    } else {
        t.k--;
    }

}

function actualizar() {
    mostrarDatos(t);
}

function mostrarDatos(t) {
    var refDatos = document.getElementById('datos');
    if (refDatos) {
        while (refDatos.firstChild) {
            refDatos.removeChild(refDatos.firstChild);
        }

        var m = String.fromCharCode(215);
        var p;
        p = document.createElement('P');
        p.textContent = `${t.m()} ${m} ${t.n()}; k = ${t.k}`;
        refDatos.appendChild(p);

        for (let i = 0; i < t.m(); i++) {
            p = document.createElement('P');
            var linea = "";
            for (let j = 0; j < t.n(); j++) {
                linea += t.estado[i][j] + ', ';
            }
            p.textContent = linea;
            refDatos.appendChild(p);
        }
    }
}

function cambiarColor(f, c) {
    var tabla = document.getElementById('bolitas');
    if (t.estado[f][c]) {
        var celda = tabla.rows[f].cells[c];
        var boton = celda.firstChild;
        var imagen = boton.firstChild;
        imagen.setAttribute('src', 'css/images/silver-red-ball (sm).png');
    } else {
        var celda = tabla.rows[f].cells[c];
        var boton = celda.firstChild;
        var imagen = boton.firstChild;
        imagen.setAttribute('src', 'css/images/silver-ball (sm).png');
    }
}

function volverAColorNormal(f, c) {
    var tabla = document.getElementById('bolitas');
    var celda = tabla.rows[f].cells[c];
    var boton = celda.firstChild;
    var imagen = boton.firstChild;
    imagen.setAttribute('src', 'css/images/silver-ball (sm).png');
}

function reiniciar() {
    t.reiniciar();
}

window.onload = init;
