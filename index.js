const express = require("express");
const app = express();

app.use(express.json());
// estructura clave valor
var lista = [{
    id: '1', 
    nombre: 'Sara'
}, {
    id: '2', 
    nombre: 'Salome'
}];

//generar consumo uso de app, web service 

app.GET('/nombre',(req,res)=>{

});