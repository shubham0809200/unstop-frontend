import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssessmentComponent } from './components/pages/assessment/assessment.component';
import { RoundStatusComponent } from './components/pages/round-status/round-status.component';
import { ErrorRouteComponent } from './components/error-route/error-route.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.model';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MyLibraryComponent } from './components/pages/my-library/my-library.component';
import { MainScreenComponent } from './components/pages/main-screen/main-screen.component';
import { FormAssesmentComponent } from './components/widgets/form-assesment/form-assesment.component';
import { SidebarComponent } from './components/widgets/sidebar/sidebar.component';

// for form
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AssessmentComponent,
    MyLibraryComponent,
    RoundStatusComponent,
    MainScreenComponent,
    ErrorRouteComponent,
    FormAssesmentComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
