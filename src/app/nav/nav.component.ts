import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() navigateToSection = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  navVisible = false;

  toggleNav() {
    this.navVisible = !this.navVisible;
  }
  navigate(section: string) {
    this.navigateToSection.emit(section);
  }
}
