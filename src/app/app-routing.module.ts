import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
 
  {path:"intro",component:IntroductionComponent},
  {path:"project",component:ProjectComponent},
  {path:"contact",component:ContactComponent},
  {path:"",component:IntroductionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
