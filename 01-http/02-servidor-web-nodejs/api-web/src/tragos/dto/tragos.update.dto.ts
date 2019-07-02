import { DistribuidorEntity } from "src/distribuidor/distribuidor.emtity";
import { FiestaEntity } from "src/fiesta/fiesta.emtity";

export class TragosUpdateDto{
    id:number;
    nombre: string;
    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas'|'Cerveza';
    fechaCaducidad: Date;
    precio: number;
    distribuidor_id:DistribuidorEntity;
    fiesta_id:FiestaEntity;

}