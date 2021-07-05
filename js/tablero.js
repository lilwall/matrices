
function tablero(m, n) {
    
    this.cambiarEstado = (i, j) => {
        var cambiarBola = document.getElementById('bola');
        this.estado[i][j] = !this.estado[i][j];
        if (this.estado[i][j]) {
            this.k++;
            cambiarBola.setAttribute('src','css/images/silver-red-ball (sm).png');
        } else {
            this.k--;
            cambiarBola.setAttribute('src','css/images/silver-ball (sm).png');
        }
    };

    this.reiniciar = () => {
        this.estado = Array(m).fill(null).map(x => Array(n).fill(false));
        this.k = 0;
    };

    this.m = () => {
        return this.estado.length;
    };

    this.n = () => {
        return this.estado[0].length;
    };

    this.estado = Array(m).fill(null).map(x => Array(n).fill(false));
    this.k = 0;
}
