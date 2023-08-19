import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input()
  title!: string;
  @Input()
  projects: Project[] = [];

  constructor(){ }

  ngOnInit(): void {
  }

}
