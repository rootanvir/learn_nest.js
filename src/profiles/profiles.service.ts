import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
    private profiles = [
        {
            id: randomUUID(),
            name: "John Brains",
            description: "This is description of john brain"
        },
        {
            id: randomUUID(),
            name: "Lily Bridestone",
            description: "This is description of Lily Bridgestone"
        },
        {
            id: randomUUID(),
            name: "Matty Harison",
            description: "This is description of Matty Harison"
        },
    ];
    findAll(){
        return this.profiles;
    }
    findOne(id:string){
        return this.profiles.find((profile) => profile.id === id);
    }
    create(createProfileDto: CreateProfileDto){
        const createdProfile = {
            id: randomUUID(),
            ...createProfileDto
        };
        this.profiles.push(createdProfile);
        return createdProfile;
    }
    update(id:string,updateProfileDto : UpdateProfileDto){
        const matchingProfile = this.profiles.find(
            (existingProfile) => existingProfile.id == id
        );
        if( !matchingProfile){
            return {};
        }
        matchingProfile.name = updateProfileDto.name;
        matchingProfile.description = updateProfileDto.description;

        return matchingProfile;
    }
}
