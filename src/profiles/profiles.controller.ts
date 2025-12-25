import { Controller, Get, Query, Param, Post, Body, Put, Delete ,HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto  } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
    constructor (private profileService:ProfilesService){

    }
    
    @Get()
    findAll(){
        return this.profileService.findAll();
    }

    @Get(':id')
    FindOne(@Param('id') id:string){
        return this.profileService.findOne(id);
    }

    @Post()
    create(@Body() createProfileDto : CreateProfileDto){
        return this.profileService.create(createProfileDto);
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
