import { Module } from "@nestjs/common";
import { TypeOrmModule} from '@nestjs/typeorm';
import { DistribuidorEntity } from "./distribuidor.emtity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [
                DistribuidorEntity
            ],
            'default'
        ),
    ],//modulos
})
export class DistribuidorModule{
    
}