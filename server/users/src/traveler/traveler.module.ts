import { Module } from '@nestjs/common';
import { TravelerService } from './traveler.service';
import { TravelerController } from './traveler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Traveler } from './entity/traveler.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Traveler])],
    controllers: [TravelerController],
    providers: [TravelerService],
})
export class TravelerModule {}
