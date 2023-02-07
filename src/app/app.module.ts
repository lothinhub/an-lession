import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { DirectiveComponent } from './directive/directive.component';
import { CourseComponent } from './course/course.component';
import { FilterComponent } from './filter/filter.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { ReferVariableComponent } from './refer-variable/refer-variable.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    NotificationComponent,
    HeaderComponent,
    SearchComponent,
    DirectiveComponent,
    CourseComponent,
    FilterComponent,
    SearchCourseComponent,
    ReferVariableComponent,
    CustomerlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
