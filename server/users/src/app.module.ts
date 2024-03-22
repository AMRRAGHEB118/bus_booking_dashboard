import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'lib/database.module';
import { UsersModule } from './users/users.module';
import { TravelerModule } from './traveler/traveler.module';

@Module({
    imports: [DatabaseModule, UsersModule, TravelerModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
