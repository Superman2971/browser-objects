import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppWindowObjectComponent } from './app-window-object/app-window-object.component';
import { AppAddNewPropertyComponent } from './app-add-new-property/app-add-new-property.component';

const appRoutes: Routes = [{
    path: '',
    component: AppWindowObjectComponent
  }, {
    path: 'add',
    component: AppAddNewPropertyComponent,
    data: {
      object_route: '/window-object'
    }
  }, {
    path: '**', // a catch all for page not found, maybe make a PageNotFoundComponent
    component: AppWindowObjectComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    AppWindowObjectComponent,
    AppAddNewPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule // imports firebase/database, only needed for database features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
