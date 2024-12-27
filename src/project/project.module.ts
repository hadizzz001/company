import { Module } from "@nestjs/common";
import { ProjectController } from "./Project.controller";
import { ProjectService } from "./project.service";
import { PrismaService } from "src/prisma.service";



@Module({
     controllers: [ProjectController],
     providers: [ProjectService, PrismaService]
})
export class ProjectModule{}