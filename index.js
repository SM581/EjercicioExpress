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

app.get('/nombre', (req, res) => {
    res.json(lista);
});

//consulta a través de un puerto 

app.get('/sara',(req,res)=>{

    res.send ('Sara Gomez, 19 años, actualmente estudiante de desarrollo de software del IST17j');
});
// url /suma
app.get('/suma',(req,resp)=>{

    let n1=1;
    let n2=2;
    let suma = n1+n2;

    resp.send(suma+'');

});

app.get('/suma/:n1',(req,resp)=>{

    let num1 = parseInt(req.params.n1);
    let num2= 5;
    let suma = num1+num2;

    resp.send ('El resultado de la suma es; ' +suma);


});

//pantalla principal con los nombres y relacionar un diferentes URL, y calcular el area y el perimetro de 3 figuras geometricas, hacer la captura mediante perametros
// req con parametro /suma/:n1
// constantes que son locales o globales 
// url con el nombre de la figura 

app.listen(3001, () => {
    console.log('Correcto');
});
