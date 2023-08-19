import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

  @Output()
  scrollTo = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(sectionName: string){
    this.scrollTo.emit(sectionName)
  }

}
