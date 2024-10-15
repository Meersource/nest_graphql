import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';
// import { BookResolver } from './book.resolver';

@Module({
  controllers: [],
  // providers: [],
  providers: [StudentResolver]

})
export class StudentModule {}
