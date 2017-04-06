import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <br/>
  email: {{email}} 
  <br/>
 <strong>address</strong> : {{address.city}}, {{address.streetNumber}} {{address.streetName}}
<hr/>
<strong>Hobbies</strong>
  <ul>
    <li *ngFor="let hobby of hoobies">{{hobby}}</li>
  </ul>
  `,
})
export class AppComponent  { 
  name:string; 
  email:string;
  address:address;
  hoobies:string[];

  constructor(){
    this.name = 'Angular';
    this.email = 'angular.start@gmail';
    
    this.address = {
      city:'Nice',
      streetNumber:85,
      streetName:'biot'
    };

    this.hoobies = ['sport', 'technology', 'love'];
    
  }
}

interface address {
  city:string;
  streetName:string;
  streetNumber:number;
}

