import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResponsiveTreeNodeModule } from 'responsive-tree-node';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResponsiveTreeNodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
