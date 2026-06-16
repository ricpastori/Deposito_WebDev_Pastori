import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home-component/home-component';
import { AboutComponent } from './features/pages/about-component/about-component';
import { SignalExampleComponent } from './features/signal-example-component/signal-example-component';
import { ParentComponent } from './features/InputOutputSample/parent-component/parent-component';
import { ErrorPageComponent } from './features/pages/error-page-component/error-page-component';
import { UserProfileComponent } from './features/pages/user-profile-component/user-profile-component';
import { LoginPageComponent } from './features/pages/login-page-component/login-page-component';
import { AdminPageComponent } from './features/pages/admin-page-component/admin-page-component';
import { authGuard } from './core/guards/auth-guard';
import { adminGuard } from './core/guards/admin-guard';
import { authExerciseGuard } from './core/guards/auth-exercise-guard';
import { SettingsPageComponent } from './features/pages/settings-page-component/settings-page-component';
import { EditPageComponent } from './features/pages/edit-page-component/edit-page-component';
import { unsavedChangesGuard } from './core/guards/unsaved-changes-guard';
import { GuardLoginComponent } from './features/guard-login-component/guard-login-component';
import { DashboardComponent } from './features/dashboard-component/dashboard-component';

export const routes: Routes = [
  {path: '', redirectTo: '/login2', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},

  {path: 'signal-ex', component: SignalExampleComponent},
  {path: 'parent', component: ParentComponent},

  {path: 'login', component: LoginPageComponent},

  {path: 'login2', component: GuardLoginComponent},

  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [authGuard, adminGuard],
    canActivateChild: [adminGuard],
    children: [
      {path: 'settings', component: SettingsPageComponent}
    ]
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authExerciseGuard]
  },

  {path: "edit", component: EditPageComponent, canDeactivate: [unsavedChangesGuard]},

  {path: 'user/:id', component: UserProfileComponent},

  {path: '**', component: ErrorPageComponent }
];
