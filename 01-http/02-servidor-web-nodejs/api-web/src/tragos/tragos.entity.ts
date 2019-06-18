import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { type } from "os";
import { DistribuidorEntity } from "src/distribuidor/distribuidor.emtity";
import { FiestaEntity } from "src/fiesta/fiesta.emtity";

@Entity("bd_tragos") // Nombre tabla
export class TragosEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'nombre_trago',
    })
    nombre: string;

    @Column({
        type: 'varchar',
        length: 10,
        name: 'tipo_trago',
    })
    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas'|'Cerveza';

    @Column({
        type: 'int',
        name: 'grados_alcohol',
    })
    gradosAlcohol: number;

    @Column({
        type: 'date',
        name: 'fecha_caducidad',
    })
    fechaCaducidad: Date;

    @Column({
        type: 'decimal',
        precision: 10,
        scale:2,
        name: 'precios',
    })
    precio: number;
    @ManyToOne(type=>DistribuidorEntity,distribuidor=>distribuidor.tragos)
    distribuidor_id:DistribuidorEntity;
    @ManyToOne(type=>FiestaEntity,fiesta=>fiesta.tragos)
    fiesta_id:FiestaEntity;

}
