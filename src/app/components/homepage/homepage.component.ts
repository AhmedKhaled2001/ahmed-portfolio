import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  groupProjects: Project[] = [];
  personalProjects: Project[] = [];

  constructor() {
    this.buildGroupProjects()
    this.buildGPersonalProjects()
   }

  ngOnInit(): void {
  }

  scrollTo(sectionId: string){
    let el =document.getElementById(sectionId) ;
    if(el){
      el.scrollIntoView();
    }
  }

  buildGroupProjects(){
    this.groupProjects.push(this.createProject("Goblin Game", "Goblin coin game", new Date("25/03/2022"),["Ahmed Khaled"],["Unreal Engine 5.0"]));
    this.groupProjects.push(this.createProject("Another Game", "Another game", new Date("25/05/2022"),["Ahmed Khaled", "Teammate's Name"],["Unreal Engine 5.0", "Blueprints"]));
  }

  buildGPersonalProjects(){
    this.personalProjects.push(this.createProject("Personal Game", "Personal game's description", new Date("25/03/2022"),["Ahmed Khaled"],["Unreal Engine 5.0"]));
    this.personalProjects.push(this.createProject("Another Personal Game", "Another personal game's description", new Date("25/05/2022"),["Ahmed Khaled"],["Unreal Engine 5.0", "Blueprints"]));
  }

  createProject(name:string, description:string, date:Date, contributers:string[], technologyStack: string[]) : Project{
    return {
      name: name, 
      description: description, 
      date: date,
      contributers: contributers,
      technologyStack: technologyStack
    }
  }
}
