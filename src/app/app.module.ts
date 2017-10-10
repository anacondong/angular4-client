import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RuleComponent } from './rule/rule.component';

import { RuleService } from './rule/rule.service';

@NgModule({
  declarations: [
    AppComponent,
    RuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
