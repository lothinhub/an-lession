import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { ReferVariableComponent } from './refer-variable/refer-variable.component';
import { ContainerComponent } from './container/container.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { BindDirectivePropertyComponent } from './bind-directive-property/bind-directive-property.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'course', component: CourseComponent },

  { path: 'form', component: ReferVariableComponent },

  { path: 'view', component: ContainerComponent },

  { path: 'customer', component: CustomerlistComponent },

  { path: 'viewChild', component: ViewChildComponent },

  { path: 'binding', component: BindDirectivePropertyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
