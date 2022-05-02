import { DeviceEditComponent } from './components/device/device-edit/device-edit.component';
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
    canActivate:[AuthGuard],
    children:[
      {path:'',component:CategoryCrudComponent},
      {path:'create',component:CategoryCreateComponent},
      {path:':id/edit',component:CategoryEditComponent}
    ]

  },
  {
    path:'device',
    canActivate:[AuthGuard],
    children:[
      {path:'',component:DeviceCrudComponent},
      {path:'create',component:DeviceCreateComponent},
      {path:':id/edit',component:DeviceEditComponent}
    ]
  },
  {
    path:'**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
