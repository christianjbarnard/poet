import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic';
import { EnhancedComponent } from './enhanced';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    EnhancedComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
