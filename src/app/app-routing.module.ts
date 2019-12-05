import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuardGuard } from './utilities/guards/auth-guard.guard';
import { NotLoggedGuardGuard } from './utilities/guards/not-logged-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'signin', loadChildren: () => import('./modules/signin/signin.module').then(m => m.SigninModule), canActivate: [NotLoggedGuardGuard] },
  { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule), canActivate: [NotLoggedGuardGuard] },
  { path: 'settings', loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuardGuard] },
  { path: 'articles', loadChildren: () => import('./modules/article-detail/article-detail.module').then(m => m.ArticleDetailModule) },
  { path: 'profile/:value', redirectTo: 'profile/:value/author', pathMatch: 'full' },
  { path: 'profile/:value/:filter', loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'editor', loadChildren: () => import('./modules/editor/editor.module').then(m => m.EditorModule), canActivate: [AuthGuardGuard] },
  { path: 'editor/:slug', loadChildren: () => import('./modules/editor/editor.module').then(m => m.EditorModule), canActivate: [AuthGuardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
