import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
// import { StudentModule } from './student/student.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [ GraphQLModule.forRoot({
    driver: ApolloDriver,
    playground: true,
    // autoSchemaFile : join(process.cwd() , "src/schema.graphql"),
   //if we want to code first approach, we need to comment typePaths
    typePaths:["./**/*.graphql"] //project ma jao jha b  graphql ki file ha us graphql ki schema file ki location
  }),
  // StudentModule,
   BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
