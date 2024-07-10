import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
 
  {path:"intro",component:IntroductionComponent,data: { title: 'Introduction' }},
  {path:"project",component:ProjectComponent,data: { title: 'Projects' }},
  {path:"contact",component:ContactComponent,data: { title: 'Contact' }},
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
