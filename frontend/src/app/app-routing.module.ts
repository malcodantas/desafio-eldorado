import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryCrudComponent } from './views/category-crud/category-crud.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path:'category',
    component: CategoryCrudComponent
    // canActivate:[AuthGuard]
  },
  {
    path:'category/create',
    component:CategoryCreateComponent
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
