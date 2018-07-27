import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppRouting } from './app.routing.module';
import { ListPageComponent } from './stats/list-page/list-page.component';
import { HomePageComponent } from './stats/home-page/home-page.component';
import { HeaderComponent } from './stats/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    HomePageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
