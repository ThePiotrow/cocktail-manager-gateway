import { Controller, Inject, Get, Param, Patch, Body, Delete, Headers } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { ChangePasswordDto } from 'src/dto/users/update-password.dto';
import { UpdateUserRoleDto } from 'src/dto/users/update-role.dto';
import { UpdateUserDto } from 'src/dto/users/update-user.dto';

@Controller('users')
export class UserController {
    constructor(
        @Inject('AUTH_SERVICE') private readonly usersServiceClient: ClientProxy,
        private jwtService: JwtService
    ) { }

    @Get()
    getAllUsers(@Headers('Authorization') token: string) {
        console.log(token)
        return this.usersServiceClient.send('getAllUsers', {
            token
        });
    }

    @Get(':id')
    getOneUser(@Param('id') id: string) {
        return this.usersServiceClient.send('getOneUser', { id });
    }

    @Patch('password')
    updatePassword(@Body() body: ChangePasswordDto) {
        return this.usersServiceClient.send('updatePassword', body);
    }

    @Patch(':id/role')
    updateRole(@Param('id') id: string, @Body() body: UpdateUserRoleDto) {
        return this.usersServiceClient.send('updateRole', { id, role: body.role });
    }

    @Patch(':id')
    updateProfile(@Body() body: UpdateUserDto) {
        return this.usersServiceClient.send('updateProfile', body);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersServiceClient.send('deleteUser', { id });
    }
}
