import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PageTwoComponent } from './features/page-two/page-two.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page-2', component: PageTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
