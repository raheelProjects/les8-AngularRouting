import { Component } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css'],
})
export class FirstpageComponent {
  headerText: string;

  constructor() {
    this.headerText = ' Wellcome to First Page component';
  }
}
