import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
// DELETE THESE LATER
import { AppWindowObjectComponent } from './app-window-object/app-window-object.component';
import { AppAddNewPropertyComponent } from './app-add-new-property/app-add-new-property.component';
import { AppWindowObjectPageComponent } from './app-window-object-page/app-window-object-page.component';
// Components
import { AppHomepageComponent } from './app-homepage/app-homepage.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppDevtoolsComponent } from './app-devtools/app-devtools.component';
import { AppObjectTierComponent } from './app-object-tier/app-object-tier.component';
import { AppObjectPropertyComponent } from './app-object-property/app-object-property.component';
import { AppDetailPageComponent } from './app-detail-page/app-detail-page.component';
import { AppDetailPageNavbarComponent } from './app-detail-page-navbar/app-detail-page-navbar.component';
import { AppSearchbarComponent } from './app-searchbar/app-searchbar.component';
// Services
import { AppBroadcaster } from './services/app-broadcaster.service';
import { WindowRef } from './services/app-window-ref.service';
// Pipes
import { FilterPipe } from './pipes/filterby.pipe';
import { PropertiesPipe } from './pipes/properties.pipe';

const appRoutes: Routes = [{
    path: '',
    component: AppDevtoolsComponent
  }, {
    path: 'add',
    component: AppAddNewPropertyComponent,
    data: {
      object_route: '/window-object'
    }
  }, {
    path: 'window-object',
    component: AppWindowObjectPageComponent
  }, {
    path: '**', // a catch all for page not found, maybe make a PageNotFoundComponent
    component: AppDevtoolsComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    AppWindowObjectComponent,
    AppAddNewPropertyComponent,
    AppWindowObjectPageComponent,
    AppHomepageComponent,
    AppNavbarComponent,
    AppDevtoolsComponent,
    AppObjectTierComponent,
    AppObjectPropertyComponent,
    AppDetailPageComponent,
    AppDetailPageNavbarComponent,
    AppSearchbarComponent,
    FilterPipe,
    PropertiesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule // imports firebase/database, only needed for database features
  ],
  providers: [
    AppBroadcaster,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
