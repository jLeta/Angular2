import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  template: `
  <h2> {{name}}</h2>
  <br/> email: {{email}}
  <br/>
  <strong>address</strong> : {{address.city}}, {{address.streetNumber}} {{address.streetName}}
  <hr/>

  <button (click)="showHobbies()">{{isShowHobbies ? "Hide hobbies" : "Show hobbies"}}</button>

  <div *ngIf="isShowHobbies">
    <strong>Hobbies</strong>
    <ul>
        <li *ngFor="let hobby of hoobies">{{hobby}}</li>
    </ul>

    <form (submit)="addHobby(hobby.value)">
        <label>Add Hobby: </label> <br/>
        <input type="text" #hobby /><br/>
    </form>
  </div>

  <form>
      <label>rename your username: </label> <br/>
      <input type="text" name="name" [(ngModel)]="name" /><br/>
  </form>
  `
})
export class AppComponent {
  name: string;
  email: string;
  address: address;
  hoobies: string[];
  isShowHobbies: boolean;

  constructor() {
    this.name = 'Angular';
    this.email = 'angular.start@gmail';

    this.address = {
      city: 'Nice',
      streetNumber: 85,
      streetName: 'biot'
    };

    this.isShowHobbies = false;
    this.hoobies = ['sport', 'technology', 'books'];

  }

  showHobbies() {
    this.isShowHobbies = !this.isShowHobbies;
  }

  addHobby(hobby: string) {
    this.hoobies.push(hobby);
  }

}

interface address {
  city: string;
  streetName: string;
  streetNumber: number;
}

