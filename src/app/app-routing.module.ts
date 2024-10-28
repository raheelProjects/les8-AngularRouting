import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'firstpage',
    component: FirstpageComponent,
  },
  {
    path: 'secondpage',
    component: SecondpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
