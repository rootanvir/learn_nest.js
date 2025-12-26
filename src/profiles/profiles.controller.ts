import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, HttpException, NotFoundException, ParseUUIDPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';

@Controller('profiles')
export class ProfilesController {
    constructor(private profileService: ProfilesService) {

    }

    @Get()
    findAll() {
        return this.profileService.findAll();
    }

    @Get(':id')
    FindOne(@Param('id',ParseUUIDPipe) id: string) {
        try {
            return this.profileService.findOne(id);
        }
        catch (error) {
            throw new NotFoundException(error.message);
        }
        //throw new NotFoundException();
    }

    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profileService.create(createProfileDto);
    }
    @Put(':id')
    update(
        @Param('id',ParseUUIDPipe) id: UUID,
        @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.update(id, updateProfileDto);
    }
    @Delete(':id')
    @UseGuards()
    @HttpCode(HttpStatus.OK)
    remove(@Param('id') id: string) {
        this.profileService.remove(id);
    }

}
