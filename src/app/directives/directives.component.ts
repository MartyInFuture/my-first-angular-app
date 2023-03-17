import { Component } from '@angular/core';
import { users } from './directives.data';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.sass'],
})
export class DirectivesComponent {
  isHidden = false;
  users = users;

  toggle() {
    this.isHidden = !this.isHidden;
  }
}
