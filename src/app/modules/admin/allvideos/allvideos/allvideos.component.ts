import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.component.html',
  styleUrls: ['./allvideos.component.scss']
})
export class AllvideosComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
    $(document).ready(function () {
      //Pagination numbers
      $('#paginationSimpleNumbers').DataTable ({
        "pagingType": "simple_numbers"
      });
    });
  }
  openDialog() {
    this.dialog.open(AddToDiscovery, {
      width: "600px",
      data: {
        animal: 'panda'
      }
    });
  } 

}
  @Component({
    selector: 'add-todiscovery',
    templateUrl: 'addtodiscovery.html',
    styleUrls: ['./allvideos.component.scss']
  })
  export class AddToDiscovery{
    constructor(
      public dialogRef: MatDialogRef<AddToDiscovery>,
      // @Inject(MAT_DIALOG_DATA) public data: DialogData,
      private router: Router,
     
    ) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    //email validation for forgot password
    // emailError: string;
    // emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/;
  
  
    close() {
      this.dialogRef.close();
    }

    }
  
  

