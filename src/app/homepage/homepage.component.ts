import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  title: String;
  constructor(private router: Router) {
    this.title = 'wellcome to Homepage';
  }

  navigateTo(pathName: string): void {
    this.router.navigate([pathName]);
  }

  navigations: string[] = ['firstpage', 'secondpage'];
}
