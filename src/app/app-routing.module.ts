import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ReferVariableComponent } from './refer-variable/refer-variable.component';
import { ContainerComponent } from './container/container.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

const routes: Routes = [

  { path: 'course', component: CourseComponent },

  { path: 'form', component: ReferVariableComponent },

  { path: 'view', component: ContainerComponent },

  { path: 'customer', component: CustomerlistComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
