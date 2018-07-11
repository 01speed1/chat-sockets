var socket = io();

var params = new URLSearchParams(window.location.search);


//socket para ver las salas 
socket.on('salasCreadas', (salas)=> {
    console.log(salas);
})