import {Controller, Delete,Request, Get, Post, Put, Headers, Query, Param, Body,Response} from '@nestjs/common';
import { AppService } from './app.service';
import * as Joi from '@hapi/joi';
import bodyParser = require('body-parser');
import { response } from 'express';
import { callbackify } from 'util';
//@Controller(SegmentoInicial)
@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello-world') // metodo http get
  helloWorld(): string {
    return "Hello World";
  }
  @Get('/adivina')
  adivina(@Headers() header):string{
    console.log('Headers: ',header);
    const numeroRandomico = Math.round(Math.random()*10);
    const numeroDeCab = Number(header.numero);
    if(numeroDeCab == numeroRandomico ){
      return "ok";
    } else {
      return ":(";
    }


    /*
    const nombre = 'Sergio';
    const edad:number = 29;
    const sueldo:number = 1.0;
    const casado:boolean = false;
    const hijos:null =null;
    const alas = undefined;*/

    return 'OK';
  }



  @Post('/hola-mundo') // metodo http post
  holaMundo(){
    return "Hola mundo";
  }
  @Put('/ola-mundo')
  olaMundo(){
    return "Ola mundo";
  }
  @Delete('/hello-welt')
  helloWalt(){
    return "Hello Welt";
  }
  @Get('/ciudad/:idCiudad')
  ciudad(@Param() parametrosRuta){

    switch (parametrosRuta.idCiudad.toLowerCase()) {
      case 'quito':
        return 'Que fueff';
      case 'guayaquil':
        return 'Que maah ñañoshh';
      default :
        return 'Buenas Tardes';

    }
    return "ok"
  }
  @Get('/consultar')
  consultar(@Query() queryParams){
    console.log(queryParams);
    if(queryParams.nombre=='sergio'){
      return 'Hola ${queryParams.nombre}'
    }else{
      return 'Hola extraño'
    }
  }
  @Post('/saludar')
  saludar(@Body() cuerpo){
    console.log(cuerpo);
  }

  @Post('/registroComida')
  registroComida(
      @Body() parametrosCuerpo,
      @Response() response
      //@Request() request
  ){
    if(parametrosCuerpo.nombre && parametrosCuerpo.cantidad){
      //return 'Registro creado';
      const cantidad=Number(parametrosCuerpo.cantidad);
      if(cantidad>1){
        response.set('Premio','Fanesca');
      }

      return response.send({mensaje:'Registro Creado'});
    }else {
      //return 'ERROR, no envía nombre o cantidad';
      return  response.status(400)
          .send({
            mensaje: 'ERROR, no envia nombre o cantidad',
            error:400
          });
    }
  }
  @Get('/semilla')
    semilla(
        @Request() request,
        @Response() response
    ) {
        console.log(request.cookies);
        const cookies = request.cookies; // JSON

        const esquemaValidacionNumero = Joi
            .object()
            .keys({
                numero: Joi.number().integer().required()
            });

        const objetoValidacion = {
            numero: cookies.numero
        };
        const resultado = Joi.validate(objetoValidacion,
            esquemaValidacionNumero);

        if (resultado.error) {
            console.log('Resultado: ', resultado);
        } else {
            console.log('Numero valido');
        }

        const cookieSegura = request.signedCookies.fechaServidor;
        if(cookieSegura){
            console.log('Cookie segura');
        }else{
            console.log('No es valida esta cookie');
        }

        if (cookies.micookie) {

            const horaFechaServidor = new Date();
            const minutos = horaFechaServidor.getMinutes();
            horaFechaServidor.setMinutes(minutos + 1);

            response.cookie(
                'fechaServidor',      // NOMBRE (key)
                new Date().getTime(),  // VALOR  (value)
                {    // OPCIONES
                    // expires: horaFechaServidor
                    signed: true
                }
            );

            return response.send('ok');
        } else {
            return response.send(':(');
        }

    }

    @Get('/setNombre')
    setNombre(@Query() query,@Response() response){
      if(!isNaN(query.numero1) && !isNaN(query.numero2)){
        const resultado = Number(query.numero1) - Number(query.numero2);
        console.log("Resultado de la resta es: "+resultado);
        response.cookie('nombreUsuario',query.nombre);
        const respuesta = {
          'nombreDeUsuario': query.nombre,
          'resultado': resultado
        }
        return response.send(respuesta);
      }
      else{
        return response.send('Error');
      }
    }

    @Get('/inicio')
    inicio(
      @Response() res
    ){
      return res.render('inicio.ejs');
    }

}
function holaMundo() {
  console.log('Hola mundo'); 
 }
 const respuestaholaMundo = holaMundo();
 console.log('Resp hola mundo: ',respuestaholaMundo);
 function suma(a:number,b:number):number{
   return a+b;
 }
 const respuestaSuma = suma(2,2);
 console.log('Resp suma: ',respuestaSuma);
