import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { isNullOrUndefined } from 'util';
import { UserserviceService } from '../service/users/userservice.service';
import { VerificationrequestService } from '../service/users/verificationrequest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  usersCount: number = 10;
  soundsCount: number = 20;
  verificationCount: number = 40;
  videosCount: number = 50;
  today: string;
  userId: any;

  constructor(private route: Router,
    private userService: UserserviceService,
    private verificationRequestService: VerificationrequestService,
    private authenticationService: AuthenticationService
  ) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = yyyy + '-' + mm + '-' + dd;
  }

  ngOnInit() {

    this.userId = sessionStorage.getItem(this.authenticationService.SESSION_USER_ID_KEY)

    // to get the count of users
    this.userService.getAllUsersDetails().subscribe((data: any) => {
      if (data.success) {
        if (!isNullOrUndefined(data)) {
          this.usersCount = data['listObject'].length;
        }
      }
    })

    // to get the count of verification Requests
    this.verificationRequestService.getAllVerificationDetails().subscribe((data: any) => {
      if (data.success) {
        if (!isNullOrUndefined(data)) {
          this.verificationCount = data['listObject'].length;
        }
      }
    })
  }


  routeToUsers() {
    this.route.navigate(['home/listusers'])
  }

  routeToSounds() {
    this.route.navigate(['home/soundshome/sounds'])
  }

  routeToVerification() {
    this.route.navigate(['home/profileverification'])
  }

  routeToVideos() {
    this.route.navigate(['home/allvideos'])
  }

  routeToReports() {
    this.route.navigate(['home/reports'])
  }

  routeToDiscoverySection() {
    this.route.navigate(['home/discoverysectionlist'])
  }
}
