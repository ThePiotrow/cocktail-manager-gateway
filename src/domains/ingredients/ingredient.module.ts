import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'COCKTAILS_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: 'cocktail', //Docker service name
                    port: 7000,
                },
            },
        ]),
    ],
    controllers: [IngredientController],
    providers: [],
})
export class IngredientModule { }
