import { HomeComponent } from './components/home/home.component';
import { DeviceCreateComponent } from './components/device/device-create/device-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryCrudComponent } from './views/category-crud/category-crud.component';
import { AuthGuard } from './guards/auth.guard';
import { DeviceCrudComponent } from './views/device-crud/device-crud.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    redirectTo:'/device',
  },
  {
    path:'category',
    component: CategoryCrudComponent
    // canActivate:[AuthGuard]
  },
  {
    path:'category/create',
    component:CategoryCreateComponent
    // canActivate:[AuthGuard]
  },
  {
    path:'device',
    component:DeviceCrudComponent
  },
  {
    path:'device/create',
    component:DeviceCreateComponent
  },
  {
    path:'**',
    redirectTo:'/login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
