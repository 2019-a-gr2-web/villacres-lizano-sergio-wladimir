import { Request,Response, Controller, Get, Headers, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { response } from 'express';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('setNombre')
    setNombre(@Request() request, @Response() response, @Query() query,) {
        const usuario = query.nombreUsuario;
        if (usuario) {
            response.cookie('nombreUsuario',usuario).cookie('puntos',100,{signed: true}).send("Listo");
        } else {
            response.send('Ingrese su nombre');
        }
    }



  @Get('/suma')
  suma(@Headers() header,@Response() respuesta,@Request() req) {
    const cookie = req.cookies;
    const cookieSeg = req.signedCookies;
    if(!cookieSeg.puntos){
      respuesta.cookie('puntos',100,{signed:true});
    }
    if(!cookie.nombreUsuario) {
      respuesta.cookie('nombreUsuario', 'Sergio');
    }
    if(cookieSeg.puntos <= 0){
      respuesta.send("Se termino los puntos");
    }
    if(header.numero1!=null && header.numero2!=null){
      const resultado = Number(header.numero1) + Number(header.numero2);
      console.log("Resultado de la suma es: "+resultado);
      const resultadoJson = {
        'nombreUsuario':cookie.nombreUsuario,
        'resultado':resultado
      }
      const resto = cookieSeg.puntos - resultado;
      cookieSeg.puntos = resto;
      console.log(cookieSeg.puntos);
      respuesta.cookie('puntos',resto,{signed:true})
      
      return respuesta.status(200).send(resultadoJson);
    }
    else{
      return respuesta.status(400).send('Error de parametros');
    }
    
  }
  @Post('/resta')
  resta(@Body() body,@Response() respuesta){
    if(!isNaN(body.numero1) && !isNaN(body.numero2)){
      const resultado = Number(body.numero1) - Number(body.numero2);
      console.log("Resultado de la resta es: "+resultado);
      return respuesta.status(201).send('La respuesta es: '+resultado);
    }
    else{
      return respuesta.status(401).send('Error de parametros');
    }
  }
  @Put('/producto')
  producto(@Query() query,@Response() respuesta){
    if(!isNaN(query.numero1) && !isNaN(query.numero2)){
      const resultado = Number(query.numero1) * Number(query.numero2);
      console.log("Resultado de la multiplicacion es: "+resultado);
      return respuesta.status(202).send('La respuesta es: '+resultado);
    }
    else{
      return respuesta.status(402).send('Error de parametros');
    }
  }
  @Delete('/division')
  division(@Query() query, @Body() body,@Headers() header,@Response() respuesta){
    if(isNaN(query.numero) && !isNaN(body.numero) && header.numero!=null){
      const resultado = Number(body.numero)/Number(header.numero);
      return respuesta.status(203).send('La respuesta es: '+ resultado)
    }
    else if(isNaN(body.numero) && !isNaN(query.numero) && header.numero!=null){
      const resultado = Number(query.numero)/Number(header.numero);
      return respuesta.status(203).send('La respuesta es: '+ resultado)
    }
    else if(header.numero==null && !isNaN(query.numero) && !isNaN(body.numero)){
      const resultado = Number(query.numero)/Number(body.numero);
      return respuesta.status(203).send('La respuesta es: '+ resultado)
    }
    else{
      return respuesta.status(403).send('error')
    }
  }

}
