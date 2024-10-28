import { Component } from '@angular/core';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css'],
})
export class SecondpageComponent {
  headerText: string;

  constructor() {
    this.headerText = ' Wellcome to Second Page component';
  }
}
