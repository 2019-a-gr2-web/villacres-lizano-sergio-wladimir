import {Injectable} from '@nestjs/common';
import { Trago } from './interfases/trago';
import { identity } from 'rxjs';

@Injectable()
export class AppService {
    
    bddTragos:Trago[] = [];
    recnum = 1;

    crear(nuevoTrago:Trago){
        nuevoTrago.id = this.recnum;
        this.bddTragos.push(nuevoTrago);
        this.recnum++;
        return nuevoTrago;
    }
    buscarPorId(id:number){
        return this.bddTragos.find(
            (trago)=>{
                return trago.id === id;
            }
        );
    }
    eliminarPorId(id:number){
        const indice = this.bddTragos.findIndex(
            (trago)=>{
                return trago.id ===id;
            }
        );

        this.bddTragos.splice(indice,1);


    }
    actualizar(tragoActualizado:Trago,id:number){
        const indice = this.bddTragos.findIndex(
            (trago)=>{
                return trago.id ===id;
            }
        );
        tragoActualizado.id = this.bddTragos[indice].id;
        this.bddTragos[indice] = tragoActualizado;    
    }

}