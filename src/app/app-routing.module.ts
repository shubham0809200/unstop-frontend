import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './components/pages/assessment/assessment.component';
import { RoundStatusComponent } from './components/pages/round-status/round-status.component';
import { ErrorRouteComponent } from './components/error-route/error-route.component';
import { MainScreenComponent } from './components/pages/main-screen/main-screen.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { MyLibraryComponent } from './components/pages/my-library/my-library.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainScreenComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'assessment', component: AssessmentComponent },
          { path: 'my-library', component: MyLibraryComponent },
          { path: 'round-status', component: RoundStatusComponent },
          { path: '', redirectTo: 'assessment', pathMatch: 'full' },
          { path: '**', component: ErrorRouteComponent },
        ],
      },
    ],
  },
  { path: '**', component: ErrorRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
