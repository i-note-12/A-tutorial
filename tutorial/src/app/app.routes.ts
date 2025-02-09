import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LinkTestComponent } from './link-test/link-test.component';

// 4200にアクセスするとhomeにリダイレクトする
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  // 追加
  {
    path: 'list-test',
    component: LinkTestComponent
  },
];
