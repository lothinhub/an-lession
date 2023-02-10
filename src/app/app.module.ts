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
import { ViewChildComponent } from './view-child/view-child.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { BindDirectivePropertyComponent } from './bind-directive-property/bind-directive-property.component';
import { StyleDirective } from './bind-directive-property/style.directive';
import { TypescriptComponent } from './typescript/typescript.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { HomeComponent } from './home/home.component';
import { DemoserviceComponent } from './demoservice/demoservice.component';
import { LogService } from './Service/logger.Service';
import { AddUserComponent } from './add-user/add-user.component';


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
    CustomerlistComponent,
    ViewChildComponent,
    HostListenerComponent,
    BindDirectivePropertyComponent,
    StyleDirective,
    TypescriptComponent,
    JavascriptComponent,
    HomeComponent,
    DemoserviceComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
