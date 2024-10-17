import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Book } from "./schema/book.schema";
import { BookService } from "./book.service";
import {Book as BookModel} from "../graphql"
import { AddBookArgs } from "./args/add.book.args";

@Resolver(of => Book) // schema of Book. is ma btya gy k ya Book schema ka resolver ha 
export class BookResolver {

//Queries and mutations

//sab sy aphly apni service inject kry gy

constructor(private readonly bookService: BookService){}

@Query(returns => [Book],{name: "books"}) //decoator query ha jo humby books return kry gi
getAllBooks(): BookModel[] {
    return this.bookService.findAllBooks()
}

@Query(returns => Book,{name: "findBookById", nullable: true}) //decoator query ha jo humby books return kry gi, book ka object null b aaskta ha (id k againt)
getBookById(@Args({name: 'bookId', type: ()=>Int}) id): BookModel {
    return this.bookService.findBookById(id)
}

@Mutation(returns => String,{name: "deleteBook"}) //decoator query ha jo humby books return kry gi, book ka object null b aaskta ha (id k againt)
deleteBookById(@Args({name: 'bookId', type: ()=>Int}) id): string {
    return this.bookService.deleteBook(id)
}

@Mutation(returns => String,{name: "addBook"})
addBook(@Args("addBookArgs") addBookArgs: AddBookArgs): string {
    return this.bookService.addBook(addBookArgs)
}

@Mutation(returns => String,{name: "updateBook"})
updateBook(@Args({name: 'bookId', type: ()=>Int}) id: number,@Args("updateBookArgs") updateBookArgs: AddBookArgs): string {
    return this.bookService.updateBook(id,updateBookArgs)
}

}