import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { Project } from "./project.model";
import { ProjectService } from "./project.service";
import { Request, Response } from "express";

@Controller('api/v1/Project')
export class ProjectController{

     constructor(private readonly ProjectService: ProjectService){}


     @Get()
     async getAllProject(@Req() request:Request, @Res() response:Response ):Promise<any>{
          const result =  await this.ProjectService.getAllProject()
          return response.status(200).json({
               status: "Ok!",
               message: "Successfully fetch data!",
               result: result 
          })
     }

     @Post()
     async postProject(@Body() postData: Project):Promise<Project>{
          return this.ProjectService.createProject(postData)
     }

     @Get(':id')
     async getProject(@Param('id') id:number):Promise<Project | null>{
          return this.ProjectService.getProject(id)
     }

     @Delete(':id')
     async deleteProject(@Param('id') id:number):Promise<Project>{
          return this.ProjectService.deleteProject(id)
     }

     @Put(':id')
     async updateProject(@Param('id') id: number,@Body() data: Project): Promise<Project> {
       return this.ProjectService.updateProject(id,data);
     }
}