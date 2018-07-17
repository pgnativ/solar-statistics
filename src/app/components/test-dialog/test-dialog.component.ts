import {Component, Inject, OnInit, Injectable} from '@angular/core';
import { Statistic } from '../../models/statistic';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material';

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
@Injectable()
export class TestDialogComponent implements OnInit {

  //
  public day: Statistic;
  //
  constructor(
    public dialogRef: MatDialogRef<TestDialogComponent>,
    // why???
    @Inject(MAT_DIALOG_DATA) private data: Statistic
  ) {}

  ngOnInit() {
    //this.day = this.data.day;
  }

  close() {
    this.dialogRef.close(this.data);
  }

}
