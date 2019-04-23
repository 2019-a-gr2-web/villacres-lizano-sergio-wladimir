import {Controller, Delete,Request, Get, Post, Put, Headers, Query, Param, Body,Response} from '@nestjs/common';
import { AppService } from './app.service';
import * as Joi from '@hapi/joi';
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


}
