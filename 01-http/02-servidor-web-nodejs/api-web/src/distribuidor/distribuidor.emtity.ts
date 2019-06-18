import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { TragosEntity } from "src/tragos/tragos.entity";

@Entity("bd_distribuidor") // Nombre tabla
export class DistribuidorEntity {

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre:string;
    @OneToMany(type => TragosEntity,trago => trago.distribuidor_id)
    tragos:TragosEntity[];


}