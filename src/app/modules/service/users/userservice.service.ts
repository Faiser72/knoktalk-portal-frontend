import { Injectable } from '@angular/core';
import { Api } from 'src/app/api.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {
  private baseUrl = Api.baseUrl;
  constructor(private http: HttpClient) { }

  // get All User details
  getAllUsersDetails() {
    return this.http.get(this.baseUrl + '/admin/users/getAllUsersDetails')
  }

  // blockUser 
  blockUser(knoktalkId: any) {
    return this.http.put(`${this.baseUrl}/admin/users/blockUser`, null, { params: { "knoktalkId": knoktalkId } });
  }

  // blockUser 
  unBlockUser(knoktalkId: any) {
    return this.http.put(`${this.baseUrl}/admin/users/unBlockUser`, null, { params: { "knoktalkId": knoktalkId } });
  }

  // blockUser 
  deleteUser(knoktalkId: any) {
    return this.http.put(`${this.baseUrl}/admin/users/deleteUser`, null, { params: { "knoktalkId": knoktalkId } });
  }
}
