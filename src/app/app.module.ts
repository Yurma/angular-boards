import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
