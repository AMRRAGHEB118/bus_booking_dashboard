import { Module } from '@nestjs/common';
import { DatabaseModule } from 'lib/database.module';
import { UsersModule } from './users/users.module';
import { TravelerModule } from './traveler/traveler.module';

@Module({
  imports: [DatabaseModule, UsersModule, TravelerModule],
})
export class AppModule {}
