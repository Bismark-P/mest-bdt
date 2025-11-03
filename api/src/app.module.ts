import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProgramsModule } from './programs/programs.module';
import { CohortsModule } from './cohorts/cohorts.module';

@Module({
  imports: [ProgramsModule, CohortsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
