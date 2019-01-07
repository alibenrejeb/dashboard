import { Component } from '@angular/core';
import Pony from './pony';

@Component({
  selector: 'about',
  template: `<strong>My page content here {{pony.name}}</strong>`,
})
export class AboutComponent {
  pony: Pony;

  constructor() {
    this.pony = new Pony();
    this.pony.setName('Taher');
    const test = { name: 'Rainbow Dash', color: 'blue' };
    const horse = { speed: 40, color: 'black' };
    const printColor = animal => console.log(animal.color);
    console.log(this.pony.getName());
  }
}
