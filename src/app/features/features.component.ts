import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    {
      title: 'Lorem ipsum dolor sit amet.',
      description: {
        part1: 'Lorem ipsum dolor',
        part2: 'sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.'
      }
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      description: {
        part1: 'Lorem ipsum dolor',
        part2: 'sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.'
      }
    },
    {
      title: 'Lorem ipsum dolor sit amet.',
      description: {
        part1: 'Lorem ipsum dolor',
        part2: 'sit amet consectetur. Vitae donec varius placerat sed auctor enim feugiat.'
      }
    },
    // ... Add more features objects here with part1 and part2 for descriptions
  ];
}
