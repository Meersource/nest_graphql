import { Field, Int, ObjectType } from "@nestjs/graphql";
@ObjectType() //ya decorator btata ha  schema hona wala ha jo k Student ka ho ga
export class Book {
    @Field((type) => Int) //field ko define kiya hova ha with help of Field decorater
    id: number;

    @Field()
    title: string;

    @Field((type) => Int)
    price: number;
}

//book k resover k ander sary queries aur mutations ho gi