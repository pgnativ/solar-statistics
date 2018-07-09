import { Component } from '@angular/core';
// import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
// import { StatisticsDialogComponent } from './components/statistics-dialog/statistics-dialog.component';
// import { Statistic } from 'models/statistic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {}
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
