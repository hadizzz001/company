import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ProjectModule } from './project/project.module';


@Module({
  imports: [BookModule , ProjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
