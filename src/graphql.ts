
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Student {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    students(): Student[] | Promise<Student[]>;
}

type Nullable<T> = T | null;
