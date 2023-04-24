import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { BookComponent } from './components/book/book.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'technologies',
    pathMatch:'full',
    component:TechnologiesComponent
  },
  {
    path:'books',
    pathMatch:'full',
    component:BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
