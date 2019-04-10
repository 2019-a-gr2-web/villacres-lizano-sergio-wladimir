import {Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // metodo http get
  getHello(): string {
    return this.appService.getHello();
  }
  @Post() // metodo http post
  postHello(){
    return "Hola mundo con Post";
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