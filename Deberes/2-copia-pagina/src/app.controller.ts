import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Delete,Request, Post, Put, Headers, Query, Param, Body,Response} from '@nestjs/common';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/inicio')//endpoint
    estilos(
      @Response() res
    ){
      return res.render('inicio/inicio.ejs',{});
    }
}
