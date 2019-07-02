import { Module } from "@nestjs/common";
import { ChartGateway } from "./chat.gateway";

@Module({
    providers:[ChartGateway]
})
export class ChatModule{
    
}
