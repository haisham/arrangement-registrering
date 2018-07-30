import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterationOverviewComponent } from './registeration-overview/registeration-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    RegisterationOverviewComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  entryComponents: [RegisterUserComponent, RegisterationOverviewComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
