import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
declare let $: any;
@Component({
  selector: 'app-sectionlist',
  templateUrl: './sectionlist.component.html',
  styleUrls: ['./sectionlist.component.scss']
})
export class SectionlistComponent implements OnInit {
  showModal: boolean;
  constructor(public dialog: MatDialog,
    ) {}
  ngOnInit() {
    $(document).ready(function () {
      //Pagination numbers
      $('#sectionDetails').DataTable ({
        "pagingType": "simple_numbers"
      });
    });
  }
  openDialog() {
    this.dialog.open(AddSection, {
      width: "600px",
      data: {
        animal: 'panda'
      }
    });
  }
  openEditDialog() {
    this.dialog.open(EditSection, {
      width: "600px",
      data: {
        animal: 'panda'
      }
    });
  }

}

@Component({
  selector: 'add-section',
  templateUrl: 'addsection.html',
  styleUrls: ['./sectionlist.component.scss']
})
export class AddSection {
  constructor(
    public dialogRef: MatDialogRef<AddSection>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
   
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //email validation for forgot password
  emailError: string;
  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/;
 
  close() {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'edit-section',
  templateUrl: 'editsection.html',
  styleUrls: ['./sectionlist.component.scss']
})
export class EditSection {
  constructor(
    public dialogRef: MatDialogRef<EditSection>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
   
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //email validation for forgot password
  emailError: string;
  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/;
 
  close() {
    this.dialogRef.close();
  }

}
 