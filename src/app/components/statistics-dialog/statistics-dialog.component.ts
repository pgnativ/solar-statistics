import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Statistic} from '../../models/statistic';

@Component({
  selector: 'app-statistics-dialog',
  templateUrl: './statistics-dialog.component.html',
  styleUrls: ['./statistics-dialog.component.css']
})
export class StatisticsDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<StatisticsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: Statistic,
  ) {

    dialogRef.disableClose = true;

    // MAT_DIALOG_DATA.toString();

    // console.log(dialogData.date);
    console.log(dialogData);
  }

  ngOnInit() {
  }

}
