import { Component, OnInit } from '@angular/core';
import { VerificationrequestService } from 'src/app/modules/service/users/verificationrequest.service';
import { MatSnackBar } from '@angular/material';
declare var $: any;

@Component({
  selector: 'app-profileverification',
  templateUrl: './profileverification.component.html',
  styleUrls: ['./profileverification.component.scss']
})
export class ProfileverificationComponent implements OnInit {

  verificationList:any;

  constructor(private verificationRequestService:VerificationrequestService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllVerificationDetails();
    // $(document).ready(function () {
    //   //Pagination numbers
    //   // $.fn.dataTable.ext.classes.sPageButton = 'button button-primary';
    //   $('#paginationSimpleNumbers').DataTable({
    //     "pagingType": "simple_numbers"
    //   });
    // });
    
    // this.verificationRequestService.getProfileFile(this.doctorId).subscribe((response: any) => {
    //   if (response.success) {
    //     let base64Data = response.byteArray;
    //     this.placeholder_path = 'data:image/jpeg;base64,' + base64Data;
    //     this.doctorPhotoName = response.object.profilePicture;
    //   } else {
    //     console.log("There is no Profile Photo for this candidate.");
    //   }
    // }, (error: any) => {
    //   console.log(error);
    // });

  }
  getAllVerificationDetails() {
    this.verificationRequestService.getAllVerificationDetails().subscribe((data: any) => {
      if (data.success) {
        this.verificationList = data['listObject'];
        console.log(this.verificationList);
      //   this.verificationList.forEach(function (value) { 
      //     console.log(value);       
      // }); 
        $(document).ready(function () {
          $('#paginationSimpleNumbers').DataTable();
        });
      }
    })
  }

  approveUser(verification) {
    console.log(verification.user.userId);
    
    if (confirm(`Approve ${verification.user.knoktalkId} user`)) {
      this.verificationRequestService.approveUser(verification.user.userId).subscribe((response: any) => {
        if (response.success) {
          this.getAllVerificationDetails();
        }
        this._snackBar.open(verification.user.knoktalkId, response.message, { duration: 2500, });
      })
    }
  }

  declineUser(verification) {
    console.log(verification.user.userId);
    
    if (confirm(`Decline ${verification.user.knoktalkId} user`)) {
      this.verificationRequestService.declineUser(verification.user.userId).subscribe((response: any) => {
        if (response.success) {
          this.getAllVerificationDetails();
        }
        this._snackBar.open(verification.user.knoktalkId, response.message, { duration: 2500, });
      })
    }
  }

  isApproved(verificationFlag) {
    if (verificationFlag == 1) {
      return true
    }
    return false
  }
}
