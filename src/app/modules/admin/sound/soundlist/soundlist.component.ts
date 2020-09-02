import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soundlist',
  templateUrl: './soundlist.component.html',
  styleUrls: ['./soundlist.component.scss']
})
export class SoundlistComponent implements OnInit {

  constructor(private router:Router) { } 

  ngOnInit() {
    $(document).ready(function () {
      //Pagination numbers
      $('#sectionDetails').DataTable ({
        "pagingType": "simple_numbers"
      });
    });
  }
  routeToUploadSound(){
    this.router.navigate(['uploadSound'])
  }
}
