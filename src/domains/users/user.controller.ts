import { Controller, Inject, Get, Param, Patch, Body, Delete } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UserController {
    constructor(@Inject('AUTH_SERVICE') private readonly usersServiceClient: ClientProxy) { }

    @Get()
    getAllUsers() {
        return this.usersServiceClient.send('getAllUsers', {});
    }

    @Get(':id')
    getOneUser(@Param('id') id: string) {
        return this.usersServiceClient.send('getOneUser', { id });
    }

    @Patch('password')
    updatePassword(@Body() body) {
        return this.usersServiceClient.send('updatePassword', body);
    }

    @Patch(':id/role')
    updateRole(@Param('id') id: string, @Body() body) {
        return this.usersServiceClient.send('updateRole', { id, role: body.role });
    }

    @Patch(':id')
    updateProfile(@Body() body) {
        return this.usersServiceClient.send('updateProfile', body);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.usersServiceClient.send('deleteUser', { id });
    }
}
