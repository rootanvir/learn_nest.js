import { Controller, Get, Query, Param, Post, Body, Put, Delete ,HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto  } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {

    @Get()
    findall(@Query('age')age:number){

        return [ {age} ];
    }
    @Get(':id')
    FindOne(@Param('id') id:string){
        return {id};
    }

    @Post()
    create(@Body() createProfileDto : CreateProfileDto){
        return {
            name : createProfileDto.name,
            des  : createProfileDto.description
        }
    }
    @Put(':id')
    update(
        @Param('id')id:string,
        @Body()updateProfileDto:UpdateProfileDto){
            return {
                id,
                ...updateProfileDto
            }
        }
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id')id:string){

    }
    
}
