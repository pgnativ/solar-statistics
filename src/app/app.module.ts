import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import {  } from '@angular/cdk';
import { MatDialogModule } from '@angular/material';
//import {config} from 'rxjs/index';

import { StatsItemComponent } from './stats/stats-item/stats-item.component';
import { AddStatsItemComponent } from './stats/add-stats-item/add-stats-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsItemComponent,
    AddStatsItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
