import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';

@Module({
  controllers: [BookController],
  // providers: [BookService]
  providers: [BookResolver]

})
export class BookModule {}
