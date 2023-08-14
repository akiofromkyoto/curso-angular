import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = "Akio";
  idade: number=20;
  job="Dev";
  hobbies = ["fut", "game" ];
  car = {
    name: 'Polo',
    year: 2019,
  };
}
