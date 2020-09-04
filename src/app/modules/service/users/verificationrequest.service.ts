import { Injectable } from '@angular/core';
import { Api } from 'src/app/api.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerificationrequestService {
  private baseUrl = Api.baseUrl;
  constructor(private http: HttpClient) { }

  // get All Verification details
  getAllVerificationDetails() {
    return this.http.get(this.baseUrl + '/admin/verificationrequest/getVerificationAndUserDetails')
  }
}
