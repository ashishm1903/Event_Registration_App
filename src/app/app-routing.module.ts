import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EventlistComponent} from './eventlist/eventlist.component'
import{RegisterComponent} from './register/register.component'
import{LoginComponent} from './login/login.component'
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path:"Eventlist", canActivate:[AuthGuard], component:EventlistComponent
  },
  {
    path:"register/:id", component:RegisterComponent
  },
  {
    path:"", component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
