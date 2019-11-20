import {WebSocketGateway, WebSocketServer, SubscribeMessage} from '@nestjs/websockets';
import { Client } from 'socket.io';
@WebSocketGateway(3001,{
    namespace:'/websockets'
})
export class ChartGateway{
    @WebSocketServer() server;
    constructor(){
        console.log(this.server);
    }
    @SubscribeMessage('holaMundo')
    holaMundo(client: Client | any, data: any){
        console.log(data);
        console.log('Nos hacen la peticion');
        console.log(this.server);
        client.broadcast.emit('saludaron',data);
        return 'Hola '+ data.nombre;
    }


}