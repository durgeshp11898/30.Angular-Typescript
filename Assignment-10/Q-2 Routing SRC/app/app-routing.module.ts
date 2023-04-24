import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { BookComponent } from './components/book/book.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [

  {
    path:"",
    component:DefaultComponent,
    pathMatch:'full'
  },
  {
    path:"books",
    pathMatch:'full',
    component:BookComponent,
  },
  {
    path:"technologies",
    pathMatch:'full',
    component:TechnologiesComponent,
  },
  {
    path:"**",
    pathMatch:'full',
    component:PagenotfoundComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
