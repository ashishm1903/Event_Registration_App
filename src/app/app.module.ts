import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import{DataTablesModule} from 'angular-datatables'
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import{NgxPaginationModule} from 'ngx-pagination';
import { RegisterComponent } from './register/register.component'
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component'
import { EventregiService } from './eventregi.service';


@NgModule({
  declarations: [
    AppComponent,
    EventlistComponent,
    RegisterComponent,
    LoginComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    Ng2SearchPipeModule,
    FormsModule,
    OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [EventregiService,
    {
  provide :APP_INITIALIZER,
  useFactory:(eventservice:EventregiService)=>
  () =>eventservice.loadConfigurationData(),
  deps:[EventregiService],
  multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
