import { Query, Resolver } from "@nestjs/graphql";
import { Student } from "./student.schema";
import { Student as StudentModel } from "../graphql";


@Resolver(of => Student)
export class StudentResolver {
    @Query((returns) => [Student],{name:"students",})
    //nichy wala function kis query k again run hony wala ha tu ham Duery decorator ma books likhy gy
    // getAllStudents(){
    //     return [
    //         {id: 1, title: 'Harry Potter', price: 500},
    //         {id: 2, title: 'Hunger Game', price: 600},
    //         {id: 3, title: 'Robin Hood', price: 900}

    //     ]
    // }
    getAllStudents(){
        let arr : StudentModel[] = [
            {id: 1, title: 'Harry Potter', price: 500},
            {id: 2, title: 'Hunger Game', price: 600},
            {id: 3, title: 'Robin Hood', price: 900}
        ]
        return arr;
    }
}
