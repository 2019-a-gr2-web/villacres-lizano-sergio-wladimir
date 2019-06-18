import { Module } from "@nestjs/common";
import { TypeOrmModule} from '@nestjs/typeorm';
import { FiestaEntity } from "./fiesta.emtity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [
                FiestaEntity
            ],
            'default'
        ),
    ],//modulos
})
export class FiestaModule{
    
}