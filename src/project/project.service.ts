import { PrismaService } from "src/prisma.service";
import { Project } from "./project.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class ProjectService{

     constructor(private prisma: PrismaService){}

     async getAllProject(): Promise<Project[]>{
          return this.prisma.project.findMany()
     }

     async getProject(id:number): Promise<Project | null>{
          return this.prisma.project.findUnique({where: {id:Number(id)}})
     }

     async createProject(data: Project): Promise<Project>{
          return this.prisma.project.create({
               data,
          })
     }

     async updateProject(id:number,data:Project):Promise<Project>{
          return this.prisma.project.update({
               where: {id:Number(id)},
               data:{ title: data.title, description:data.description }
          })
     }

     async deleteProject(id:number):Promise<Project>{
          return this.prisma.project.delete({
               where:{id: Number(id)}
          })
     }
}