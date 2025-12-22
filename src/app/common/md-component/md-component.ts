import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-md-component',
  imports: [],
  templateUrl: './md-component.html',
  styleUrl: './md-component.css',
})
export class MdComponent {
  @Input() text : string = "";
}
