import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppWindowObjectComponent } from './app-window-object/app-window-object.component';

@NgModule({
  declarations: [
    AppComponent,
    AppWindowObjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule // imports firebase/database, only needed for database features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
