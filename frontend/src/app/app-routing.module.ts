import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { DeviceCreateComponent } from './components/device/device-create/device-create.component';
import { NgModule, Component } from '@angular/core';
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
    path:'category',
    children:[
      {path:'',component:CategoryCrudComponent},
      {path:'create',component:CategoryCreateComponent},
      {path:':id/edit',component:CategoryEditComponent}
    ]

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
