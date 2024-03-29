import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { BreedModule } from './breed/breed.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest-dogs'), UserModule, BreedModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
