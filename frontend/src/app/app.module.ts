import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';

// Angular extra imports
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { JwtModule } from "@auth0/angular-jwt";


// Material Imports
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 
import { CategoryCrudComponent } from './views/category-crud/category-crud.component';
import { CategoryReadComponent } from './components/category/category-read/category-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DeviceCrudComponent } from './views/device-crud/device-crud.component';
import { DeviceReadComponent } from './components/device/device-read/device-read.component';
import { DeviceCreateComponent } from './components/device/device-create/device-create.component';
import { LoginComponent } from './views/login/login.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { DeviceEditComponent } from './components/device/device-edit/device-edit.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    CategoryCreateComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CategoryCrudComponent,
    CategoryReadComponent,
    DeviceCrudComponent,
    DeviceReadComponent,
    DeviceCreateComponent,
    LoginComponent,
    CategoryEditComponent,
    DeviceEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [`${environment.API_DOMAIN}`,'localhost:3000'],
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
