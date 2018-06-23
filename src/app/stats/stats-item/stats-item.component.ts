import { NgModule } from "@angular/core";
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-stats-item',
  templateUrl: './stats-item.component.html',
  styleUrls: ['./stats-item.component.css']
})
export class StatsItemComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  private addItem() {
    const dialogRef = this.dialog.open(StatsItemAddComponent);
  }

  /*private addItem() {
    let dialogRef = this.dialog.open(StatsItemAddComponent, {
      height: '400px',
      width: '600px',
    });
  }*/

}

@Component({
  template: `
    <h1 mat-dialog-title>Add file</h1>
    <mat-dialog-content>
      Content goes here
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button>Add</button>
      <button mat-button>Cancel</button>
    </mat-dialog-actions>
  `,
})
export class StatsItemAddComponent {

}

/*@Component({
  selector: 'stats-item-add',
  templateUrl: 'stats-item-add.component.html',
})
export class StatsItemAddComponent {

  constructor(
    public dialogRef: MatDialogRef<StatsItemAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/
