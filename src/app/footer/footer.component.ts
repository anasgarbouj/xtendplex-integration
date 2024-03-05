import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  @Output() navigateToSection = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  navigate(section: string) {
    this.navigateToSection.emit(section);
  }
}
