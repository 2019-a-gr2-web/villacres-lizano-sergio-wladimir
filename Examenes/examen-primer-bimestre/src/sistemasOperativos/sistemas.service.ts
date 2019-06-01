import { Injectable } from '@nestjs/common';
import {Sistema} from './../interfases/sistema';

@Injectable()
export class SistemasOperativosService {
  bddSistemas:Sistema[]=[];
  recnum=1;

  crear(nuevoSistema:Sistema):Sistema{
      nuevoSistema.id = this.recnum;
      this.bddSistemas.push(nuevoSistema);
      this.recnum++;
      return nuevoSistema;
  }
  buscarPorNombre(nombre:string):Sistema[]{
      
      let lista_busqueda  = this.bddSistemas.filter((sistema)=>{
          return sistema.nombre === nombre;
      });
      return lista_busqueda;
  }
  eliminarPorId(id:number):Sistema[]{
      const indice = this.bddSistemas.findIndex(
          (sistema)=>{
              return sistema.id === id;
          }
      );
      this.bddSistemas.splice(indice,1);
      return this.bddSistemas;
  }
  constructor(){
      const sistema:Sistema={
          nombre:'Windows 7',
          fechaLanzamiento:new Date(2009,10,22),
          instalado:true,
          pesoEnGigas:2.5,
          versionApi:1.3
      }
      this.crear(sistema);
  }
}
