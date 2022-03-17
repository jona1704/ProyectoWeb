window.addEventListener('DOMContentLoaded', function(){
    let boton = document.querySelector('#enviar');
    boton.addEventListener("click", desplegar);
});

function desplegar(event){
    let valor = document.getElementById('info').value;
    if(valor.length === 0){
        let msg = document.querySelector('#mensaje');
        msg.innerHTML = 'Ingrese contenido';
    } else{
        let contenido = document.getElementById('contenido');
        contenido.innerHTML = valor;
        // alert(valor.value);
    }
    
    event.preventDefault();
}