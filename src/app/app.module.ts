import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodolistComponent } from './shared/components/todolist/todolist.component';
import { TodoformComponent } from './shared/components/todoform/todoform.component';
import { FormsModule } from '@angular/forms';
import { StdformComponent } from './shared/components/stdform/stdform.component';
import { StdtableComponent } from './shared/components/stdtable/stdtable.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoformComponent,
    StdformComponent,
    StdtableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
