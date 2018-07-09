import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Statistic } from '../../models/statistic';



@Component({
  selector: 'app-statistics-dialog',
  templateUrl: './statistics-dialog.component.html',
  styleUrls: ['./statistics-dialog.component.css']
})
export class StatisticsDialogComponent implements OnInit {

  form: FormGroup;
  description: string;
  test1: Statistic;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<StatisticsDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) {description, longDescription, category}: Statistic, // didn't work
    // @Inject(MAT_DIALOG_DATA) public data: Statistic, // worked
   // @Inject(MAT_DIALOG_DATA) private {description}: Statistic, // testing
  ) {
    // console.log(this.description);
    // this.description = description;
  }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.dialogRef.close('return string: Confirm');
  }

  onCloseCancel() {
    this.dialogRef.close('return string: Close');
  }

}
