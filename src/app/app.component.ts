import { Component } from '@angular/core';
// import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
// import { StatisticsDialogComponent } from './components/statistics-dialog/statistics-dialog.component';
import { Statistic } from './models/statistic';
import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material';

import { TestDialogComponent } from './components/test-dialog/test-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private test1: Statistic;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    // this.test = new Statistic();
    // dialogConfig.data = this.test;

    //this.test1.category = 'zzzz';
    // console.log(this.test);
    dialogConfig.data = this.test1;
    console.log(this.test1);

    const dialogRef = this.dialog.open(TestDialogComponent, dialogConfig);
    console.log(dialogConfig.data);

    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog send: ${value}`);
    });
    //
  }
  /* constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true; // inner dialog

    const dialogRef = this.dialog.open(StatisticsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed -> ' + result);
      // this.name = result;
    });
  }*/
}
