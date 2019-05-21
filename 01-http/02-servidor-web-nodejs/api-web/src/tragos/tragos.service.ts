import {Injectable} from '@nestjs/common';
import { Trago } from './interfases/trago';
import { identity } from 'rxjs';

@Injectable()
export class TragosService {
    
    bddTragos:Trago[] = [];
    recnum = 1;

    crear(nuevoTrago:Trago):Trago{
        nuevoTrago.id = this.recnum;
        this.bddTragos.push(nuevoTrago);
        this.recnum++;
        return nuevoTrago;
    }
    buscarPorId(id:number):Trago {
        return this.bddTragos.find(
            (trago)=>{
                return trago.id === id;
            }
        );
    }
    eliminarPorId(id:number):Trago[]{
        const indice = this.bddTragos.findIndex(
            (trago)=>{
                return trago.id ===id;
            }
        );

        this.bddTragos.splice(indice,1);
        return this.bddTragos;

    }
    actualizar(tragoActualizado:Trago,id:number):Trago[]{
        const indice = this.bddTragos.findIndex(
            (trago)=>{
                return trago.id ===id;
            }
        );
        tragoActualizado.id = this.bddTragos[indice].id;
        this.bddTragos[indice] = tragoActualizado; 
        return this.bddTragos;   
    }
    buscarPorNombre(nombre:string):Trago {
        return this.bddTragos.find(
            (trago)=>{
                return trago.nombre.toUpperCase().includes(nombre.toUpperCase());
            }
        );
    }
    constructor(){
        const traguito:Trago = {
            nombre:'Pilsener',
            gradosAlcohol:4.3,
            fechaCaducidad: new Date(2019,5,10),
            precio:1.2,
            tipo:'Cerveza'
        }
        this.crear(traguito);
    }

}