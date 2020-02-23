window.onload = function(e) {
    const usuario = localStorage.getItem ('usuario');
    if(usuario) {
        document.getElementById('demo').innerHTML = usuario;
            } else  {
                localStorage.setItem('usuario', 'gama');
                document.getElementById('demo').innerHTML = 'não foi encontrado ninguem';
            }


}
