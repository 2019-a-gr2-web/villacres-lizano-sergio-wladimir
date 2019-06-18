import {Injectable} from '@nestjs/common';
import { Trago } from './interfases/trago';
import { identity } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { TragosEntity } from './tragos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TragosService {
    
    bddTragos:Trago[] = [];
    recnum = 1;

    crear(nuevoTrago: Trago):Promise<Trago> {
        // nuevoTrago.id = this.recnum;
        // this.recnum++;
        // this.bddTragos.push(nuevoTrago);
        // return nuevoTrago;

        const objetoEntidad = this._tragosRepository
                                    .create(nuevoTrago);

        return this._tragosRepository.save(objetoEntidad);
    }
    buscar(parametrosBusqueda?):Promise<Trago[]>{
        return this._tragosRepository.find(parametrosBusqueda);
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
    constructor(@InjectRepository(TragosEntity)
    private readonly _tragosRepository: Repository<TragosEntity>){
        const traguito:Trago = {
            nombre:'Pilsener',
            gradosAlcohol:4.3,
            fechaCaducidad: new Date(2019,5,10),
            precio:1.2,
            tipo:'Cerveza'
        }
        this._tragosRepository
            .save(traguito)
            .then(
                (dato)=>{
                    console.log('Dato creado');
                }
            )
            .catch(
                (dato)=>{
                    console.error('Error')
                }
            );
        
        
        this.crear(traguito);
    }

}