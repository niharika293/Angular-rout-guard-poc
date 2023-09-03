import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { DefaultComponent } from './default/default.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { OrdersEditComponent } from './orders-edit/orders-edit.component';
import { OrdersAddComponent } from './orders-add/orders-add.component';
import { AuthchildrenGuard } from './authchildren.guard';
import { ProfileCheckGuard } from './profile-check.guard';
import { LoginComponent } from './login/login.component';
import { DeactivateGuard } from './deactivate.guard';

const routes: Routes = [
  {path : '', component : DefaultComponent}, // for default page opening
  { path: 'profile', canLoad : [ProfileCheckGuard],
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
 },
  // {path : 'orders', component : OrdersComponent, canActivate : [AuthGuard]},
  {path : 'orders', children : [
    {path : '', component : OrdersComponent, canActivate : [AuthGuard]},
    // {path : 'edit', component : OrdersEditComponent, canActivateChild : [AuthchildrenGuard]}, 
    // canActivate needs to be on the parent route, leaving it on the child route won't make any effect. 
    { path : '', canActivateChild : [AuthchildrenGuard], children : [
      {path : 'edit', component : OrdersEditComponent},
      {path : 'add', component : OrdersAddComponent}
    ]}
  ]},
   // here authguard makes sure that the user is logged in & he can access the orders, 
    // but in order to rsetrict edit-orders by that user we can use canActivateChild here. 
  {path : 'login', component : LoginComponent, runGuardsAndResolvers : 'always', canDeactivate : [DeactivateGuard]},
  {path : '**', component : PageNotFoundComponent } ,// if no route matches 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
