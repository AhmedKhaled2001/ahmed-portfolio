import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-group-projects',
  templateUrl: './group-projects.component.html',
  styleUrls: ['./group-projects.component.scss']
})
export class GroupProjectsComponent implements OnInit {

  groupProjects : Project[] = [];

  constructor()
   { 
    this.groupProjects.push(
      this.createProject(
        "Goblin Game", 
        "Goblin coin game", 
        new Date("25/03/2022"),
        ["Ahmed Khaled"],
        ["Unreal Engine 5.0"]
        ))
   }

  ngOnInit(): void {
  }

  createProject(name:string, description:string, date:Date, contributers:string[], technologyStack: string[]) : Project
  {
    return {
      name: name, 
      description: description, 
      date: date,
      contributers: contributers,
      technologyStack: technologyStack
    }
  }

}
