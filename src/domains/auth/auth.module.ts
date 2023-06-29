import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'AUTH_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: 'auth', //Docker service name
                    port: 5000,
                },
            },
        ]),
    ],
    controllers: [AuthController],
    providers: [],
})
export class AuthModule { }
