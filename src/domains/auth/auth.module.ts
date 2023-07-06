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
                    host: process.env.AUTH_HOST, //Docker service name
                    port: parseInt(process.env.AUTH_PORT),
                },
            },
        ]),
    ],
    controllers: [AuthController],
    providers: [],
})
export class AuthModule { }
