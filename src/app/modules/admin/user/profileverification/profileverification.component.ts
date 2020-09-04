import { Component, OnInit } from '@angular/core';
import { VerificationrequestService } from 'src/app/modules/service/users/verificationrequest.service';
declare var $: any;

@Component({
  selector: 'app-profileverification',
  templateUrl: './profileverification.component.html',
  styleUrls: ['./profileverification.component.scss']
})
export class ProfileverificationComponent implements OnInit {

  verificationList:any;

  constructor(private verificationRequestService:VerificationrequestService) { }

  ngOnInit() {
    this.getAllVerificationDetails();
    // $(document).ready(function () {
    //   //Pagination numbers
    //   // $.fn.dataTable.ext.classes.sPageButton = 'button button-primary';
    //   $('#paginationSimpleNumbers').DataTable({
    //     "pagingType": "simple_numbers"
    //   });
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
}
