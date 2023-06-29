import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: ClientProxy) { }

    @Post('register')
    register(@Body() body) {
        return this.authService.send('registerUser', body);
    }

    @Post('login')
    login(@Body() body) {
        return this.authService.send('loginUser', body);
    }
}
