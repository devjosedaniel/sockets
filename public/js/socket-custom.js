var socket = io();
// escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function() {
    console.log('Se disparo el callback');
});
// escuhcar informacion
socket.on('enviarMensaje', function(data) {
    console.log(data);
})