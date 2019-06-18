import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { type } from "os";
import { TragosEntity } from "src/tragos/tragos.entity";

@Entity("bd_fiesta") // Nombre tabla
export class FiestaEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre:string;
    @OneToMany(type=>TragosEntity,trago=>trago.fiesta_id)
    tragos:TragosEntity[]; 
}