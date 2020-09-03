import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
export class AddDiscovery {

  addDiscoverSectionForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddDiscovery>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router, private fb: FormBuilder,

  ) { }

  ngOnInit() {
    this.addDiscoverSectionForm = this.fb.group({
      sectionName: [null,[Validators.required]]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  //email validation for forgot password
  // emailError: string;
  // emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/;

  close() {
    this.dialogRef.close();
  }

  // saveDiscoversectionDetails() {
  //   if (this.addDiscoverSectionForm.valid) {

  //     this.discovetSectionService.saveDiscoverSectionDetails(this.addDiscoverSectionForm.value).subscribe(
  //       (resp: any) => {
  //         if (resp.success) {
  //           alert(resp.message);

  //           setTimeout(() => {
  //             if (confirm("Do you want to add more discover section ?")) {
  //               this.addDiscoverSectionForm.reset();
  //             } else {
  //               this.backToJobList();
  //             }
  //           }, 500);
  //         } else {
  //           setTimeout(() => {
  //             alert(resp.message);

  //           }, 1000);
  //         }
  //       },
  //       (error) => {
  //         setTimeout(() => {
  //           alert("Error! - Something Went Wrong! Try again.");
  //         }, 1000);
  //       }
  //     );
  //   } else {
  //     alert("Please, fill the proper details.");
  //   }
  // }
  backToJobList() {
    this.router.navigate(["/jobshome"]);
  }
}