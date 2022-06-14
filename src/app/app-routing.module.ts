import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children:[
    {
      path: 'main',
      loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'main'
    }
  ]
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: '/main'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
