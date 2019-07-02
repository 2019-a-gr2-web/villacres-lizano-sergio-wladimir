import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TragosModule } from './tragos/tragos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TragosEntity } from './tragos/tragos.entity';
import { DistribuidorModule } from './distribuidor/distribuidor.module';
import { DistribuidorEntity } from './distribuidor/distribuidor.emtity';
import { FiestaModule } from './fiesta/fiesta.module';
import { FiestaEntity } from './fiesta/fiesta.emtity';
import { ChatModule } from './chat/chat.module';

@Module({
  
   imports: [//TragosModule,DistribuidorModule,FiestaModule,TypeOrmModule.forRoot({
  //   name:'default', //nombre por defecto de TYPEORM
  //   type: 'mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   username: 'root',
  //   password: '',
  //   database: 'test',
  //   entities: [TragosEntity,
  //   DistribuidorEntity,
  //   FiestaEntity,
    
  // ],
  //   synchronize: true,
  // }),
  ChatModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {

  
}
