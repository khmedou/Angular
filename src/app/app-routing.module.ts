import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVOLSComponent } from './add-vols/add-vols.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RezervationComponent } from './reservation/rezervation.component';
import { SignupComponent } from './signup/signup.component';
import { VoleComponent } from './vole/vole.component';

const routes: Routes = [
   
  {path:'',redirectTo:'login',pathMatch:'full'} ,
  {path: 'login',component :LoginComponent},
  {path :'signup',component :SignupComponent},
  {path: 'list',component :ListComponent},
  {path: 'vols', component : VoleComponent},
  {path:  'reserve', component : RezervationComponent},
  {path: 'addVOL', component :   AddVOLSComponent}


];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
