import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('nav') navSection!: ElementRef;

  @ViewChild('features') featuresSection!: ElementRef;
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('pricing') pricingSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;

  private sectionsMap!: { [key: string]: ElementRef };

  constructor() {}

  ngAfterViewInit() {
    this.sectionsMap = {
      features: this.featuresSection,
      about: this.aboutSection,
      pricing: this.pricingSection,
      contact: this.contactSection,
      nav: this.navSection
    };
  }

  navigateTo(section: string) {
    const sectionRef = this.sectionsMap[section];
    if (sectionRef && sectionRef.nativeElement) {
      sectionRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
