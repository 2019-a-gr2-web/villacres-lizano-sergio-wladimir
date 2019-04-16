import {Controller, Delete, Get, Post, Put,Headers} from '@nestjs/common';
import { AppService } from './app.service';
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
}
/*
@nombreDecorador()//Decorador -> funcion
class usuario {
  @Atributo()
  atributoPublico;
  private atributoPrivado;
  protected atributoProtected;

  constructor(@parametro()atributoPublico,
              @parametro()atributoPrivado,
              @parametro()atributoProtegido){
    this.atributoPublico = atributoPublico;
    this.atributoPrivado=atributoPrivado;
    this.atributoProtected = atributoProtegido;
  }
  @MetodoA()
  public metodoPublico(@ParametroA() a){}
}*/

const json = [
  {
    "nombre": "Sergio",
    "key": "valor",
    "edad": 25,
    "sueldo": 10.21,
    "casado": false,
    "hijos": null,
    "mascotas": [
      "cachetes",
      10,
      10.2,
      false,
      null,
      {
        "nombre": "cachetes"
      }
    ]
  }
];

let objeto:any = {
  "propiedad":"valor",
  "propiedad1":"valor1"
};

objeto.propiedad3 ='valor3';
objeto['propiedadTres']='valor3';
delete objeto.propiedad3;//destruir
objeto.propiedad3 =undefined;//destruir
objeto.propiedad //valor
objeto.propiedad1 //valor1
