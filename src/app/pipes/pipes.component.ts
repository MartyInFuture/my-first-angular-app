import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass'],
})
export class PipesComponent {
  data = {
    string: 'stRIng here',
    number: 12.5,
    date: new Date(),
    currency: 600,
  };
}
