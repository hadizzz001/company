import { Prisma } from "@prisma/client";


export class Project implements Prisma.BookCreateInput{
     id: number;
     title: string;
     description?: string;
}