//Condicionales
//Truty ->true
//Folsy ->false

if(true) // Truty
{
  console.log('Verdadero');
}else{
  console.log('False');
}

if(false) // Folsy
{
  console.log('Verdadero');
}else{
  console.log('False');
}

if("") // Folsy
{
  console.log('Verdadero ""');
}else{
  console.log('False ""');
}
if("a") // Truty
{
  console.log('Verdadero "a"');
}else{
  console.log('False "a"');
}

if(0) // Folsy
{
  console.log('Verdadero 0');
}else{
  console.log('False 0');
}

if("0") // Truty
{
  console.log('Verdadero "0"');
}else{
  console.log('False "0"');
}

if(-1) // Truty
{
  console.log('Verdadero -1');
}else{
  console.log('False -1');
}
if(1) // Truty
{
  console.log('Verdadero 1');
}else{
  console.log('False 1');
}

if(undefined) // Folsy
{
  console.log('Verdadero undef');
}else{
  console.log('False undef');
}

if({}) // Truty
{
  console.log('Verdadero');
}else{
  console.log('False');
}
const arreglo = [1,'A',true,null,{},[]];
const arregloNumero = [1,2,3,4,5,6,7,8];

//1) Impriman en consola todos los elementos
const arregloNumeroForEach = [1,2,3,4,5,6,7,8];
const rForEach = arregloNumeroForEach.forEach(n=>console.log(`${n}`));
console.log(`RESPUESTA FOREACH ${rForEach}`);
//2) Sumen 2 a los pares y 1 a los impares
const arregloNumerosMap = [1,2,3,4,5,6,7,8];
const rMap = arregloNumerosMap
    .map(
      (valorActual)=>{
        const esPar = valorActual%2==0;
        if(esPar){
          return valorActual+2;
        }
        else{
          return valorActual+1;
        }
         
      }
    );
console.log( `RESPUESTA MAP: ${rMap}`);
//3) Encuentren si hay el numero 4
const arregloNumerosFind = [1, 2, 3, 4, 5, 6];

const rFind = arregloNumerosFind
    .find( // CONDICION para devolver ese ELEMENTO
        (valorActual)=>{
            return valorActual == 4;
        }
    );
console.log(`Respuesta FIND: ${rFind}`);

//4) Filtren los numeros menores a 5
const arregloNumerosFilter = [1, 2, 3, 4, 5, 6];

const rFilter = arregloNumerosFilter
    .filter(  // CONDICION TRUE  -> Agrega al arreglo
        //       CONDICION FALSA -> Se omite del arreglo
        (valorActual)=>{
            return valorActual < 5;
        }
    );
console.log(`Respuesta FILTER: ${rFilter}`);

//5) Todos los valor positivos
const arregloNumerosEvery = [1, 2, 3, 4, 5, 6];
const every = arregloNumerosEvery
              .every(
                (valorActual)=>{
                  return valorActual > 0
                }
              )

console.log(`Respuesta EVERY: ${every}`);
//6) Algun valor es menor a 2
const arregloNumerosSome = [1, 2, 3, 4, 5, 6];

const some = arregloNumerosSome
                .some(
                  (valorActual)=>{
                    return valorActual < 2
                  }
                )
console.log(`Respuesta SOME: ${some} `)

//7) Sumen todos los valores
const arregloNumerosReduce = [1, 2, 3, 4, 5, 6];
const valorDondEmpiezaCalculo = 0;

const reduce = arregloNumerosReduce
                  .reduce(
                    (acumulado,valorActual)=>{
                      return acumulado + valorActual;
                    }
                  )
console.log(`Respuesta REDUCE: ${reduce} `)

//8) Resten todos los valores de 100

//1.1) Sumen 10 a todos
//1.2) Filtren a los mayores a 15
//1.3) Si hay 