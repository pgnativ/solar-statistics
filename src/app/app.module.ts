import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { MatDialogModule, MatDialogRef, MatDialogConfig } from '@angular/material';
import { TestDialogComponent } from './components/test-dialog/test-dialog.component';

// import { StatisticsDialogComponent } from './components/statistics-dialog/statistics-dialog.component';
// import { StatisticsItemComponent } from './components/statistics-item/statistics-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDialogComponent,
    // StatisticsDialogComponent,
    // StatisticsItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,

    MatDialogModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    TestDialogComponent,
    // StatisticsDialogComponent,
  ]
})
export class AppModule { }
