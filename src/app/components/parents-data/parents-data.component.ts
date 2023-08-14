import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parents-data',
  templateUrl: './parents-data.component.html',
  styleUrls: ['./parents-data.component.css']
})
export class ParentsDataComponent {
  @Input() name: string = '';
  @Input() userData!: {email:string, role:string};
}
