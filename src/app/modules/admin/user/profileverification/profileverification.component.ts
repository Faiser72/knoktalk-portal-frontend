import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-profileverification',
  templateUrl: './profileverification.component.html',
  styleUrls: ['./profileverification.component.scss']
})
export class ProfileverificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      //Pagination numbers
      // $.fn.dataTable.ext.classes.sPageButton = 'button button-primary';
      $('#paginationSimpleNumbers').DataTable({
        "pagingType": "simple_numbers"
      });
    });
  }

}
