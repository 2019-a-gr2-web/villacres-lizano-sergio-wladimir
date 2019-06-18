import { Controller, Get, Res, Post, Body } from "@nestjs/common";
import { TragosService } from "./tragos.service";
import { Trago } from "./interfases/trago";
import { async } from "rxjs/internal/scheduler/async";

@Controller('/api/traguito')
export class TragosController{
    constructor(private readonly _tragosService:TragosService){
    }
    @Get('lista')
    async listarTragos(
        @Res() res
    ){
        const arregloTragos = await this._tragosService.buscar();
        res.render('tragos/lista-tragos',{
            arregloTragos:arregloTragos
        })
    }

    @Get('crear')
    crearTrago(
        @Res() res
    ){
       res.render('tragos/crear-editar',{
        })
    }

    @Post('crear')
    crearTragoPost(
        @Body() trago:Trago,
        @Res() res
        // @Body('nombre') nombre:string,
        // @Body('tipo') tipo:string,
        // @Body('gradosAlcohol') gradosAlcohol:number,
        // @Body('fechaCaducidad') fechaCaducidad:Date,
        // @Body('precio') precio:number
    ){
        console.log('Trago: ', trago, typeof trago);
        trago.gradosAlcohol = Number(trago.gradosAlcohol);
        trago.precio=Number(trago.precio);
        trago.fechaCaducidad = new Date(trago.fechaCaducidad);
        console.log(trago);
        this._tragosService.crear(trago);
        res.redirect('/api/traguito/lista');
    }

    @Post('eliminar')
    eliminarTrago(
        @Body('id') id:number,
        @Res() res
    ){
        this._tragosService.eliminarPorId(Number(id))
        res.redirect('/api/traguito/lista');
    }
}