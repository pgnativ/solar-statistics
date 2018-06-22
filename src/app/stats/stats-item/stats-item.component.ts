import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
//import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';

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
  templateUrl: 'stats-item-add.component.html',
})
export class StatsItemAddComponent {

  /*constructor(
    public dialogRef: MatDialogRef<StatsItemAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }*/

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
