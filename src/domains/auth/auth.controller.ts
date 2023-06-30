import { Controller, Get, Inject, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from 'src/dto/users/login.dto';
import { RegisterDto } from 'src/dto/users/register.dto';

@Controller('auth')
export class AuthController {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: ClientProxy) { }

    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        return this.authService.send('registerUser', registerDto);
    }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.send('loginUser', loginDto);
    }
}
