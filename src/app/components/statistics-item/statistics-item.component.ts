import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// import { StatisticsDialogComponent } from '../../components/statistics-dialog/statistics-dialog.component';

@Component({
  selector: 'app-statistics-item',
  templateUrl: './statistics-item.component.html',
  styleUrls: ['./statistics-item.component.css']
})
export class StatisticsItemComponent implements OnInit {

  // name: string;

  constructor(public dialog: MatDialog) { }

  /* openDialog() {
    const dialogRef = this.dialog.open(StatisticsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  } */

  ngOnInit() {
  }

}
