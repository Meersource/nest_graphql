import { Query, Resolver } from "@nestjs/graphql";
@Resolver('Book')
export class BookResolver {
    @Query('books')
    //nichy wala function kis query k again run hony wala ha tu ham Duery decorator ma books likhy gy
    getAllBooks(){
        return [
            {id: 1, title: 'Harry Potter', price: 500},
            {id: 2, title: 'Hunger Game', price: 600},
            {id: 1, title: 'Robin Hood', price: 900}

        ]
    }
}
