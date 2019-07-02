import { DistribuidorEntity } from "src/distribuidor/distribuidor.emtity";
import { FiestaEntity } from "src/fiesta/fiesta.emtity";
import { IsNotEmpty} from 'class-validator'
export class TragosCreateDto{
    
    @IsNotEmpty()
    id:number;
    nombre: string;
    @IsNotEmpty()
    
    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas'|'Cerveza';
    fechaCaducidad: Date;
    precio: number;
    distribuidor_id:DistribuidorEntity;
    fiesta_id:FiestaEntity;

}