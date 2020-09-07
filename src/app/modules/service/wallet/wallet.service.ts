import { Injectable } from '@angular/core';
import { Api } from 'src/app/api.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private baseUrl = Api.baseUrl;
  constructor(private http: HttpClient) { }

  // get WalletDetails by id
  getWalletDetailsByUserId(userId: number) {
    return this.http.get(`${this.baseUrl}/admin/wallet/getWalletDetailsByUserId/${userId}`)
  }

  // // blockUser 
  // blockUser(userId: any) {
  //   return this.http.put(`${this.baseUrl}/admin/users/blockUser`, null, { params: { "userId": userId } });
  // }

  // // blockUser 
  // unBlockUser(userId: any) {
  //   return this.http.put(`${this.baseUrl}/admin/users/unBlockUser`, null, { params: { "userId": userId } });
  // }

  // // blockUser 
  // deleteUser(userId: any) {
  //   return this.http.put(`${this.baseUrl}/admin/users/deleteUser`, null, { params: { "userId": userId } });
  // }
}
