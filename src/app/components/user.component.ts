import { Component } from '@angular/core';
import {PostService} from '../services/posts.services';

@Component({
  
  selector: 'user',
  moduleId: module.id,
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hoobies: string[];
  isShowHobbies: boolean;
  postCollection:Post[];

  constructor(private postService:PostService) {
    this.name = 'Angular';
    this.email = 'angular.start@gmail';

    this.address = {
      city: 'Nice',
      streetNumber: 85,
      streetName: 'biot'
    };

    this.isShowHobbies = false;
    this.hoobies = ['sport', 'technology', 'books'];

    this.postService.getPosts().subscribe(
      post => { this.postCollection = post; });

  }

  showHobbies() {
    this.isShowHobbies = !this.isShowHobbies;
  }

  addHobby(hobby: string) {
    this.hoobies.push(hobby);
  }

  deleteHobby(i:number){    
    this.hoobies.splice(i, 1);
  }

}

interface address {
  city: string;
  streetName: string;
  streetNumber: number;
}

interface Post{
  id:number;
  title:string;
  body:string;
}