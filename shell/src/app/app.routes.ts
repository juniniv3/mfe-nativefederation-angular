import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [

  {
    path: 'remotea',
    loadComponent: () =>
      loadRemoteModule('mfea', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'remoteb',
    loadComponent: () =>
      loadRemoteModule('mfeb', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'remotec',
    loadComponent: () =>
      loadRemoteModule('mfec', './Component').then((m) => m.AppComponent),
  }
];
