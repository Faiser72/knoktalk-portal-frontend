import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
declare var $: any;

@Component({
  selector: 'app-discoverysectionlist',
  templateUrl: './discoverysectionlist.component.html',
  styleUrls: ['./discoverysectionlist.component.scss']
})
export class DiscoverysectionlistComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
    $(document).ready(function () {
      //Pagination numbers
      $('#paginationSimpleNumbers').DataTable({
        "pagingType": "simple_numbers"
      });
    });
  }
  openDialog() {
    this.dialog.open(AddDiscovery, {
      width: "600px",
      data: {
        animal: 'panda'
      }
    });
  } 
}

@Component({
  selector: 'add-discovery',
  templateUrl: 'adddiscovery.html',
  styleUrls: ['./discoverysectionlist.component.scss']
})
export class AddDiscovery{
  constructor(
    public dialogRef: MatDialogRef<AddDiscovery>,
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