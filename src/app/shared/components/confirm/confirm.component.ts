import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {


  constructor(
    public dialog: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public msg: string
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialog.close(false);
  }
  confirmDialog(): void {
    this.dialog.close(true);
  }
}
