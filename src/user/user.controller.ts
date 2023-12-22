import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.registerUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findUser(+id);
  }
}